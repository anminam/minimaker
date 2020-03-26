import React, { Component, Suspense, SFC } from "react";
import {RouteComponentProps} from 'react-router-dom';

interface IDynamicProps extends RouteComponentProps<{id:string}> { }

const DynamicElementView:SFC<IDynamicProps> = ({match: {params: {id}}}) => {
    const DynamicComopnent = React.lazy(() => import(`list/${id}/View`));
    return (
        <Suspense fallback={`<h1>Loading profile...</h1>`}>
            <DynamicComopnent id={id} />
        </Suspense>
    )
}

export default DynamicElementView;