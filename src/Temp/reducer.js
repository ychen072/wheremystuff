

const InitialState = {
    data: {}
}


export function reducer(state = InitialState, action){
    switch(action.type){
        case "stub":
            break;
        default:
            return state;
    }
}