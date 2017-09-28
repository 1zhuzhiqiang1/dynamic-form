import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {DynamicFormQuestionComponent} from './dynamic-form-question/dynamic-form-question.component';
import {QuestionService} from "./service/service.service";
import {ReactiveFormsModule} from "@angular/forms";
import {QuestionControlService} from "./service/question-control.service";
import { TestNgSwitchComponent } from './test-ng-switch/test-ng-switch.component';

@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent,
        TestNgSwitchComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [
        QuestionService,
        QuestionControlService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
