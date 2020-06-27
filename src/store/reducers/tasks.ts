import { Reducer } from 'redux';
import { TasksState, KnownAction, UPDATE_TASK, initTasksState } from '../types/tasks-types';

const init = initTasksState();

export const reducer: Reducer<TasksState, KnownAction> = (state: TasksState | undefined = init, action: KnownAction): TasksState => {
    switch (action.type) {
        case UPDATE_TASK:
            return {
                ...state,
                list: [...state.list.filter(op => op.id !== action.task.id), action.task]
            };        
        default:
            return state;
    }
};