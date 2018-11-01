
export enum ETaskType {
	WORKING = 'Working',
	LEARNING = 'Learning',
	HOBBY = 'Hobby',
	OTHERS = 'Others',
}

export enum ETaskLife {
	HALF_HOUR = '0.5h',
	ONE_HOUR = '1h',
	TWO_HOURs = '2h',
	THREE_HOURS = '3h',
	FOUR_HOURS = '4h',
	HALF_DAY = '4h',
	ONE_DAY = '1d',
	ONE_HALF_DAYS = '1.5d',
	TWO_DAYS = '2d',
	THREE_DAYS = '3d',
}

export enum ETaskImportantLevel {
	 CRITICAL = 'Critical',
	 MEDIUM = 'medium',
	 MINOR = 'Minor',
}

export enum ETaskUrgentLevel {
	HIGH = 'high',
	MEDIUM = 'medium',
	LOW = 'low',
}

export enum ETaskPlace {
	OFFICE = 'office',
	WAY_ON_HOME_COMPANY = 'way on home/company',
	HOME = 'home',
}

export enum ETaskStatus {
	OPEN = 'open',
	INPROGRESS = 'in_progress',
	PARTLY_DONE = 'partly_done',
	DONE = 'done',
	NOT_DO = 'not_do', 
}

export class Task {
	name: string;
	type: ETaskType;
	importance: ETaskImportantLevel;
	urgency: ETaskUrgentLevel;
	content: string;
	output: string;
	result: ETaskStatus;
	constructor({
		name,
		type,
		importance,
		urgency,
		content,
		output,
		result,
	}: Partial<Task>) {
		this.name = name;
		this.type = type;
		this.importance = importance;
		this.urgency = urgency;
		this.content = content;
		this.output = output;
		this.result = result;
	}
}

export interface TaskSelectOption {
	label: string;
	code: string;
}
