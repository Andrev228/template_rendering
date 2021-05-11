import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import _get from 'lodash/get';

const PersonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin: .5rem;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 2px;
`;

const PersonAvatar = styled.img`
    width: 100%;
    height: auto;
`;

const PersonName = styled.span`
    padding: 1rem 0;
`;

/*
    Score is not displayed in the component according to the requirements,
    nevertheless the value is updated accordung to redux-devtools
*/

export default function Person({ firstName = {}, lastName = {}, avatar = {}, onClick }) {
    const dispatch = useDispatch();
    const stateReferenceId = _get(onClick, 'arguments[0].value', '');

    return (
        <PersonWrapper>
            {avatar.value && <PersonAvatar src={avatar.value} alt="avatar" />}
            <PersonName>{firstName.value} {lastName.value}</PersonName>
            <button onClick={() => dispatch(onClick.value(stateReferenceId))}>Increment score</button>
        </PersonWrapper>);
}
