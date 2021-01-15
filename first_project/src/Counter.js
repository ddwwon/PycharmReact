import React, { Component } from "react";

class Counter extends Component { // Counter:생성자 메소드
    constructor(props) {
        super(); // 꼭 적어줘야 함
        this.state = { // state를 만들 때 사용
            number: 0,
            fixNum:0
        };
    } // constructor 닫힌거
    state = {
        number:0,
        fixNum:0,
    };

    render() {
        const {number, fixNum} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>{fixNum}</h2>
                <button
                    onClick={() => {
                    this.setState({number: number + 1});
                }}
               > {/*버튼이 닫힌거*/}
                    +1
                </button>
            </div>
        ); // 리턴 닫힌거
    } // render 닫힌거
} // 클래스 닫힌거




export default Counter;