import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../animation/not-found.json'


const Wrapper = styled.section`
min-height:85.2vh;
display: grid;
display: --ms-grid,
display: --moz-grid;
display: --webkit-grid;
place-items:center;

h3{
  text-transform:uppercase;
}
  @media screen and (min-width:992px){
  min-height: 84hv;
  }
`
;

const ErrorScreen = () => {
  return (
    <Wrapper>

      <h3>Pagina non trovata</h3>
      <Lottie 
      options={{
      loop:true,
      autoplay:true,
      animationData:animationData,
      renderSettings:{
        preserveAspectRatio:'xMidYMid slice',

      }
        
      }}
      width={500} height={500}
      />

      <Link to='/' className='btn btn-primary'>Torna nella Home</Link>

    </Wrapper>
  )


}

export default ErrorScreen