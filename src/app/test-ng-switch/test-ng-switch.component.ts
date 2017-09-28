import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test-ng-switch',
    templateUrl: './test-ng-switch.component.html',
    styleUrls: ['./test-ng-switch.component.css']
})
export class TestNgSwitchComponent implements OnInit {
    is_show_switch: boolean = true;
    is_show_switch_case:boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

}
