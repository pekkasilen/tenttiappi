import { useEffect, useState } from 'react';
import Exam from './components/Exam';
import SelectExam from './components/SelectExam';
import ExamContext from './Contexts/ExamContext';
import {getAllExams, getExam, newExam, editExam} from './Services/ExamService'
import axios from 'axios'
import { Select, Button, Typography } from '@mui/material';
import {MuiThemeProvider, createTheme} from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00FF00'
    },
    secondary: {
      main: '#0000FF'
    },
    tertiary: {
      main: '#000000'
    }
  },
});

const App = () =>{
  const [loading, setLoading] = useState(true);
  const [selectedExam,setSelectedExam] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const [checkedAnswers, setCheckedAnswers] = useState();
  const [allExams, setAllExams] = useState({});
  const value = {selectedExam, setSelectedExam, allExams, checkedAnswers, setCheckedAnswers};
  
  useEffect(async ()=>{
    var allFetchedExams = await getAllExams();
    setAllExams(allFetchedExams);
    setLoading(false);
    //console.log(allFetchedExams);
  },[])
  
  const handleChange = () => {
    setLoading(false);
  }
  
  

  return (
    <div className="initial">
      <ThemeProvider theme={theme}>
        {!loading?
          
          <ExamContext.Provider value={value}>
            <Typography variant="h3">Tenttisovelluksien tenttisovellus</Typography>
            <div className="initial"/>
            <SelectExam/> 
            <div className="initial"/>
            {selectedExam!=null && <Exam/>} 
          </ExamContext.Provider>
          :<div/>
        }
      </ThemeProvider>
    </div>
  );
}

export default App;
