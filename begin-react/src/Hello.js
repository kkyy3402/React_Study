import React from 'react';

function Hello(){
    const name = "김강열";
    const style = {
        backgroundColor : 'aqua',
        fontSize: 24
    }


    return <div>
        <div className="itsClassName" style={style}>안녕하세요 {name}님! </div>
    </div>
}

export default Hello; //Hello 라는 컴포넌트를 만들어 내보내겠다 라는 의미이다.