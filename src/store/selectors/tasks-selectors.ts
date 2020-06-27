import { createSelector } from 'reselect';
import { ApplicationState } from '../types/common';
import { TaskEnum } from 'store/logic/tasks-logic';

export const getTasks = (state: ApplicationState) => state.tasks.list;

export const createTaskSelector = (type: TaskEnum, objectId?: string) => {
    return createSelector(
        [getTasks],
        (tasks) => tasks.find(t => t.type === type && (!objectId || t.objectId === objectId))
    )
}