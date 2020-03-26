import {El} from "core/El";
import { useSelector } from "react-redux";
import { RootState } from "modules";

export class Button extends El {
    
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (name:string) {
        super(name);
    }
    
    getFontSize () {
        return useSelector((state: RootState) => state.move.fontSize);
    }
}