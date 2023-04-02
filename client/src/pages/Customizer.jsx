import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import {
	AiPicker,
	ColorPicker,
	FilePicker,
	Tab,
	CustomButton,
} from '../components';

const Customizer = () => {
	const snap = useSnapshot(state);

	//=> States:
	//=> For FilePicker:
	const [file, setFile] = useState('');

	//=> For AiPicker:
	// const [prompt, setPrompt] = useState('');
	// const [generatingImg, setGeneratingImg] = useState(false);

	//=> For Tabs:
	const [activeEditorTab, setActiveEditorTab] = useState('');
	const [activeFilterTab, setActiveFilterTab] = useState({
		logoShirt: true,
		stylishShirt: false,
	});

	const [activePicker, setActivePicker] = useState(false);

	//=> Tab Content Show Based on Active Tab:
	const generateTabContent = () => {
		switch (activeEditorTab) {
			case 'colorpicker':
				if (activePicker) return <ColorPicker />;
				break;

			case 'filepicker':
				if (activePicker)
					return (
						<FilePicker file={file} setFile={setFile} readFile={readFile} />
					);
				break;

			case 'aipicker':
				if (activePicker) return <AiPicker />;
				break;

			default:
				return null;
		}
	};

	// const handlePromptSubmit = async (type) => {
	// 	if (!prompt) return alert('Please enter some text for ask!');

	// 	try {
	// 		setGeneratingImg(true);

	// 		const response = await fetch('http://localhost:8080/api/v1/dalle', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify({
	// 				prompt,
	// 			}),
	// 		});

	// 		const data = await response.json();

	// 		handleDecals(type, `data:image/png;base64,${data.photo}`);
	// 	} catch (error) {
	// 		alert(error);
	// 	} finally {
	// 		setGeneratingImg(false);
	// 		setActiveEditorTab('');
	// 	}
	// };

	const handleDecals = (type, result) => {
		const decalType = DecalTypes[type];

		//=> Set New Uploaded (logo and Decal) Files:
		state[decalType.stateProperty] = result;

		//=> Add and Remove (logo and Decal) Files and Toggle Filter Btns:
		if (!activeFilterTab[decalType.filterTab]) {
			handleActiveFilterTab(decalType.filterTab);
		}
	};

	//=> Toggle Filter Btns:
	const handleActiveFilterTab = (tabName) => {
		switch (tabName) {
			case 'logoShirt':
				state.isLogoTexture = !activeFilterTab[tabName];
				break;
			case 'stylishShirt':
				state.isFullTexture = !activeFilterTab[tabName];
				break;
			default:
				state.isLogoTexture = true;
				state.isFullTexture = false;
				break;
		}

		//=> Set Filter Tab Updated value to the state:
		setActiveFilterTab((prevState) => {
			return {
				...prevState,
				[tabName]: !prevState[tabName],
			};
		});
	};

	//=> Read New Uploaded Files:
	const readFile = (type) => {
		reader(file).then((result) => {
			handleDecals(type, result);
			setActiveEditorTab('');
		});
	};

	return (
		<AnimatePresence>
			{!snap.intro && (
				<>
					{/* Editor Tabs: */}
					<motion.div
						className="absolute top-0 left-0 z-10"
						{...slideAnimation('left')}
					>
						<div className="flex items-center min-h-screen">
							<div className="editortabs-container tabs">
								{EditorTabs.map((tab) => (
									<Tab
										key={tab.name}
										tab={tab}
										handleClick={() => {
											setActiveEditorTab(tab.name);
											setActivePicker(!activePicker);
										}}
									/>
								))}

								{generateTabContent()}
							</div>
						</div>
					</motion.div>

					{/* Back Button: */}
					<motion.div
						className="absolute z-10 top-5 right-5"
						{...fadeAnimation}
					>
						<CustomButton
							type="filled"
							title="Go Back"
							handleClick={() => (state.intro = true)}
							customStyles="w-fit px-4 py-2.5 font-bold text-sm"
						/>
					</motion.div>

					{/* Filter Tabs:  */}
					<motion.div
						className="filtertabs-container"
						{...slideAnimation('up')}
					>
						{FilterTabs.map((tab) => (
							<Tab
								key={tab.name}
								tab={tab}
								isFilterTab
								isActiveTab={activeFilterTab[tab.name]}
								handleClick={() => handleActiveFilterTab(tab.name)}
							/>
						))}

						{/* Download button */}
						<button className="download-btn" onClick={downloadCanvasToImage}>
							<img
								src={download}
								alt="download_image"
								className="w-3/5 h-3/5 object-contain"
							/>
						</button>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Customizer;
