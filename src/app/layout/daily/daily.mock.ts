import { Task, ETaskType, ETaskImportantLevel, ETaskUrgentLevel, ETaskStatus, ETaskPlace } from './daily.model';


export const mockTaskList: Array<Task> = [
	{
		name: 'task1',
		type: ETaskType.WORKING,
		importance: ETaskImportantLevel.CRITICAL,
		urgency: ETaskUrgentLevel.HIGH,
		place: ETaskPlace.OFFICE,
		content: 'task1 content',
		output: '',
		status: ETaskStatus.OPEN,
	}
];