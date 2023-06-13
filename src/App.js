import React, { Component } from 'react';
import EditMode from './components/editMode/EditMode';
import PreviewMode from './components/previewMode/PreviewMode';
import uniquid from 'uniquid';

class App extends Component {
    constructor() {
        super();

        this.state = {
            mode: 'edit',
            inputs: {
                personalInfo: [
                    {
                        key: uniquid(),
                        firstName: '',
                        lastName: '',
                        location: '',
                        phoneNumber: '',
                        emailAddress: '',
                        bio: '',
                    },
                ],
                experience: [
                    {
                        key: '',
                        company: '',
                        title: '',
                        startDate: '',
                        endDate: '',
                        description: '',
                    },
                ],
                education: [
                    {
                        key: '',
                        school: '',
                        fieldOfStudy: '',
                        qualification: '',
                        enrollmentDate: '',
                        graduationDate: '',
                    },
                ],
                projects: [
                    {
                        key: '',
                        title: '',
                        description: '',
                        liveLink: '',
                        repoLink: '',
                    },
                ],
                skills: [
                    {
                        key: '',
                        description: '',
                    },
                ],
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
        const key = e.target.form.getAttribute('data-key');

        this.setState((prevState) => {
            console.log(prevState);
            const prevComponentArr = prevState.inputs[component];
            const updatedComponentArr = prevComponentArr.map((item) => {
                if (item.key === key) {
                    return { ...item, [name]: value };
                }
                return item;
            });

            return {
                inputs: {
                    ...prevState.inputs,
                    [component]: updatedComponentArr,
                },
            };
        });
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
