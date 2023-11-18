import "./ListItem.css";
import NoteItem from "./NoteItems/NoteItem";

const ListItem = ({ taskList, handleRemoveNote }) => {
	return (
		<ul className="notes-list">
			{taskList.map((note) => (
				<NoteItem
					key={note.id}
					note={note}
					handleRemoveNote={handleRemoveNote}
				/>
			))}
		</ul>
	);
};

export default ListItem;
