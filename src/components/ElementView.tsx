import React from "react";
import { Route } from "react-router-dom";
import ElementViewMain from 'components/ElementViewMain';
import DynamicElementView from 'components/DynamicElementView';
import { getList } from "list";

const list = getList();


const List = () => {
    return (
        <div className="element container">
            <Route exact path="/" component={ElementViewMain} />
            <Route path="/:id" component={DynamicElementView} />
        </div>
    )
}


export default List;