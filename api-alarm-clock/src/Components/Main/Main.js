import React from 'react'
import { MdAlarmOn} from "react-icons/md";
import styled from 'styled-components'
import Input from './Input';

const MainContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background-color: #282c34;
width:100vw;
height:100vh;
`

const  H1 = styled.h1`
color:white;

`
const P = styled.p`
color:white;
width:75%;

`
const Top = styled.div`
margin-top:1em;
display:flex;
align-items:center;
margin:1em;
justify-content:center;
border-bottom: 2px solid white;
width:100vw;
height:10vh;

`
const Middle = styled.div`
height:30vh;

`

const Bottom = styled.div`
display:flex;
justify-content:center;
height:60vh;
border-top: 2px solid white;
width:100vw;

`
export default function Main() {
    return (
        <MainContainer>
            <Top>
                <MdAlarmOn color="white" size="1.5em"/>
                <H1>Wake up your app below!</H1>
            </Top>
            <Middle>
                <Input/>
            </Middle>
            <Bottom>
            <P>
                This api alarm clock will ping your api every 30 minutes so it never falls asleep due to inactivity.
                If you are a fan of this project, and are looking to add a new developer to your team send me an
                email at bsoghigian@gmail.com.
             </P>
            </Bottom>

            
        </MainContainer>
    )
}
