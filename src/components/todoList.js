import React from 'react';
import {Todo} from './todo';

export class TodoList extends React.Component{
    render(){
       return (
            <ul>
                {this.props.todos.map((todo,index)=>{
                    return (
                         <Todo {...todo}
                            key={index} 
                            onClick={()=>{this.props.onComplete(index)}}
                        />
                    )
                    }
                )}
            </ul>
       )
    }
}