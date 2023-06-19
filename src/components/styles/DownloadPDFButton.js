import styled from 'styled-components';

export const DownloadPDFButton = styled.button`
    background-color: #333;
    width: max-content;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s;
    transform: scale(1.3);
    margin-bottom: 20px;

    &:hover {
        background-color: #fff;
        color: black;
        outline: 2px solid #ccc;
    }
`;
