import {StoreStructure} from "../entities/StoreStructure";
import {ActionTypeBase} from "../actions/actionTypes";
import {LOAD_NEWS, ADD_NEWS} from "./../actions/newsActions";

const initState : StoreStructure = {
   articles: [],
    read: [],
    favorite: [],
    withComplains: []
};

export const newsReducer : Reducer<any> = (state: StoreStructure, action: ActionTypeBase) => {
    switch (action.type) {
        case LOAD_NEWS:
            console.log('LOAD news (action in reducer');
            break;
        case ADD_NEWS:
            console.log('ADD news (action in reducer');
            break;
        default:
            return state;
    }
}
