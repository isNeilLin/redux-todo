import React from 'react';

export class Todo extends React.Component{
    render(){
        return (
            <li onClick={this.props.onClick}
                style = {{
                    textDecoration: this.props.complete ? 'line-through' : 'none',
                    cursor: this.props.complete ? 'default' : 'pointer'
                }}
            >
                {this.props.text}
            </li>
        )
    }
}