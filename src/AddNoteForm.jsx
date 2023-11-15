const AddNoteForm = ({ taskList, task, setTask, setFormShown }) => {
	function handleSubmitForm(e) {
		e.preventDefault();
		const newTask = { id: taskList.length + 1, body: task, added: new Date() };
		taskList.push(newTask);
		setFormShown(false);
		setTask("");
	}

	return (
		<form onSubmit={handleSubmitForm} className="addNoteForm">
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
