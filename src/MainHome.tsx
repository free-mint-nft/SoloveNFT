import React from 'react';
import styled from "styled-components";

interface ImageTest{
    length: number;
};

const Image = styled.img`
  width: ${(props:ImageTest) => props.length}px;
  height: ${(props:ImageTest) => props.length}px;
  border-radius: 50%;
  `;

function MainHome(){

    return(
        <div style={{backgroundColor:'black', width:'100vw',height:'100vh', position:'relative', top:'0'}}>
            <div style = {{width:'80%', position:'relative',top:'100px', left:'10%', height:'80%', border:'2px solid mediumaquamarine', borderRadius:'30px',display:'flex'}}>
                <div className="imgContainer" style={{position:'relative', width:'60%', margin:'5px 10px'}}>
                    <span style={{position:'absolute',left:'5%', top:'12%'}}><Image length={400} src={'Solove.jpg'}></Image></span>
                    <span style= {{position:'absolute', right:'8%', top:'5%'}}><Image length={150} src={'Solove.jpg'}></Image></span>
                    <span style= {{position:'absolute', right:'10%', bottom:'2%'}}><Image length={250} src={'Solove.jpg'}></Image></span>
                    
                </div>
                <div className="textContainer" style={{width:'40%', margin:'20px 10px'}}>
                    <h1 style={{fontSize:'60px',lineHeight:'0.7em'}}>Welcome to </h1>
                    <h2 style={{fontSize:'70px', lineHeight:'0.7em'}}>Solove</h2>
                    <p style={{marginTop:'120px'}}>Solove Supports all the loves in the world.<br/>Join our world and create a new relationship</p>
                    <button>Click to shop</button>
                </div>
            </div>
        </div>
    )
}
export default MainHome;