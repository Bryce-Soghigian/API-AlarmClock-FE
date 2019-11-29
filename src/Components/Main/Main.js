import React,{useState,useEffect} from 'react'
import { MdAlarmOn} from "react-icons/md";
import styled from 'styled-components'
import Input from './Input';
import axios from 'axios';

const MainContainer = styled.div`
display:flex;
justify-content:space-around;
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
    
    const [arr,setArr] = useState()
    const PingOnInterval = () => {
        for(let i = 0; i< arr.length;i++){
            axios.get(arr[i]["api-url"])
            .then((res) => {
                console.log(arr[i])
                console.log(res.data)
            }).catch((err) => {
                console.error(err)
            })
        }


    }

    useEffect(() => {
        axios.get("https://api-alarm-clock.herokuapp.com/url/urls")
        .then((res) => {
            setArr(res.data)
            
        }).catch((err) => {
            console.error(err)
        })
    }, [])

if(arr !== undefined){
    setInterval(function() {
        PingOnInterval()
    },300000)

}

    return (
        <MainContainer>
            <Top>
                <MdAlarmOn color="white" size="5em"/>
                <H1>WAKE UP YOUR API BELOW!</H1>
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
