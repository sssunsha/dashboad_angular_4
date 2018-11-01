import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Task } from './daily.model';
import { mockTaskList } from './daily.mock';
import { TaskTypeOptions } from './daily.config';


@Component({
    selector: 'app-daily',
    templateUrl: './daily.component.html',
    styleUrls: ['./daily.component.scss'],
    animations: [routerTransition()]
})
export class DailyComponent implements OnInit {

	tasks:Array<Task>;
	taskTypeOptions = TaskTypeOptions;

    constructor() {}

    ngOnInit() {
		this.tasks = mockTaskList;
	}
}
