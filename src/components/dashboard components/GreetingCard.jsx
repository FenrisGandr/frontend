import React from "react";

export default function GreetingCard({title, name, lastName}){
    let greeting = ''
    if(title === 'patient'){
        greeting = ('Welcome, ' + name +'!');
    }
    else if (title === 'radiologists' || title === 'physician'){
        greeting = ('Welcome, Dr.'+ lastName +'!')
    }

    const greetingStyle ={
        paddingLeft:'50px',
        backgroundColor: '#7749F8',
        color: 'white',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        fontSize:'50px'
    }

    return(
    <div style={greetingStyle}>
        {greeting}
    </div>
    )
}