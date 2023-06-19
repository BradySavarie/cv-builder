import styled from 'styled-components';

export const StyledPreviewSectionHeader = styled.h3`
    padding: 10px;
    position: relative;
    line-height: 0.25;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 10px;
        width: calc(100% - 20px);
        height: 1px;
        background-color: #333;
    }
`;
