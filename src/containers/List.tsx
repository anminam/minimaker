import React from "react";
import { Button } from "list/button";
import { El } from "core/El";
import { getList } from "list";
import ListItem from "components/ListItem";

const listOfEl:El[] = getList();
const List = () => {

    const a = new Button('button');
    const name = a.getName();
    return (
        <div className="list container">
            {listOfEl.map((item, i) => (
                <ListItem key={i} name={item.getName()} /> 
            ))}
        </div>
    )
}


export default List;