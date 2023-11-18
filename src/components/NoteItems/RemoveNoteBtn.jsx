const RemoveNoteBtn = ({handleRemoveNote, note}) => {
	return (
		<button
			className="notes-list-btn"
			onClick={() => handleRemoveNote(note.id)}>
			Usuń
		</button>
	);
};
export default RemoveNoteBtn;
