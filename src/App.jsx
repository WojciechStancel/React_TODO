import { useState } from "react";

import './App.css';
import ListItem from "./components/ListItem";
import AddNoteForm from "./components/AddNoteForm";
import NotesHeader from "./components/NotesHeader";

const notesList = [
	{ id: 1, body: "Pozmywać naczynia i wynieść śmieci", added: new Date() },
	{ id: 2, body: "Zrobić zakupy", added: new Date() },
	{ id: 3, body: "Wyprowadzić psa", added: new Date() },
];

function App() {
	const [isFormShown, setFormShown] = useState(false);
	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState(notesList);

	function handleRemoveNote(id) {
		const updatedList = taskList.filter((note) => note.id !== id);
		setTaskList(updatedList);
	}

	return (
		<>
			<div className="notes">
				<NotesHeader
					taskList={taskList}
					isFormShown={isFormShown}
					setFormShown={setFormShown}
				/>
				<ListItem taskList={taskList} handleRemoveNote={handleRemoveNote} />

				{isFormShown && (
					<AddNoteForm
						task={task}
						setTask={setTask}
						taskList={taskList}
						setFormShown={setFormShown}
					/>
				)}
			</div>
		</>
	);
}

export default App;
