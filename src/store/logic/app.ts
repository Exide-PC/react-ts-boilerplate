import { AppThunkAction } from "store/types/common";
import { run, TaskEnum } from "./tasks-logic";

export const appActions = {
    init: (): AppThunkAction => async (dispatch, getState) => {
        await run(TaskEnum.loadApp, null, dispatch, getState, async () => {

            // fetching data...
            await new Promise(r => setTimeout(r, 2000));

            return true;
        });
    },
}