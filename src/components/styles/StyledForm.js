import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 15px 10px;

    input,
    textarea {
        width: 100%;
        padding: 5px 10px;
        border: 2px solid #ccc;
        border-radius: 4px;
        transition: border-color 0.3s ease-in-out;
    }

    input:focus,
    textarea:focus {
        border-color: #555555;
        outline: none;
    }
`;
