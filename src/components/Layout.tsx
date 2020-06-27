import * as React from "react";
import { BoundActions, ApplicationState } from "store/types/common";
import { appActions } from "store/logic/app";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { getIsAppLoading } from "store/selectors/app-selectors";
import { useEffect } from "react";

interface OwnProps {
    children: any;
}

interface StateProps {
    isLoading: boolean;
}

type DispatchProps = BoundActions<typeof appActions>

type Props = OwnProps & StateProps & DispatchProps

const Layout = ({children, isLoading, init}: Props) => {
    
    useEffect(() => {
        init();
    }, []);

    if (isLoading) {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Loading</h1>
            </div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

const mapStateToProps = (state: ApplicationState, props: OwnProps): StateProps => ({
    isLoading: getIsAppLoading(state)
})

const mapDispatchToProps = (dispatch: Dispatch, props: OwnProps): DispatchProps => ({
    ...bindActionCreators(appActions, dispatch)
})

export default connect<StateProps, DispatchProps, OwnProps, ApplicationState>(mapStateToProps, mapDispatchToProps)(Layout);