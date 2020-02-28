import React,{useState}  from 'react';
import './css/questions.css'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';


const Questions = props =>{


    const { questions,SetQuestions } = props

    const [Answered,SetAnswered] = useState(false)
    

        const handleChange = (event) => {
            let value = event.target.value;
            questions.forEach((element,index) => {
                element.answers.forEach(answer => {
                    if(value === answer.answer &&  answer.isCorrect === true){
                        element.isCorrectAnswer = true
                    }else if(value === answer.answer &&  answer.isCorrect !== true){
                        element.isCorrectAnswer = false
                    }
                });
            });
            SetQuestions(questions)
        };

        const submit = () =>{
            SetAnswered(false)
            setTimeout(()=>{
                SetAnswered(true)
                alert(Getscore())
            },500)
        }

        const Getscore = () =>{
            let count = 0
            let totalQuestion = questions.length
            questions.forEach(element => {
                if(element.isCorrectAnswer === true){
                    count += 1
                }
            });
            return `${count} / ${totalQuestion}`
        }

    return(
        <div className="questionContainer">
            <ol>
                {
                    questions.map((item,index)=>
                       <li key={index}>
                        <div>
                            <h3>{item.question}</h3>
                            {
                                Answered === true ?
                                <h5>{ item.isCorrectAnswer === false ? "Incorrect" : "correct" }</h5> : <div />
                            }
                            <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
                                {
                                    item.answers.map((child,indx)=>
                                        <FormControlLabel key={indx} value={child.answer} control={<Radio />} label={child.answer} />
                                    )
                                }   
                            </RadioGroup>
                        </div>
                       </li> 
                    )
                }
            </ol>
            <Button variant="contained" color="primary" onClick={submit}>SUBMIT</Button>
        </div>
    )
}

export default Questions