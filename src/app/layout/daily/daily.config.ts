import { TaskSelectOption, ETaskType, ETaskImportantLevel, ETaskUrgentLevel, ETaskLife, ETaskPlace, ETaskStatus } from './daily.model';

export const TaskTypeOptions: Array<TaskSelectOption> = [
	{label: 'working', code: ETaskType.WORKING},
	{label: 'learning', code: ETaskType.LEARNING},
	{label: 'hobby', code: ETaskType.HOBBY},
	{label: 'others', code: ETaskType.OTHERS},
];

export const TaskImportanceOptions: Array<TaskSelectOption> = [
	{label: 'critical', code: ETaskImportantLevel.CRITICAL},
	{label: 'medium', code: ETaskImportantLevel.MEDIUM},
	{label: 'minor', code: ETaskImportantLevel.MINOR},
];

export const TaskUrgencyOptions: Array<TaskSelectOption> = [
	{label: 'high', code: ETaskUrgentLevel.HIGH},
	{label: 'medium', code: ETaskUrgentLevel.MEDIUM},
	{label: 'low', code: ETaskUrgentLevel.LOW},
];

export const TaskTimeCostOptions: Array<TaskSelectOption> = [
	{label: ETaskLife.HALF_HOUR, code: ETaskLife.HALF_HOUR},
	{label: ETaskLife.ONE_HOUR, code: ETaskLife.ONE_HOUR},
	{label: ETaskLife.TWO_HOURS, code: ETaskLife.TWO_HOURS},
	{label: ETaskLife.THREE_HOURS, code: ETaskLife.THREE_HOURS},
	{label: ETaskLife.FOUR_HOURS, code: ETaskLife.FOUR_HOURS},
	{label: ETaskLife.HALF_DAY, code: ETaskLife.HALF_DAY},
	{label: ETaskLife.ONE_DAY, code: ETaskLife.ONE_DAY},
	{label: ETaskLife.ONE_HALF_DAYS, code: ETaskLife.ONE_HALF_DAYS},
	{label: ETaskLife.TWO_DAYS, code: ETaskLife.TWO_DAYS},
	{label: ETaskLife.THREE_DAYS, code: ETaskLife.THREE_DAYS},
];

export const TaskPlaceOptions: Array<TaskSelectOption> = [
	{label: ETaskPlace.OFFICE, code: ETaskPlace.OFFICE},
	{label: ETaskPlace.WAY_ON_HOME_COMPANY, code: ETaskPlace.WAY_ON_HOME_COMPANY},
	{label: ETaskPlace.HOME, code: ETaskPlace.HOME},
];

export const TaskStatusOptions: Array<TaskSelectOption> = [
	{label: ETaskStatus.OPEN, code: ETaskStatus.OPEN},
	{label: ETaskStatus.INPROGRESS, code: ETaskStatus.INPROGRESS},
	{label: ETaskStatus.PARTLY_DONE, code: ETaskStatus.PARTLY_DONE},
	{label: ETaskStatus.DONE, code: ETaskStatus.DONE},
	{label: ETaskStatus.WONT_DO, code: ETaskStatus.WONT_DO},
];