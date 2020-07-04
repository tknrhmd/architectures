import React from 'react';

class MyButton extends React.Component {
    handleClick = () => {
        console.log('this is:', this);
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                Click Me
            </button>
        );
    }
}

export default MyButton;