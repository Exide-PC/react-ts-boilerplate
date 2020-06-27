import { Action, AnyAction, ActionCreatorsMapObject } from 'redux';
import { ThunkAction } from 'redux-thunk';
import * as Tasks from './tasks-types';

export interface ApplicationState {
    tasks: Tasks.TasksState;
};

export interface GetState {
    (): ApplicationState;
}


//--------------------------- For Thunk -------------------------------------------

declare module "redux" {
    function bindActionCreators<M extends ActionCreatorsMapObject<any>>(
        actionCreators: M,
        dispatch: Dispatch
    ): {
        [N in keyof M]: ReturnType<M[N]> extends ThunkAction<any, any, any, any>
            ? (...args: Parameters<M[N]>) => ReturnType<ReturnType<M[N]>>
            : M[N]
    };

    export interface Dispatch<A extends Action = AnyAction> {
        <T extends A>(action: T): T;
        <R>(asyncAction: ThunkAction<R, ApplicationState, void, A>): R;
    }
}

export type BoundAction<T extends (...args: any[]) => ThunkAction<any, any, any, any>> =
(...args: Parameters<T>) => ReturnType<ReturnType<T>>;

export type BoundActions<A extends ActionCreatorsMapObject<any>> = {[P in keyof A]: BoundAction<A[P]> };

export type AppThunkAction<A extends Action = AnyAction, R = (Promise<void> | void)> = ThunkAction<R, ApplicationState, void, A>;


