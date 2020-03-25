import { El } from "core/El";
import { Button } from "./button";
import { Input } from "./input";

export const getList = ():El[] => {
    return [
        new Button('button'),
        new Input('input'),
    ]
}