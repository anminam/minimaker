import React from "react";
import List from "./List";
import Middle from "./Middle";
import Code from "./Code";
import 'style/index.scss'
const Maker = () => {
    return (
        <div className="maker">
            <List />
            <Middle />
            <Code />
        </div>
    )
}


export default Maker;