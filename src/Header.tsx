import React, {useEffect, useState} from 'react';
import {FaTwitter,FaDiscord,FaInstagram,FaTelegram,FaShoppingCart,FaHome} from "react-icons/fa";
import styled from "styled-components";
import { Link } from 'react-router-dom';    
// import {LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
// import * as anchor from "@project-serum/anchor";
// import {useAnchorWallet} from "@solana/wallet-adapter-react";
// import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";

const StyledLink = styled(Link)`
  margin: 30px;
  text-decoration-line: none;
`

function Header(){
    return(
      <div id="header">
        <div className="navbar">
          <div className="navbarLogo">
            <img src="logo1.svg" alt="Logo" style={{height:'30px'}}/>
          </div>
          {/* <ul className="navbar_icons">
            <li><a href="" target="_blank"><FaHome/></a></li>
            <li><a href="" target="_blank"><FaTwitter/></a></li>
            <li><a href="" target="_blank"><FaTelegram/></a></li>
            <li><a href="" target="_blank"><FaInstagram/></a></li>
            <li><a href="" target="_blank"><FaDiscord/></a></li>
            <li><a href="" target="_blank"><FaShoppingCart/></a></li>
          </ul> */}
          <div className="navbarMenu">
            <StyledLink to='/'><p>HOME</p></StyledLink>
            <StyledLink to='/About'><p>ABOUT</p></StyledLink>
            <StyledLink to='/Roadmap'><p>ROADMAP</p></StyledLink>
            <StyledLink to='/Faq'><p>FAQ</p></StyledLink>
            <StyledLink to='/Mint'><p>MINT</p></StyledLink>
          </div>
          
          {/* <Wallet>
            {wallet ?
              <WalletAmount>0 sol<ConnectButton2/></WalletAmount> :
              <ConnectButton>Connect wallet</ConnectButton>}
              {/* {wallet ?
                <WalletAmount>{(balance || 0).toLocaleString()} sol<ConnectButton2/></WalletAmount> :
                <ConnectButton>Connect wallet</ConnectButton>}  
          </Wallet>*/}

        </div>
      </div>
    )
  }
  
export default Header