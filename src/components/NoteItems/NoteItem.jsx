import { useState } from "react";
import "./NoteItems.css";
import IsDoneItem from "./IsDoneItem";
import NoteButton from "./NoteButton";
const NoteItem = ({ note, taskList, setTaskList }) => {
	const [isDone, setIsDone] = useState(false);

	const handleDoneNote = () => {
		setIsDone(!isDone);
	};

	function handleRemoveNote(id) {
		const updatedList = taskList.filter((note) => note.id !== id);
		setTaskList(updatedList);
	}

	return (
		<li className="notes-container">
			{
				<IsDoneItem
					className={isDone ? "notes-item-is-done" : ""}
					note={note}
				/>
			}

			<div>
				{
					<NoteButton
						className={isDone ? "notes-item-is-done" : ""}
						onClick={handleDoneNote}>
						{isDone ? "Cofnij" : "Zrobione"}
					</NoteButton>
				}

				<NoteButton onClick={() => handleRemoveNote(note.id)}>Usuń</NoteButton>
			</div>
		</li>
	);
};
export default NoteItem;
