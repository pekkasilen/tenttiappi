import {Grid, Typography} from '@mui/material';
import { useContext } from 'react';
import ExamContext from '../Contexts/ExamContext';
import Question from './Question'


const Exam = () => {
    const {selectedExam,setSelectedExam,allExams} = useContext(ExamContext);
    //console.log("Selected exam in Exam: ",selectedExam)
    const questions = allExams.data[selectedExam.i].kysymykset;
    //console.log("In exam: ",questions);
    return(
        <div>
            <Grid container spacing={1}>
                </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2">Tentti: {allExams.data[selectedExam.i].otsikko}</Typography>
                        {questions.length>1
                            ?questions.map((x,i)=><Question qNumber={i} key={i}></Question>):<div/>}
                    </Grid>
                <Grid>
            </Grid>
        </div>
    )
}


export default Exam;
//{allExams.dataselectedExam.kysymykset.map((x,i)=> <Typography>{x} </Typography>)}