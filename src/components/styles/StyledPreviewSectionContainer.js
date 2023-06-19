import styled from 'styled-components';

export const StyledPreviewSectionContainer = styled.div`
    padding: 2px 10px;

    .experienceContainer {
        display: flex;
        flex-direction: column;
        gap: 3px;
        font-size: 9px;
        font-style: italic;
        margin-bottom: 12px;
    }

    .experienceDataContainer {
        display: flex;
        font-size: 10px;
        font-weight: bold;
        justify-content: space-between;
        margin-bottom: 2px;
    }

    .educationContainer {
        display: flex;
        flex-direction: column;
        gap: 3px;
        font-size: 9px;
        font-style: italic;
        margin-bottom: 12px;
    }

    .educationDataContainer {
        display: flex;
        font-size: 10px;
        font-weight: bold;
        justify-content: space-between;
        margin-bottom: 2px;
    }

    .projectContainer {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-bottom: 12px;
    }

    .projectDataContainer {
        display: flex;
        flex-direction: column;
        gap: 3px;
        justify-content: space-between;
        font-weight: bold;
        margin-bottom: 3px;

        p.title {
            font-size: 10px;
        }

        p.description {
            font-size: 9px;
            font-weight: normal;
        }
    }

    .projectLinksContainer {
        font-size: 10px;
    }

    .skillsContainer {
        font-size: 12px;
    }
`;
