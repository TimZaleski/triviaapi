import { ProxyState } from "../AppState.js";
import { questionService } from "../Services/QuestionService.js";

function _drawQuestion() {
  let template = '<ol>'
  const questions = ProxyState.questions;
  questions.forEach(p => template += p.Template);
  document.getElementById('app').innerHTML = template + '</ol>'
}
function _drawNext() {
  // @ts-ignore
  document.getElementById("next").disabled = ProxyState.next.length <= 0
}
function _drawPrevious() {
  // @ts-ignore
  document.getElementById("previous").disabled = ProxyState.previous.length <= 0
}



export default class QuestionController {
  constructor() {
    //NOTE register subscribers first
    ProxyState.on('questions', _drawQuestion)
  }

  loadQuestions()
  {
    window.event.preventDefault();
    let form = window.event.target;
    
      // @ts-ignore
      let difficulty = form.difficulty.value;
      // @ts-ignore
      let category = form.category.value;

    let params = `?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;

    questionService.getQuestions(params);
     // @ts-ignore
    form.reset();
  }

  checkAnswer(questionID, selection)
  {
   questionService.checkAnswer(questionID, selection); 
  }
}