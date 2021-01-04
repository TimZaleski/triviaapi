import { generateId } from "../Utils/GenerateID.js";

export default class Question {
  constructor({ question, correct_answer, incorrect_answers, category, difficulty }) {
    this.question = question;
    this.correctAnswer = correct_answer;
    this.incorrectAnswers = incorrect_answers;
    
    this.difficulty = difficulty;
    this.category = category;
    this.id = generateId();

    this.allAnswers = [];
    for(let i = 0; i < this.incorrectAnswers.length; i++)
    {
      this.allAnswers.push(this.incorrectAnswers[i]);
    }
    this.allAnswers.push(this.correctAnswer);

    this.allAnswers = this.shuffleArray(this.allAnswers);
  }


  get Template() {
    let temp = `
    <li>${this.question} `;

    for (let i = 0; i < this.allAnswers.length; i++)
    {
      temp += `<ul><button class="btn btn-success" type="submit" onclick="app.questionController.checkAnswer('${this.id}', '${this.allAnswers[i]}')">${this.allAnswers[i]}</button></ul>`;
    }

    temp += `</li>`;

    return temp;
  }

 shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        }
        return array;
    }
}
