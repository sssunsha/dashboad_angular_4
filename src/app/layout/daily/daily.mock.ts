import { Task, ETaskType, ETaskImportantLevel, ETaskUrgentLevel, ETaskStatus, ETaskPlace, ETaskLife } from './daily.model';


export const mockTaskList: Array<Task> = [
	{
		name: 'task1',
		type: ETaskType.WORKING,
		importance: ETaskImportantLevel.CRITICAL,
		urgency: ETaskUrgentLevel.HIGH,
		timeCost: ETaskLife.ONE_HOUR,
		place: ETaskPlace.OFFICE,
		content: 'task1 content',
		output: '',
		status: ETaskStatus.OPEN,
	},
	{
		name: 'task2',
		type: ETaskType.WORKING,
		importance: ETaskImportantLevel.CRITICAL,
		urgency: ETaskUrgentLevel.HIGH,
		timeCost: ETaskLife.HALF_HOUR,
		place: ETaskPlace.OFFICE,
		content: 'task2 content',
		output: '',
		status: ETaskStatus.OPEN,
	}
];