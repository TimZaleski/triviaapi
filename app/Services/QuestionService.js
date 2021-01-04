import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js";

class QuestionService {
  async getQuestions(url) {
    let res = await api.get(url);
    ProxyState.questions = res.data.results.map(p => new Question(p))
  }

  checkAnswer(questionID, selection)
  {
    let question = ProxyState.questions.filter(t=> t.id === questionID);
    if(question)
    {
      if (question[0].correctAnswer === selection)
     {
       alert("Correct!");
     }
     else
     {
       alert("Wrong!");
     }
    }
  }
}



export const questionService = new QuestionService();