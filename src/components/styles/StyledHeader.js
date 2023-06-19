import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: #f2f2f2;
    text-align: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    color: #333;
    font-size: 32px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;

    &::before {
        content: '';
        display: block;
        height: 3px;
        background-color: #333;
    }
`;
