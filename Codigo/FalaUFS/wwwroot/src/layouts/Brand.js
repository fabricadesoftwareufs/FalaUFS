import React from 'react'
import styled from "styled-components";

import logo from "../assets/white-logo.png";

const Brand = () => {
  return (
    <Image src={logo} alt="UFS" />
    
  )
}

export default Brand

const Image = styled.img`
  height: 50px;
  width: 130px;
  margin-top: 8px;
  margin-left: 50px;
`;