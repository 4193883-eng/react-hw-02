import {Button} from "../Button/Button.jsx";

export function FeedbackOptions({handleButtonClick}) {
	return (
		<div>
			<Button variant={'contained'} role={"good"} onClick={handleButtonClick}>Good</Button>
			<Button variant={'contained'} role={"neutral"} onClick={handleButtonClick}>Neutral</Button>
			<Button variant={'contained'} role={"bad"} onClick={handleButtonClick}>Bad</Button>
		</div>
	)
}