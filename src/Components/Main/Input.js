import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios'
import Swal from 'sweetalert2'

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

&:focus {
    outline-color:white;
}

:hover{
transition:0.5s;
background-color:#272B34;
color:white;
border: 2px solid white;
}


`

export default function Input() {
    const [input,setInput]= useState("")
    const HandleSubmit = (e) => {
        e.preventDefault();

        console.log(input)
        let values = {"link":input}
        axios.post('https://api-alarm-clock.herokuapp.com/url/urls',values)
        .then((res) => {
            console.log(res.data)
            Swal.fire({
              icon: 'success',
              title: 'Beep',
              text: 'Our api will keep your api awake from 8am Central to 2am Central',
              footer: 'Thanks for choosing Alarm Clock'
            })
        }).catch((err) => {
            console.error(err)
        })
    }

    return (
        <InputDiv>
        <InputContainer>
            <InputField placeholder="TYPE API URL HERE" onChange={e => setInput(e.target.value)} type="text" id="api-url"/>
            <Submit onClick={HandleSubmit} type="submit">SUBMIT</Submit>
        </InputContainer>
        </InputDiv>
    )
}
