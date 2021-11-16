import axios from 'axios'
const qURL = "http://localhost:8000/";

export const getAllExams = async () => {
    const exams = await axios.get((qURL+"tentit"));
    return exams;
}

export const getExam = async (examName) => {

}

export const createExam = async (newExam) => {

}

export const editExam = async (examName, editedQuestion) => {

}