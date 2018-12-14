import React, {Component} from 'react';
import ListFormInput from './ListFormInput';

import validatorEmail from 'email-validator';
import validatorIp from 'ip-validator';

export default class ListForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputFields: {
                email: '',
                nickname: '',
                ip: '',
            },
            isValidated: false,
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const { name , value } = e.target;
        const inputFields = { ...this.state.inputFields };
        let validationStatus = false;
        inputFields[name] = value;
        this.setState({ inputFields });
        const { email, ip } = inputFields;

        if (validatorEmail.validate(email) && validatorIp.ip(ip)) {
            validationStatus = true;
        }
        this.setState({ isValidated: validationStatus })
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const { handleUserAdd } = this.props;
        const user = { ...this.state.inputFields };
        handleUserAdd(user);
    };

    render() {
        const inputsByAttributes = [
            { type: 'email', name: 'email', placeholder: 'E-Mail' },
            { type: 'text', name: 'nickname', placeholder: 'Nickname' },
            { type: 'text', name: 'ip', placeholder: 'IP Address' },
        ];

        const inputs = inputsByAttributes.map(({ type, name, placeholder }) => {
            return <ListFormInput
                type={type}
                name={name}
                placeholder={placeholder}
                key={name}
                value={this.state.inputFields[name]}
                handleInputChange={this.handleInputChange}
            />
        });

        return (
            <form className={'users-list-form'} onSubmit={this.handleFormSubmit}>
                {inputs}
                <div className={'users-list-button-container'}>
                    <button type={'submit'} disabled={!this.state.isValidated}>Submit</button>
                </div>
            </form>
        )

    }

}
