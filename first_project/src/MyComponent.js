import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, children, MyNumber}) => {
    return (
        <div>
            할루, 내 이름을 {name} 임둥. <br/>
            children의 값은 {children} 입니다 <br/>
            내가 좋아하는 숫자 {MyNumber} 이다.
        </div>
    );
};


MyComponent.defaultProps = {
    name: "홍길동"
};

MyComponent.propTypes = {
    name : PropTypes.string,
    MyNumber: PropTypes.number.isRequired
}

export default MyComponent;