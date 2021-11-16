import { Select, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import ExamContext from '../Contexts/ExamContext';
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Button, Menu } from "@mui/material";
import Exam from "./Exam";


const SelectExam = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [chosen, setChosen] = useState(null);
    const {selectedExam, setSelectedExam, allExams, setCheckedAnswers} = useContext(ExamContext);
    const open = Boolean(anchorEl);

    useEffect(()=>{
        if(chosen!==null){
            setSelectedExam(chosen);
            //console.log("chosen ",chosen)
            let numberOfQuestions = allExams.data[chosen.i].kysymykset.length
            //console.log("nrofquestions ",numberOfQuestions);
            setCheckedAnswers(Array.from({length:numberOfQuestions},()=>Array.from({length:10},()=>false)));
        }
    },[chosen])


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

    const options = allExams;
    return(
        <div>
            <Button
                variant="contained"
                color="secondary"
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                
            >
                <Typography color="white" variant="h5">Valitse tentti</Typography>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby' : 'basic-button'
                }}
            >
                {options.data.map((x,i)=> {
                    return(
                    <MenuItem key={i} onClick={()=>{setChosen({i}); handleClose()}}>
                        {x.otsikko}
                    </MenuItem>
                    )
                })}
            </Menu>
        </div>
    )
}

export default SelectExam;