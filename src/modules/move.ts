const MOVE_FONT_SIZE = 'move/MOVE_FONT_SIZE' as const;
const MOVE_FONT_COLOR = 'move/MOVE_FONT_COLOR' as const;

export const moveFontSize = (size:number) => ({
    type: MOVE_FONT_SIZE,
    payload: size
});
export const moveFontColor = (color:string) => ({
    type: MOVE_FONT_COLOR,
    payload: color
})

type MoveAction = 
    | ReturnType<typeof moveFontSize>
    | ReturnType<typeof moveFontColor>
;

type MoveState = {
    fontSize: number;
    fontColor: string;
}

const initalState: MoveState = {
    fontSize: 10,
    fontColor: "#FFFFF"
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
        default:
            return state;
    }
}

export default move;