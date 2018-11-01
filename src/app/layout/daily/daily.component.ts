import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Task } from './daily.model';
import { mockTaskList } from './daily.mock';
import { TaskTypeOptions, TaskImportanceOptions, TaskUrgencyOptions, TaskTimeCostOptions, TaskPlaceOptions, TaskStatusOptions } from './daily.config';


@Component({
    selector: 'app-daily',
    templateUrl: './daily.component.html',
    styleUrls: ['./daily.component.scss'],
    animations: [routerTransition()]
})
export class DailyComponent implements OnInit {

	tasks:Array<Task>;
	taskTypeOptions = TaskTypeOptions;
	taskImportanceOptions = TaskImportanceOptions;
	taskUrgencyOptions = TaskUrgencyOptions;
	taskTimeCostOptions = TaskTimeCostOptions;
	taskPlaceOptions = TaskPlaceOptions;
	taskStatusOptions = TaskStatusOptions;

    constructor() {}

    ngOnInit() {
		this.tasks = mockTaskList;
	}
}
