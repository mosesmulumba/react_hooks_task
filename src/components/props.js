import React from 'react';

const News =(props)=>{
    return (
        <div>
            <h1>Daily News {props.name} </h1>
            <p>This to update you , {props.citizens} </p>
        </div>
    );
}

export default News