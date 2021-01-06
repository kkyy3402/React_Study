import React from 'react';

function Wrapper({ children, isSpecial }){

    const style = {
        width : 100,
        border : '2px solid black',
        padding : 16
    }

    return <div style={style}>
            {isSpecial ? "**" : null}
            {children}
        </div>

}

export default Wrapper;