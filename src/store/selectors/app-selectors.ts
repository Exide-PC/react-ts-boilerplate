import { createTaskSelector } from "./tasks-selectors";
import { TaskEnum } from "store/logic/tasks-logic";
import { TaskStatus } from "store/types/tasks-types";
import { createSelector } from "reselect";

const getAppLoadingTask = createTaskSelector(TaskEnum.loadApp);

export const getIsAppLoading = createSelector(
    [getAppLoadingTask],
    (task) => task?.status !== TaskStatus.Success
)
