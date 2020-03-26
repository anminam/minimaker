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

    interface IStyle {
        fontSize: number,
        fontColor?: string;
    }

    const addStyle = ({fontSize, fontColor}:IStyle) => {

        // 시작 
        let str = '"';

        str += fontSize ? `font-size: ${fontSize}px` : '';
        str += fontColor ? `fontColor: ${fontColor}` : '';

        // 끝
        str += '"';

        return str;
    }

    const codeStr: string = `
        <button style=${addStyle({fontSize})}>Button</button>
    `;

    useEffect(()=> {
        setNowElement(id);
        onSetCodeStr(codeStr);
    },[onSetCodeStr]);

    const style = {
        fontSize: fontSize
    }

    return (
        <button style={style}>Button</button>
    )
}

export default View;