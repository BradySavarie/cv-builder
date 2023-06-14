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
                        key: uniquid(),
                        company: '',
                        title: '',
                        startDate: '',
                        endDate: '',
                        description: '',
                    },
                ],
                education: [
                    {
                        key: uniquid(),
                        school: '',
                        fieldOfStudy: '',
                        qualification: '',
                        enrollmentDate: '',
                        graduationDate: '',
                    },
                ],
                projects: [
                    {
                        key: uniquid(),
                        title: '',
                        description: '',
                        liveLink: '',
                        repoLink: '',
                    },
                ],
                skills: [
                    {
                        key: uniquid(),
                        description: '',
                    },
                ],
            },
        };

        this.handleModeChange = this.handleModeChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddSection = this.handleAddSection.bind(this);
        this.handleDeleteSection = this.handleDeleteSection.bind(this);
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

    handleAddSection(e) {
        const component = e.target.getAttribute('data-component');
        const templateObject = this.state.inputs[component][0];
        const newObject = { key: uniquid() };
        for (let prop in templateObject) {
            if (prop !== 'key') {
                newObject[prop] = '';
            }
        }
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [component]: [...prevState.inputs[component], newObject],
                },
            };
        });
    }

    handleDeleteSection(e) {
        const component = e.target.getAttribute('data-component');
        const key = e.target.getAttribute('data-key');

        const prevComponentArr = this.state.inputs[component];
        const newComponentArr = prevComponentArr.filter(
            (comp) => comp.key !== key
        );

        this.setState((prevState) => {
            return {
                inputs: { ...prevState.inputs, [component]: newComponentArr },
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
                        handleAddSection={this.handleAddSection}
                        handleDeleteSection={this.handleDeleteSection}
                    />
                ) : (
                    <PreviewMode inputs={inputs} />
                )}
            </div>
        );
    }
}

export default App;
