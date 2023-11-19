import "./AddNoteForm.css";
import closeImg from "../../assets/x.svg";
import { useState } from "react";

const AddNoteForm = ({ taskList, setFormShown }) => {
	const [task, setTask] = useState("");

	function handleSubmitForm(e) {
		e.preventDefault();
		const newTask = { id: Math.random(), body: task, added: new Date() };
		taskList.push(newTask);
		setFormShown(false);
		setTask("");
	}

	return (
		<form onSubmit={handleSubmitForm} className="addNoteForm">
			<img
				src={closeImg}
				alt="close button"
				onClick={() => {
					setFormShown(false);
					setTask("");
				}}
			/>
			<label htmlFor="inputNote">Wprowadź nową notatkę 😎</label>
			<input
				type="text"
				id="inputNote"
				onChange={(e) => {
					setTask(e.target.value);
				}}
				placeholder="Wpisz treść zadania"
			/>

			{task.length >= 3 ? (
				<button>Dodaj</button>
			) : (
				<button disabled>Musisz dodać jakieś zadanie!</button>
			)}
		</form>
	);
};
export default AddNoteForm;
