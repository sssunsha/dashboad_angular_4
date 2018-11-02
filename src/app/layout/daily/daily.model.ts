
export enum ETaskType {
	WORKING = 'Working',
	LEARNING = 'Learning',
	HOBBY = 'Hobby',
	OTHERS = 'Others',
}

export enum ETaskLife {
	HALF_HOUR = '0.5h',
	ONE_HOUR = '1h',
	TWO_HOURS = '2h',
	THREE_HOURS = '3h',
	HALF_DAY = '4h',
	ONE_DAY = '1d',
	ONE_HALF_DAYS = '1.5d',
	TWO_DAYS = '2d',
	THREE_DAYS = '3d',
}

export enum ETaskImportantLevel {
	 CRITICAL = 'Critical',
	 MEDIUM = 'Medium',
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
	WONT_DO = 'won\'t_do', 
}

export class Task {
	name: string;
	type: ETaskType;
	importance: ETaskImportantLevel;
	urgency: ETaskUrgentLevel;
	timeCost: ETaskLife;
	place: ETaskPlace;
	content: string;
	output: string;
	status: ETaskStatus;
	constructor({
		name,
		type,
		importance,
		urgency,
		timeCost,
		place,
		content,
		output,
		status,
	}: Partial<Task>) {
		this.name = name;
		this.type = type;
		this.importance = importance;
		this.urgency = urgency;
		this.content = content;
		this.output = output;
		this.status = status;
		this.place = place;
		this.timeCost = timeCost;
	}
}

export interface TaskSelectOption {
	label: string;
	code: string;
}
