import { useState } from "react";
import "./NoteItem.css";
import IsDoneItem from "./IsDoneItem";
const NoteItem = ({ note, handleRemoveNote }) => {
	const [isDone, setIsDone] = useState(false);

	const handleDoneNote = () => {
		setIsDone(!isDone);
	};

	return (
		<li className={`notes-container `}>
			{isDone ? (
				<IsDoneItem className="notes-item notes-item-is-done" note={note} />
			) : (
				<IsDoneItem className="notes-item" note={note} />
			)}

			<div>
				{isDone ? (
					<button
						className="notes-list-btn notes-item-is-done"
						onClick={handleDoneNote}>
						Cofnij
					</button>
				) : (
					<button className="notes-list-btn" onClick={handleDoneNote}>
						Zrobione
					</button>
				)}

				<button
					className="notes-list-btn"
					onClick={() => handleRemoveNote(note.id)}>
					Usuń
				</button>
			</div>
		</li>
	);
};
export default NoteItem;
