import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    handleIncrement = () => {
       this.props.onIncrement(this.props.habit);
     };
     handleDecrement = () =>{
        this.props.onDecrement(this.props.habit);
     };
     handleDelete = ()=>{
        this.props.onDelete(this.props.habit);
     };
    render() {
        
        const { name, count } = this.props.habit;

        return (
            <>
            <li>
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habitbutton" onClick={this.handleIncrement}>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button className="habitbutton"  onClick={this.handleDecrement}>      
                    <i className="fa-solid fa-square-minus"></i>
                </button>
                <button className="habitbutton" onClick={this.handleDelete}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </li>
            </>
        );
    }
}

export default Habit;