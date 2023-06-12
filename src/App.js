import React, { Component } from 'react';
import EditMode from './components/editMode/EditMode';
import PreviewMode from './components/previewMode/PreviewMode';

class App extends Component {
    constructor() {
        super();

        this.state = {
            mode: 'edit',
            inputs: {
                personalInfo: {
                    firstName: '',
                    lastName: '',
                    location: '',
                    phoneNumber: '',
                    emailAddress: '',
                    bio: '',
                },
                experience: {
                    company: '',
                    title: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                },
            },
        };

        this.handleModeChange = this.handleModeChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleModeChange() {
        this.setState((prevState) => ({
            mode: prevState.mode === 'edit' ? 'preview' : 'edit',
        }));
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        const component = e.target.getAttribute('data-component');

        this.setState((prevState) => ({
            inputs: {
                ...prevState.inputs,
                [component]: { ...prevState.inputs[component], [name]: value },
            },
        }));
    }

    render() {
        const { mode, inputs } = this.state;

        return (
            <div>
                <button onClick={this.handleModeChange}>
                    {mode === 'edit' ? 'Preview' : 'Edit'}
                </button>
                {mode === 'edit' ? (
                    <EditMode
                        inputs={inputs}
                        handleInputChange={this.handleInputChange}
                    />
                ) : (
                    <PreviewMode inputs={inputs} />
                )}
            </div>
        );
    }
}

export default App;
