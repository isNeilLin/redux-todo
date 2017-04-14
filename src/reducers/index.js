import { combineReducers } from 'redux';
import * as Action from '../actions';

function todos(state=[],action){
    switch(action.type){
        case Action.AddTodo:
            return [...state,{
                text: action.text,
                complete: false
            }]
        case Action.CompleteTodo:
            return [
                ...state.slice(0,action.index),
                Object.assign({},state[action.index],{complete:true}),
                ...state.slice(action.index+1)
            ]
        default:
            return state
    }
}
function SetVisibility(state=Action.VisibilityTodos.ShowAll,action){
    switch(action.type){
        case Action.SetVisibilityTodo:
            return action.filter
        default:
            return state
    }
}
const todoApp = combineReducers({
    todos,
    SetVisibility
})
export default todoApp