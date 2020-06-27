import { UpdateTask, TaskStatus, TaskObject} from '../types/tasks-types'
import { Dispatch } from 'redux';
import { getTasks, createTaskSelector } from '../selectors/tasks-selectors'
import { GetState } from 'store/types/common';

export enum  TaskEnum {
    loadApp = "loadApp",
};

export async function run(type: TaskEnum, objectId: any, dispatch: Dispatch, getState: GetState, fun: () => Promise<boolean>, discription?: string): Promise<boolean> {
    const state = getState();
    const taskSelector = createTaskSelector(type, objectId);
    const isRunning = taskSelector(state)?.status === TaskStatus.Running;

    if (isRunning) {
        return true;
    }
    let task: TaskObject = {
        id: getId(),
        type: type,
        objectId: objectId,
        status: TaskStatus.Running,
        canceled: false,
        description: discription,
        timeStart: new Date(),
    }

    dispatch(UpdateTask(task));
    let result = false;

    try {
        result = await fun();
    }finally {
        if (result) {
            task = {...task, status: TaskStatus.Success};
        } else {
            task = {...task, status: TaskStatus.Failed};
        }
        task.timeStop = new Date();
        dispatch(UpdateTask(task));
    }
    return result;
}

export function cancel(type: TaskEnum, objectId: any, dispatch: Dispatch, getState: GetState ){
    const state = getState();
    const tasks = getTasks(state).filter(o => o.type === type && o.objectId === objectId && !o.canceled);

    tasks.forEach(task => {
        task.canceled = true;
        dispatch(UpdateTask(task));
    });
}

//--------------------------- Private -------------------------

let id = 0;
function getId():number{
    return id++;
}