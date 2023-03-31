const CustomButton = ({ type, title, handleClick, customStyles }) => {
	const generateStyle = (type) => {
		if (type === 'filled') {
		} else {
		}
	};

	return (
		<button
			onClick={handleClick}
			className={`px-2 py-1.5 flex-1 rounded-md  ${customStyles}`}
			style={generateStyle(type)}
		>
			{title}
		</button>
	);
};

export default CustomButton;
