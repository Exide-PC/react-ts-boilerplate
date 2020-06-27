import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
}

const HomePage = ({history}: Props) => {
    return (
        <div style={{textAlign: 'center', marginTop: '300px'}}>
            <div style={{display: 'inline-block', width: '350px'}}>
                <h1>Hi Mark</h1>
                <input width='100%'/>
            </div>
        </div>
    )
}

export default withRouter<Props, typeof HomePage>(HomePage);