const NoteButton = ({ className, onClick, children }) => {
	return (
		<button className={`notes-list-btn ${className}`} onClick={onClick}>
			{children}
		</button>
	);
};
export default NoteButton;
