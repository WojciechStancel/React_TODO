import "./NotesHeader.css";
import AddButton from "./AddButton";
import noteImg from "../assets/notebook.svg";

const NotesHeader = ({ taskList, isFormShown, setFormShown }) => {
	return (
		<div className="notes-header">
			<h1>
				<img src={noteImg} alt="note image" />
				Notatki
			</h1>
			<p>
				{taskList.length
					? `Liczba notatek: ${taskList.length}`
					: "Brak zadań, dodaj nowe!"}
			</p>
			<AddButton formShown={isFormShown} setter={setFormShown} />
		</div>
	);
};
export default NotesHeader;
