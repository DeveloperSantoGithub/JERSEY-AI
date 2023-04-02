import React from 'react';
import CustomButton from './CustomButton';

function AiPicker({ prompt, setPrompt, generatingImg, handlePromptSubmit }) {
	return (
		<div className="aipicker-container">
			<textarea
				placeholder="Notice!: We are currently turning off this AI function for some reason. Enjoy the other features!!"
				rows={5}
				value={prompt}
				// onChange={(e) => setPrompt(e.target.value)}
				className="aipicker-textarea placeholder-red-400 font-bold"
			/>

			{/* <div className="flex flex-wrap gap-3">
				{generatingImg ? (
					<CustomButton
						type="outline"
						title="Asking AI..."
						customStyles="text-xs"
					/>
				) : (
					<>
						<CustomButton
							type="outline"
							title="AI Logo"
							customStyles="text-xs"
							handleClick={() => handlePromptSubmit('logo')}
						/>
						<CustomButton
							type="filled"
							title="AI Full"
							customStyles="text-xs"
							handleClick={() => handlePromptSubmit('full')}
						/>
					</>
				)}
			</div> */}
		</div>
	);
}

export default AiPicker;
