import React from 'react'
import styled from 'styled-components';

const InputContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:5em;
`
const InputField = styled.input`
width:35vw;
height:5vh;
&:focus {
    outline-color:white;
}

`
const Submit = styled.button`
margin:.5em;
width:17.5vh;
border: 2px solid black;


`

export default function Input() {
    const HandleSubmit = (e) => {
        return e.target.value
    }
    return (
        <InputContainer>
            <InputField placeholder="TYPE API URL HERE"/>
            <Submit onClick={HandleSubmit}>Submit</Submit>
        </InputContainer>
    )
}
