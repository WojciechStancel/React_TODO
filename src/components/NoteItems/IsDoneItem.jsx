const IsDoneItem = ({ note, className }) => {
	return (
		<p className={`notes-item ${className}`}>
			{note.body} <br />
			Dodana: {note.added.toLocaleDateString()}
		</p>
	);
};
export default IsDoneItem;
