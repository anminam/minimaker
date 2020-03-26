import { El } from "core/El";
import { getList } from "list";

const MOVE_FONT_SIZE = 'move/MOVE_FONT_SIZE' as const;
const MOVE_FONT_COLOR = 'move/MOVE_FONT_COLOR' as const;
const SET_NOW_ROUTER = 'move/SET_NOW_ROUTER' as const;
const SET_CODE_STRING = 'move/SET_CODE_STRING' as const;

export const moveFontSize = (size:number) => ({
    type: MOVE_FONT_SIZE,
    payload: size
});
export const moveFontColor = (color:string) => ({
    type: MOVE_FONT_COLOR,
    payload: color
});

export const setNowRouter = (page: string) => ({
    type: SET_NOW_ROUTER,
    payload: page
});

export const setCodeStr = (str:string) => ({
    type: SET_CODE_STRING,
    payload: str
})

type MoveAction = 
    | ReturnType<typeof moveFontSize>
    | ReturnType<typeof moveFontColor>
    | ReturnType<typeof setNowRouter>
    | ReturnType<typeof setCodeStr>
;

type MoveState = {
    fontSize: number;
    fontColor: string;
    nowElement: El | null;
    elList: El[] | null;
    codeStr: string
}

const initalState: MoveState = {
    fontSize: 10,
    fontColor: "#FFFFF",
    nowElement: null,
    elList: getList(),
    codeStr: ''
}



const move = (state: MoveState = initalState, action: MoveAction): MoveState=> {
    switch(action.type) {
        case MOVE_FONT_SIZE: 
            return {
                ...state,
                fontSize: action.payload
            }
        case MOVE_FONT_COLOR:
            return {
                ...state,
                fontColor: action.payload
            }
        case SET_NOW_ROUTER: 
            return {
                ...state,

            }
        case SET_CODE_STRING:
            return {
                ...state,
                codeStr: action.payload
            }
        default:
            return state;
    }
}

export default move;