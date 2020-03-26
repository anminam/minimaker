import React, { SFC, useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import { setNowRouter,setCodeStr  } from "modules/move";
import { RouteComponentProps } from "react-router-dom";

export interface IViewStateProps {
    id: string
}

const View: SFC<IViewStateProps> = ({ id }) => {
    const fontSize = useSelector((state: RootState) => state.move.fontSize);
    const dispatch = useDispatch();

    const setNowElement = (name:string) => {
        dispatch(setNowRouter(name));
    }

    const onSetCodeStr = (str:string) => {
        dispatch(setCodeStr(str))
    }

    useEffect(()=> {
        setNowElement(id);
    });


    const codeStr: string = `
        <input style="${'a'}" />
    `;

    onSetCodeStr(codeStr);

    const style = {
        fontSize: fontSize
    }

    return (
        <input style={style} />
    )
}

export default View;