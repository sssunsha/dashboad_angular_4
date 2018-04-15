import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss'],
    animations: [routerTransition()]
})
export class StatisticsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
