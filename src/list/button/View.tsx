import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";

const View = () => {
    const fontSize = useSelector((state: RootState) => state.move.fontSize);




    return (
        <button style={{fontSize:{fontSize}}}>Button</button>
    )
}

export default View;