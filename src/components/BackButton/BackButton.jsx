import { useNavigate } from "react-router-dom";
import { Button, Label } from "./BackButton.styled";

export default function BackButton({ location }) {
	let navigate = useNavigate();
	const onGoBack = () => {
		navigate(location?.state?.from ?? "/");
	};
	return (
		<Button type="button" onClick={onGoBack}>
			<Label>Back</Label>
		</Button>
	);
}
