import React, {Component} from 'react';

import axios from "axios";

class NewTestForm extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            message: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    async handleSubmit(e) {
        e.preventDefault();

        const {name, email, message} = this.state;

        const form = await axios.post('/send', {
            name,
            email,
            message
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text"
                       name="name"
                       onChange={this.handleChange}/>
                <label htmlFor="email">Email: </label>
                <input type="text"
                       name="email"
                       onChange={this.handleChange}/>
                <label htmlFor="message">message: </label>
                <input type="textarea"
                       name="message"
                       onChange={this.handleChange}/>

                <button>Submit</button>
            </form>
        );
    }
}

export default NewTestForm;
