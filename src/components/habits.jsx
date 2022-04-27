
import { Button } from '@mui/material';
import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {

    //state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 해야 한다.
    handleIncrement = habit => {
        this.props.onIncrement(habit);
    };
    handleDecrement = habit =>{
        this.props.onDecrement(habit);
    };
    handleDelete = habit=>{
        this.props.onDelete(habit);
    };
    handleAdd = name =>{
        this.props.onAdd(name);
    }
    render() {
        return (
        <>
        <HabitAddForm onAdd={this.handleAdd}/>
        <ul>{this.props.habits.map( habit => <Habit key={habit.id} 
            habit={habit} 
            onIncrement = {this.handleIncrement} 
            onDecrement = {this.handleDecrement}
            onDelete = {this.handleDelete}
            onAdd = {this.handleAdd}/>)}</ul>

         <Button onClick={this.props.onReset}>RESET</Button><div></div>
     </>
        )
    }
}

export default Habits;