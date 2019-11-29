import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios'

const InputDiv = styled.div`


`
const InputContainer = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:5em;

`
const InputField = styled.input`
width:35vw;
height:5vh;
color: #282c34;
border: 4px solid black;
&:focus {
    outline-color:white;
}

`
const Submit = styled.button`
margin:.5em;
width:17.5vh;
border: 2px solid black;
color:#272B34;
:hover{
transition:0.5s;
background-color:#272B34;
color:white;
border: 2px solid white;
}


`

export default function Input() {
    const [input,setInput]= useState()
    const HandleSubmit = (e) => {
        console.log(input)
        axios.post('https://api-alarm-clock.herokuapp.com/url/urls',{
            'api-url':input
        })
        .then((res) => {
            console.log(input)
            // document.getElementById("api-url").reset();
        }).catch((err) => {
            console.error(err)
        })
    }
    const HandleChange = (e) => {
        console.log(e.target.value)
        return(setInput(e.target.value.toString()))
    }
    return (
        <InputDiv>
        <InputContainer>
            <InputField placeholder="TYPE API URL HERE" onChange={HandleChange} id="api-url"/>
            <Submit onClick={HandleSubmit}>SUBMIT</Submit>
        </InputContainer>
        </InputDiv>
    )
}
