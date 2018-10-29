import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-daily',
    templateUrl: './daily.component.html',
    styleUrls: ['./daily.component.scss'],
    animations: [routerTransition()]
})
export class DailyComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
