import React, { Component } from 'react';
import EditMode from './components/editMode/EditMode';
import PreviewMode from './components/previewMode/PreviewMode';
import uniquid from 'uniquid';

class App extends Component {
    constructor() {
        super();

        this.initialState = {
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

        this.sampleData = {
            mode: 'edit',
            inputs: {
                personalInfo: [
                    {
                        key: uniquid(),
                        firstName: 'John',
                        lastName: 'Doe',
                        location: 'Toronto, ON',
                        phoneNumber: '(555) 555 5555',
                        emailAddress: 'johndoe@gmail.com',
                        bio: 'Software developer available for hire in Toronto, Ontario',
                    },
                ],
                experience: [
                    {
                        key: uniquid(),
                        company: 'Apple Inc.',
                        title: 'Software Developer',
                        startDate: 'January, 2019',
                        endDate: 'January, 2023',
                        description:
                            'Design and build applications for the iOS platform',
                    },
                ],
                education: [
                    {
                        key: uniquid(),
                        school: 'Harvard University',
                        fieldOfStudy: 'Computer Science',
                        qualification: 'Bachelors of Science',
                        enrollmentDate: 'September, 2015',
                        graduationDate: 'April, 2018',
                    },
                ],
                projects: [
                    {
                        key: uniquid(),
                        title: 'CV Builder',
                        description: 'Auto-generates a formatted resume',
                        liveLink: 'www.cv-builder.com',
                        repoLink: 'www.github.com/cv-builder',
                    },
                ],
                skills: [
                    {
                        key: uniquid(),
                        description: 'React',
                    },
                ],
            },
        };

        this.state = this.initialState;

        this.handleModeChange = this.handleModeChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddSection = this.handleAddSection.bind(this);
        this.handleDeleteSection = this.handleDeleteSection.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleCreateSample = this.handleCreateSample.bind(this);
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

    handleReset() {
        const formFields = document.querySelectorAll('input, textarea');

        formFields.forEach((field) => {
            field.value = '';
        });

        this.setState(this.initialState);
    }

    handleCreateSample() {
        this.setState(this.sampleData);
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
                        handleReset={this.handleReset}
                        handleCreateSample={this.handleCreateSample}
                    />
                ) : (
                    <PreviewMode inputs={inputs} />
                )}
            </div>
        );
    }
}

export default App;
