import {Grid, Typography, Paper, Button} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import ExamContext from '../Contexts/ExamContext';

const Question = (props) => {
    
    const {selectedExam, setSelectedExam, allExams, checkedAnswers, setCheckedAnswers} = useContext(ExamContext);
    const questions = allExams.data[selectedExam.i]["kysymykset"][props.qNumber];

    useEffect(()=>{

    },[checkedAnswers])

    const handleClick = (i) => {
        let copyOfCheckedAnswers = JSON.parse(JSON.stringify(checkedAnswers));
        copyOfCheckedAnswers[props.qNumber][i] = !checkedAnswers[props.qNumber][i];
        setCheckedAnswers(copyOfCheckedAnswers);
    }

    return(
        <Paper sx={{padding:3}} elevation={12}>
            <Button color="tertiary" size="large">{questions["kysymys"]}</Button>
            <Grid container spacing={1}>
                {questions["vastaukset"].map((x,i)=> {
                    return(
                        <Grid item xs={12}>
                            <Button key={i} variant="contained" onClick={()=>handleClick(i)} color={!checkedAnswers[props.qNumber][i]?"secondary":"primary"} fullWidth>{x.v}</Button>
                        </Grid>
                    )
                })}
            </Grid>
        </Paper>
    )
}





export default Question;