import "./ListItem.css";
import NoteItem from "./NoteItem";

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
