import React from 'react';

const Header = (props) => {
    return (<h2 className= "text-center">This is a react component with {props.message}</h2>);
}

export default Header;