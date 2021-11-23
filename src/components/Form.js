import React from 'react';

export default class Form extends React.Component {
    state = { title: 'javascript', textArea: 'JS is awsome', libary: 'Angular', isMarked: true };

    handleChange = (e) => {
        // console.log(e.target.value);
        if (e.target.type === 'text') {
            this.setState({ title: e.target.value });
        } else if (e.target.type === 'textarea') {
            this.setState({ textArea: e.target.value });
        } else if (e.target.type === 'select-one') {
            this.setState({ libary: e.target.value });
        } else if (e.target.type === 'checkbox') {
            this.setState({ isMarked: e.target.checked });
        } else {
            // console.log(e.target.type);
            console.log('nothing happen');
        }
    };

    submitHandler = (e) => {
        e.preventDefault();
        const { title, textArea, libary, isMarked } = this.state;
        console.log(title, textArea, libary, isMarked);
    };

    render() {
        const { title, textArea, libary, isMarked } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        name="title"
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <textarea name="textArea" value={textArea} onChange={this.handleChange} />
                    <br />
                    <br />
                    <select value={libary} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isMarked} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
// forms handling
/*
 */
