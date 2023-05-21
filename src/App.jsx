import {Button} from "./components/Button/Button";
import styles from "./App.module.css";
import {useState} from "react";
import {Stack} from "@mui/material";
import {Statistics} from "./components/Statistics/Statistics.jsx";
import {FeedbackOptions} from "./components/FeedbackOptions/FeedbackOptions.jsx";
import {Section} from "./components/Section/Section.jsx";
import {Notification} from "./components/Notification/Notification.jsx";

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    function increment(callback){
        callback((prevValue) => prevValue+1)
    }
    function handleButtonClick(role) {
        if (role == "good") {increment(setGood)}
        else if (role == "neutral") {increment(setNeutral)}
        else if (role == "bad") {increment(setBad)}
    }
    function countTotalFeedback() {
        const sum = good+bad+neutral;
        return sum;
    }
    function countPositiveFeedbackPercentage() {
        const sum = countTotalFeedback();
        const percentage = Math.round(good / sum * 100);
        return percentage;
    }
    return (
        <div className={styles.font}>
            <Section title={"Please leave feedback!"}>
                <FeedbackOptions handleButtonClick={handleButtonClick}/>
            </Section>
            <Section title={"Statistics"}>
                {((bad > 0) || (good > 0) || (neutral > 0)) && <Statistics good={good}
                             bad={bad}
                             neutral={neutral}
                             positivePercentage={countPositiveFeedbackPercentage()}
                             total={countTotalFeedback()}/>}
                {!((bad > 0) || (good > 0) || (neutral > 0)) && <Notification message="There is no feedback"/> }
            </Section>
        </div>
    )
}

export default App
