import React from 'react';

const Body = (props) => {
    return (
        <ul>
            {React.Children.map(props.children, (child, index) => (
                <li key={index}>{child}</li>
            ))}
        </ul>
    );
};

export default Body;
