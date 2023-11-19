import { useState } from "react";

import "./App.css";
import ListItem from "./components/ListItem/ListItem";
import AddNoteForm from "./components/AddNoteForm/AddNoteForm";
import NotesHeader from "./components/NotesHeader/NotesHeader";

const notesList = [
	{ id: 1, body: "Pozmywać naczynia i wynieść śmieci", added: new Date() },
	{ id: 2, body: "Zrobić zakupy", added: new Date() },
	{ id: 3, body: "Wyprowadzić psa", added: new Date() },
];

function App() {
	const [isFormShown, setFormShown] = useState(false);
	const [taskList, setTaskList] = useState(notesList);

	return (
		<>
			<div className="notes">
				<NotesHeader
					taskList={taskList}
					isFormShown={isFormShown}
					setFormShown={setFormShown}
				/>
				<ListItem taskList={taskList} setTaskList={setTaskList} />

				{isFormShown && (
					<AddNoteForm taskList={taskList} setFormShown={setFormShown} />
				)}
			</div>
		</>
	);
}

export default App;
