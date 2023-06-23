import React, { useState } from 'react';
import EditMode from './components/editMode/EditMode';
import PreviewMode from './components/previewMode/PreviewMode';
import uniquid from 'uniquid';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import GlobalStyles from './components/styles/Global';
import { StyledButtonContainer } from './components/styles/StyledButtonContainer';
import { StyledMainButton } from './components/styles/StyledMainButton';
import { StyledSecondaryButton } from './components/styles/StyledSecondaryButton';
import { PreviewContainer } from './components/styles/PreviewContainer';
import { EditContainer } from './components/styles/EditContainer';
import { StyledHeader } from './components/styles/StyledHeader';
import { DownloadPDFButton } from './components/styles/DownloadPDFButton';

const App = () => {
    const initialState = {
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
                },
            ],
            experience: [],
            education: [],
            projects: [],
            skills: [],
        },
    };

    const sampleData = {
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
                },
            ],
            experience: [
                {
                    key: uniquid(),
                    company: 'Apple Inc.',
                    title: 'Senior Software Developer',
                    startDate: 'February, 2023',
                    endDate: 'Present',
                    description:
                        'Design and build applications for the iOS platform',
                },
                {
                    key: uniquid(),
                    company: 'Facebook',
                    title: 'Junior Software Developer',
                    startDate: 'January, 2019',
                    endDate: 'January, 2023',
                    description:
                        'Contributed to a feature on Messenger that reached 50 million users in 30 days',
                },
            ],
            education: [
                {
                    key: uniquid(),
                    school: 'Harvard University',
                    fieldOfStudy: 'Computer Science',
                    qualification: 'BSc',
                    enrollmentDate: 'September, 2015',
                    graduationDate: 'April, 2018',
                },
                {
                    key: uniquid(),
                    school: 'Yale University',
                    fieldOfStudy: 'Economics',
                    qualification: 'BBA',
                    enrollmentDate: 'September, 2011',
                    graduationDate: 'April, 2014',
                },
            ],
            projects: [
                {
                    key: uniquid(),
                    title: 'CV Builder',
                    description:
                        'Automatically generates a resume in a structured format that is compatible with ATS software and can be easily parsed and extracted for data analysis purposes. The resume you are reading now was created using cv builder!',
                    liveLink: 'www.cv-builder.com',
                    repoLink: 'www.github.com/cv-builder',
                },
            ],
            skills: [
                {
                    key: uniquid(),
                    description: 'React',
                },
                {
                    key: uniquid(),
                    description: 'Typescript',
                },
                {
                    key: uniquid(),
                    description: 'Tailwind',
                },
                {
                    key: uniquid(),
                    description: 'Sass',
                },
            ],
        },
    };

    const printRef = React.useRef();
    const [state, setState] = useState(initialState);

    const handleModeChange = () => {
        setState((prevState) => ({
            ...prevState,
            mode: prevState.mode === 'edit' ? 'preview' : 'edit',
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const component = e.target.getAttribute('data-component');
        const key = e.target.form.getAttribute('data-key');

        setState((prevState) => {
            const prevComponentArr = prevState.inputs[component];
            const updatedComponentArr = prevComponentArr.map((item) => {
                if (item.key === key) {
                    return { ...item, [name]: value };
                }
                return item;
            });

            return {
                ...prevState,
                inputs: {
                    ...prevState.inputs,
                    [component]: updatedComponentArr,
                },
            };
        });
    };

    const handleAddSection = (e) => {
        const component = e.target.getAttribute('data-component');
        const templateObject = state.inputs[component][0];
        const newObject = { key: uniquid() };
        for (let prop in templateObject) {
            if (prop !== 'key') {
                newObject[prop] = '';
            }
        }
        setState((prevState) => {
            return {
                ...prevState,
                inputs: {
                    ...prevState.inputs,
                    [component]: [...prevState.inputs[component], newObject],
                },
            };
        });
    };

    const handleDeleteSection = (e) => {
        const component = e.target.getAttribute('data-component');
        const key = e.target.getAttribute('data-key');

        const prevComponentArr = state.inputs[component];
        const newComponentArr = prevComponentArr.filter(
            (comp) => comp.key !== key
        );

        setState((prevState) => {
            return {
                ...prevState,
                inputs: { ...prevState.inputs, [component]: newComponentArr },
            };
        });
    };

    const handleReset = () => {
        const formFields = document.querySelectorAll('input, textarea');

        formFields.forEach((field) => {
            field.value = '';
        });

        setState(initialState);
    };

    const handleCreateSample = () => {
        setState(sampleData);
    };

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('resume.pdf');
    };

    return (
        <>
            <GlobalStyles />
            <StyledHeader>CV Builder</StyledHeader>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <StyledButtonContainer>
                    <StyledSecondaryButton onClick={handleCreateSample}>
                        Create Sample
                    </StyledSecondaryButton>
                    <StyledMainButton onClick={handleModeChange}>
                        {state.mode === 'edit' ? 'Preview Mode' : 'Edit Mode'}
                    </StyledMainButton>
                    <StyledSecondaryButton onClick={handleReset}>
                        Reset
                    </StyledSecondaryButton>
                </StyledButtonContainer>

                {state.mode === 'edit' ? (
                    <EditContainer>
                        <EditMode
                            inputs={state.inputs}
                            handleInputChange={handleInputChange}
                            handleAddSection={handleAddSection}
                            handleDeleteSection={handleDeleteSection}
                        />
                    </EditContainer>
                ) : (
                    <>
                        <PreviewContainer ref={printRef}>
                            <PreviewMode inputs={state.inputs} />
                        </PreviewContainer>
                        <DownloadPDFButton onClick={handleDownloadPdf}>
                            Download as PDF
                        </DownloadPDFButton>
                    </>
                )}
            </div>
        </>
    );
};

export default App;
