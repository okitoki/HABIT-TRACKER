import React, { useRef, useState } from 'react';

const SimpleHabit = (props) => {
    const spanRef = useRef();
    const [count, setCount]=  useState(0);
    
    const handleIncrement = () => {
        setCount(count + 1);
        console.log(document.getElementsByTagName("span")[0].innerHTML);// useRef 의 올바른 사용법은?? form요소들의 값을 컨트롤하고 싶을 때

      };
      
    const handleDecrement = () => {
        const _count = count - 1;
        setCount(count === 0 ? 0 : _count);
    };
      
        return (
            <div className='habit'>
                <span ref={spanRef} className="habit-name">Reading Book</span>
                <span className="habit-count">{count}</span>
                <button className="habitbutton" onClick={handleIncrement}>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button className="habitbutton"  onClick={handleDecrement}>      
                    <i className="fa-solid fa-square-minus"></i>
                </button>
      
            </div>
        );}

export default SimpleHabit;
