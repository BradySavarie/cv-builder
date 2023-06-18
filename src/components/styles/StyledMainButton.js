import styled from 'styled-components';

export const StyledMainButton = styled.button`
    background-color: #333;
    width: 150px;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s;
    margin: 20px;
    transform: scale(1.3);

    &:hover {
        background-color: #fff;
        color: black;
        outline: 2px solid #ccc;
    }

    &:active {
        outline: 1px solid black;
        transform: scale(1.25);
    }
`;
