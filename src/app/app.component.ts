import {Component} from '@angular/core';
import {QuestionService} from "./service/service.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    questions: any[];

    constructor(service: QuestionService) {
        this.questions = service.getQuestions();
        console.log("questions=" + JSON.stringify(this.questions));
    }
}
