import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Action from '../actions';
import {AddTodo} from '../components/AddTodo';
import {Footer} from '../components/footer';
import {TodoList} from '../components/todoList';

class App extends React.Component {
    render(){
        const { dispatch, VisibilityTodos, VisibilityFilter } = this.props;
        return (
            <div>
                <AddTodo onAddTodo={text=>dispatch(Action.Add(text))}/>
                <TodoList todos={VisibilityTodos} 
                    onComplete={index=>dispatch(Action.Complete(index))}/>
                <Footer filter={VisibilityFilter}
                    onChangeFilter={filter=>{
                        dispatch(Action.SetVisibility(filter))
                        }}/>
            </div>
        )
    }
}
function selectTodos(todos,filter){
    switch(filter){
        case Action.VisibilityTodos.ShowAll:
            return todos
        case Action.VisibilityTodos.ShowCompleted:
            return todos.filter(todo=>todo.complete)
        case Action.VisibilityTodos.ShowActive:
            return todos.filter(todo=>!todo.complete)
    }
}
function select(state){
    return {
        VisibilityTodos: selectTodos(state.todos,state.SetVisibility),
        VisibilityFilter: state.SetVisibility
    }
}
export default connect(select)(App)