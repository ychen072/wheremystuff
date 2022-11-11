

const InitialState = {
    item:[],
    category:[],
    contact:[],
    contactGroup:[],
    entities:{
        item:{},
        category: {},
        contact: {},
        contactGroup: {},

    }
}

export function dataReducer(state = InitialState, action){
    switch (action.type){
        case "stub":
            break;
        default:
            return state;
    }

}