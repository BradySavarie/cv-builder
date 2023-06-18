import styled from 'styled-components';

export const StyledSectionButton = styled.button`
    background-color: #333;
    max-width: max-content;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    padding: 10px 15px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s;
    margin: 0 10px;
    margin-bottom: 15px;
    align-self: center;

    &:hover {
        background-color: #fff;
        color: black;
        outline: 2px solid #ccc;
    }
`;
