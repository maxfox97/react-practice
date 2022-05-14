//IT'S HOC 
import React, { Suspense } from "react";

export const withSuspense = (Component) => {
debugger
    return (props) => {
        <Suspense fallback={<div>DOWNLOAD...</div>}>
        <Component {...props}/>
        </Suspense>
    };
}