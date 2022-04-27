import React, { memo } from 'react';

const HabitAddForm = memo(props => {

        const formRef = React.createRef();
        const inputRef = React.createRef();//돔요소내용을 가져오고 싶을 때 
        
        const onSubmit = event =>{
            event.preventDefault();//브라우저 기본기능을 취소
            const name = inputRef.current.value;
            name && props.onAdd(name);
            // this.inputRef.current.value = '';
            this.formRef.current.reset();
        };
    
    return (
                <form ref={formRef} className="add-form" onSubmit={onSubmit}>
                    <input ref={inputRef} type="text" className="name" placeholder="Habit" />
                    <button className="add-button">Add</button>
                </form>
             
                );
    
    });

export default HabitAddForm;