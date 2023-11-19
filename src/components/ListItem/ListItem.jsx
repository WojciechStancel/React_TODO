import "./ListItem.css";
import NoteItem from "../NoteItems/NoteItem";

const ListItem = ({ taskList, setTaskList }) => {
	return (
		<ul className="notes-list">
			{taskList.map((note) => (
				<NoteItem
					key={note.id}
					note={note}
					setTaskList={setTaskList}
					taskList={taskList}
				/>
			))}
		</ul>
	);
};

export default ListItem;
