import React from 'react';
import styled from 'styled-components';

const PeopleWrapper = styled.div`
    display: flex;
    padding: 1.5rem;
    box-sizing: border-box;
`;

export default function People({ children }) {
    return <PeopleWrapper>{children}</PeopleWrapper>;
}
