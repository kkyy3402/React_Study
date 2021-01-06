import React, { useRef, useState } from 'react';

function UseRefExample(){

    const [text, setText] = useState('');
    const nameInput = useRef();

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onClear = () => {
        setText("");
        nameInput.current.focus();
    }

    return (
        <div>

            <input 
                ref={nameInput} 
                onChange={onChange} 
                value={text}
            />

            <button onClick={onClear}>초기화</button>

            <div>
                <b>값 : {text}</b>
            </div>

        </div>
    );
}

export default UseRefExample;