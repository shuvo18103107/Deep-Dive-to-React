import React from 'react';

export default class Form extends React.Component {
    state = { title: 'javascript', textArea: 'JS is awsome', libary: 'Angular', isMarked: true };

    handleChange = (e) => {
        // cg amra same value change korci 2 ta state er e tai state er obj ke dynamically set korte pari
        // this.setState({ [e.target.name]: e.target.value });

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
normally form e state manage kore html dom , kintu react er jehutu nijer state ace tai dom related state use korte mana kore react, tai dom related form state bad deowa jai jodi input e value props use kori tahole form er state react er control e chole jai
react e 2 way input control hoi controlled way mane react er kace control thake input er jeta value prop diye on kori r ekta uncontrolled jeta dom diye kaj kore jekhane value prop dei na
form er submit related ba others sob input react er state diye control korte parbo buti inputfile ta just normal dom diye kaj korate hobe cg eta amar local filesystem er kaj, stateless eta 
*/
