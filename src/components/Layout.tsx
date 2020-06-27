import * as React from "react";

interface Props {
    children: any;
}

const Layout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    )
}

export default Layout;