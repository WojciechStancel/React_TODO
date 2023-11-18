const IsDoneItem = ({ note, className }) => {
	return (
		<p className={className}>
			{note.body} <br />
			Dodana: {note.added.toLocaleDateString()}
		</p>
	);
};
export default IsDoneItem;
