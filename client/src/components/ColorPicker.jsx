import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';

const ColorPicker = () => {
	const snap = useSnapshot(state);

	return (
		<div className="absolute left-full ml-3">
			<SketchPicker
				color={snap.shirtColor}
				disableAlpha
				onChange={(color) => (state.shirtColor = color.hex)}
				presetColors={[
					'#ccc',
					'#4F5E8C',
					'#F2762E',
					'#5741A6',
					'#D9A273',
					'#213A40',
					'#EAF205',
					'#F25764',
					'#734124',
					'#262626',
					'#F2622E',
					'#BBF2E8',
				]}
			/>
		</div>
	);
};

export default ColorPicker;
