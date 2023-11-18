import { useState } from "react";
import "./NoteItems.css";
import IsDoneItem from "./IsDoneItem";
import IsDoneBtn from "./IsDoneBtn";
import RemoveNoteBtn from "./RemoveNoteBtn";
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
					<IsDoneBtn
						className="notes-list-btn notes-item-is-done"
						handleDoneNote={handleDoneNote}>
						Cofnij
					</IsDoneBtn>
				) : (
					<IsDoneBtn className="notes-list-btn" handleDoneNote={handleDoneNote}>
						Zrobione
					</IsDoneBtn>
				)}

				<RemoveNoteBtn
					handleRemoveNote={() => handleRemoveNote(note.id)}
					note={note}
				/>
			</div>
		</li>
	);
};
export default NoteItem;
