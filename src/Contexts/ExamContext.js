import React, {createContext, useState } from 'react';

const ExamContext = createContext({
    selectedExam: null,
    setSelectedExam: ()=>{},
    allExams: null,
    checkedAnswers:null,
    setCheckedAnswers:()=>{}
});

export default ExamContext;