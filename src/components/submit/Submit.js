import React from 'react';

function MySubmit(props) {
    return (
        <div>
            <input type={props.type} value={props.value}/>
        </div>
    );
}

export default MySubmit;