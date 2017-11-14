import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() {

  }

  // Get Questions from Local Storage
  getQuestions(){
    if( localStorage.getItem('questions') === null){
      this.questions = [];
    } else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  // Add Question from Local Storage
  addQuestion(question:Question){
    this.questions.unshift(question);

    // Init local var
    let questions;

    if(localStorage.getItem('questions') === null){
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new array to Local Storage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else{
      questions = JSON.parse(localStorage.getItem('questions'));
      // add new question
      questions.unshift(question);
      // Re set Local Storage
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  // Remove Question from Local Storage
  removeQuestion(question:Question){
    for(let i = 0; i < this.questions.length; i++){
        if(question == this.questions[i]){
          this.questions.splice(i, 1);
          localStorage.setItem('questions', JSON.stringify(this.questions));
        }
    }
  }

}
