import iconImg from "./assets/pencil-plus.svg";
import "./AddButton.css";

const AddButton = ({ formShown, setter }) => {
	function handleNoteForm() {
		setter(!formShown);
	}
	return (
		<button onClick={handleNoteForm} className="addNote">
			<img src={iconImg} />

		</button>
	);
};
export default AddButton;
