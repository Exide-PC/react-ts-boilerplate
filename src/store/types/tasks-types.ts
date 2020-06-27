
export enum TaskStatus {
    Running,
    Success,
    Failed,
}

export interface TaskObject {
    id: number;
    type: string;
    objectId: any;
    status: TaskStatus;
    canceled: boolean;
    description?: string;
    timeStart: Date;
    timeStop?: Date;
}


export interface TasksState {
    list: TaskObject[];
}

export function initTasksState(): TasksState {
    return {
        list: []
    };
}


export const UPDATE_TASK = "UPDATE_TASK";
interface UpdateTaskAction {
    type: typeof UPDATE_TASK;
    task: TaskObject;
}
export function UpdateTask(task: TaskObject): UpdateTaskAction {
    return {
        type: UPDATE_TASK,
        task: task,
    };
}

export type KnownAction = UpdateTaskAction;