import React, { useState,useEffect } from 'react';
import firebase from '../Firebase';
import {Typography, Container, MenuItem, Select} from '@material-ui/core';
import Questions from './Questions';

const LandingPage = () =>{

    const [GetQuiz,SetQuiz] = useState([])
    const [GetQuestions,SetQuestions] = useState({})

    useEffect(()=>{
        GetQuizFromFirebase()
    },[])


    const GetQuizFromFirebase = () =>{
        var commentsRef = firebase.database().ref('movieQuiz');
        commentsRef.on("value", function(snapshot) {
            snapshot.forEach(function(child) { 
                if(child.val().name !== undefined){
                    SetQuiz(prevArray => [...prevArray, child.val()])
                }             
            });
          });
           
    }


    const HandleOptionEvent = event =>{
        let list = []
        var param = event.target.value
        var items =  GetQuiz.filter((item)=> item.name === param)
        items[0].questions.forEach(element => {
            list.push({"isCorrectAnswer":undefined,...element})
        });
        SetQuestions(list)
    }


    return(
        <Container maxWidth="lg">
          <Typography component="div"  />
          <div>
                <h1>Welcome to movie Quiz</h1>
          </div>
                      
         <div>                
            <Select defaultValue={'DEFAULT'} onChange={HandleOptionEvent}>
            <MenuItem disabled value="DEFAULT">Choose your option</MenuItem>
                
                {GetQuiz.map((item,index) =>    
                    <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                )}                        
            </Select>               
         </div>

        {
            Object.keys(GetQuestions).length === 0 ?
            <h2>Select a quiz</h2> : 
            <Questions questions={GetQuestions} SetQuestions={SetQuestions}/> 
        }

            
        </Container>

    )
}

export default LandingPage
