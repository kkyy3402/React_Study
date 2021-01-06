import React, { useState } from 'react';

function MultipleInputSample(){

    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });

    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name] : value,
        });
    }


    const onReset = () => {
        
    }

    return (
        <div>

            <input name="name" placeholder="이름" onChange={onChange}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange}/>
            <button onClick={onReset}>초기화</button>

            <div>
                <b>값 : {inputs.name}</b>
            </div>

        </div>
    );
}

export default MultipleInputSample;