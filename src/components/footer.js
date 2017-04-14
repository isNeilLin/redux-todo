import React from 'react';

export class Footer extends React.Component{
    renderFilter(filter,name){
        if(filter===this.props.filter){
            return name;
        }
        return (
            <a href="#" onClick={(e)=>{
                e.preventDefault()
                this.props.onChangeFilter(filter)}}>
                {name}  
            </a>
        )
    }
    render(){
        return (
           <p>
                 SHOW:{' '}
                 {this.renderFilter('ShowAll','All')}
                 {' '}
                 {this.renderFilter('ShowCompleted','Completed')}
                 {' '}
                 {this.renderFilter('ShowActive','Active')}
           </p>
        )
    }
}