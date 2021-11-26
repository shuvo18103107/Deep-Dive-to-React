import React from 'react';
import Content from './Content';

class Section extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        console.log('Section Render');
        return (
            <div>
                <h1>This is a section</h1>
                <Content />
            </div>
        );
    }
}

export default Section;

// eslint-disable-next-line react/function-component-definition
/*
export default function Section() {
    return (
        <div>
            <h1>This is a section</h1>
            <Content />
        </div>
    );
}
*/
