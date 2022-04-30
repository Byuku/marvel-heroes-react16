import React from 'react';

const Button = ({btnType, text}) => {
    console.log(btnType)
    return (
        <button className={btnType}>{text}</button>
    );
};

export default Button;