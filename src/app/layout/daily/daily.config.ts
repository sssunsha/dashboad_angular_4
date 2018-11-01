import { TaskSelectOption, ETaskType } from './daily.model';

export const TaskTypeOptions: Array<TaskSelectOption> = [
	{label: 'working', code: ETaskType.WORKING},
	{label: 'learning', code: ETaskType.LEARNING},
	{label: 'hobby', code: ETaskType.HOBBY},
	{label: 'others', code: ETaskType.OTHERS},
];