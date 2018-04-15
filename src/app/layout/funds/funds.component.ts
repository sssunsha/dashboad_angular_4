import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './funds.component.html',
    styleUrls: ['./funds.component.scss'],
    animations: [routerTransition()]
})
export class FundsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
