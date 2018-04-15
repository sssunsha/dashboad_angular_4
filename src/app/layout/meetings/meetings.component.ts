import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-meetings',
    templateUrl: './meetings.component.html',
    styleUrls: ['./meetings.component.scss'],
    animations: [routerTransition()]
})
export class MeetingsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
