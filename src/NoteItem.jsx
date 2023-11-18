import { useState } from "react";

const NoteItem = ({ note, handleRemoveNote }) => {
	const [isDone, setIsDone] = useState(false);

	const handleDoneNote = () => {
		setIsDone(!isDone);
	};

	return (
		<li className={`notes-container `}>
			{isDone ? (
				<p className="notes-item notes-item-is-done">
					{note.body} <br />
					Dodana: {note.added.toLocaleDateString()}
				</p>
			) : (
				<p className="notes-item">
					{note.body} <br />
					Dodana: {note.added.toLocaleDateString()}
				</p>
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
