import { useState } from "react";

let QuestionsComponent = (props) => {
    let { questions, setPoints, points } = props;
    let [numberOfQuestion, setNumberOfQuestion] = useState(0)


    let anwserQuestion = (anwser) => {
        if (anwser == questions[numberOfQuestion].anwser){
             // points
             setPoints(points+1)
             // mdg
        } else {
            // msg
        }

        if (numberOfQuestion < questions.length-1 ){
            setNumberOfQuestion(numberOfQuestion+1)
        } else {
            // msg
            setTimeout(() => {
                setPoints(0)
                setNumberOfQuestion(0)
            } ,4000)
            
        }
    }

    return (
        <div className="questions"> 
            <div>
                <h2>Question</h2>
                <p id="questionsText"> { questions[numberOfQuestion].text } </p>
                <ul className="options">
                    <li><button onClick={ () => { anwserQuestion(0) }}> {questions[numberOfQuestion].options[0]} </button></li>
                    <li><button onClick={ () => { anwserQuestion(1) }}> {questions[numberOfQuestion].options[1]} </button></li>
                    <li><button onClick={ () => { anwserQuestion(2) }}> {questions[numberOfQuestion].options[2]} </button></li>
                </ul>
            </div>

        </div>
    )
}

export default QuestionsComponent;