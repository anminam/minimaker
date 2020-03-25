import React, { ChangeEvent } from "react";

type FontSizeProps = {
    size: number;
    moveFontSize: (arg:number) => void;
}
const onChangeInput = (e:ChangeEvent<HTMLInputElement>, callback:(arg0:number) => void) => {
    let value = e.target.value || '0'; 
    const numValue:number = parseInt(value,10);
    callback(numValue)
} 
const FontSize = ({
    size,
    moveFontSize
}:FontSizeProps) => {
    return (
        <div>
            <span>font-size</span>
            <label>texst-size:
                <input type="text" id="inputsize" value={size} onChange={(e)=>onChangeInput(e, moveFontSize)}/>px
            </label>
            
        </div>
    )
}

export default FontSize;