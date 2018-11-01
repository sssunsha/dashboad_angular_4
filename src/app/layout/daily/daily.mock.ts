import { Task, ETaskType, ETaskImportantLevel, ETaskUrgentLevel, ETaskStatus } from "./daily.model";


export const mockTaskList: Array<Task> = [
	{
		name: 'task1',
		type: ETaskType.WORKING,
		importance: ETaskImportantLevel.CRITICAL,
		urgency: ETaskUrgentLevel.HIGH,
		content: 'task1 content',
		output: '',
		result: ETaskStatus.OPEN,
	}
];