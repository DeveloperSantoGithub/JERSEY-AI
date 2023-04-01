import React from 'react';
import CustomButton from './CustomButton';

const FilePicker = ({ file, setFile, readFile }) => {
	return (
		<div className="filepicker-container">
			<input
				id="file-upload"
				type="file"
				accept="image/*"
				onChange={(e) => setFile(e.target.files[0])}
			/>

			<label htmlFor="file-upload" className="filepicker-label">
				Upload File
			</label>
		</div>
	);
};

export default FilePicker;
