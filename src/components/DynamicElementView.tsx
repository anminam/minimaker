import React, { Component, Suspense } from "react";

const DynamicElementView = (p:any) => {
    const id:string = p.match.params.id;
    const DynamicComopnent = React.lazy(() => import(`list/${id}/View`));
    return (
        <Suspense fallback={`<h1>Loading profile...</h1>`}>
            <DynamicComopnent />
        </Suspense>
    )
}

export default DynamicElementView;