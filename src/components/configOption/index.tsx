import React from "react";
import FontSize from './FontSize';
import { RootState } from "modules";
import { moveFontSize } from "modules/move";
import { useSelector, useDispatch } from "react-redux";



const ConfigOption = () => {
    const fontSize = useSelector((state: RootState) => state.move.fontSize);
    const dispatch = useDispatch();

    const onMoveFontSize = (num:number) => {
        dispatch(moveFontSize(num));
    }
    
    return (
        <div className="configOption container">
            <FontSize
                size={fontSize}
                moveFontSize={onMoveFontSize}
            />
        </div>
    )
}


export default ConfigOption;