import styled from 'styled-components';
import { StyledMainButton } from './StyledMainButton';

export const StyledSecondaryButton = styled(StyledMainButton)`
    background-color: #fff;
    width: 150px;
    color: black;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    outline: 2px solid #ccc;
    transition: background-color 0.3s;
    margin: 20px;
    transform: scale(1);

    &:hover {
        background-color: #333;
        color: #fff;
        outline: none;
    }

    &:active {
        transform: scale(1.05);
    }
`;
