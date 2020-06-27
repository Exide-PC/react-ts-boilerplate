import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
}

const HomePage = ({}: Props) => {

    return (
        <div style={{textAlign: 'center', marginTop: '250px'}}>
            <h1>Hi Mark</h1>
        </div>
    )
}

export default withRouter<Props, typeof HomePage>(HomePage);