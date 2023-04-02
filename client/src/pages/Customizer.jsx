import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
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
	const [file, setFile] = useState('');

	const [aiPrompt, setAiPrompt] = useState('');
	const [generatingImg, setGeneratingImg] = useState(false);

	const [activeEditorTab, setActiveEditorTab] = useState('');
	const [activeFilterTab, setActiveFilterTab] = useState({
		logoShirt: true,
		stylishShirt: false,
	});

	//=> Tab Content Show Based on Active Tab:
	const generateTabContent = () => {
		switch (activeEditorTab) {
			case 'colorpicker':
				return <ColorPicker />;
			case 'filepicker':
				return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
			case 'aipicker':
				return (
					<AiPicker
						prompt={aiPrompt}
						setPrompt={setAiPrompt}
						generatingImg={generatingImg}
						handleAiPromptSubmit={handleAiPromptSubmit}
					/>
				);
			default:
				return null;
		}
	};

	const handleAiPromptSubmit = async (type) => {
		if (!aiPrompt) return alert('Please enter a prompt!');

		try {
			// Ai call
		} catch (error) {
			alert(error);
		} finally {
			setGeneratingImg(false);
			setActiveEditorTab('');
		}
	};

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
										handleClick={() => setActiveEditorTab(tab.name)}
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
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Customizer;
