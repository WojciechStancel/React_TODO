const IsDoneBtn = ({handleDoneNote, className, children}) => {
	return (
		<button
			className={className}
			onClick={handleDoneNote}>
			{children}
		</button>
	);
};
export default IsDoneBtn;
