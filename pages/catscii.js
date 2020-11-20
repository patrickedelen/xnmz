import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import styled from '@emotion/styled';

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #fefefe;
`;
const Sub = styled.h2`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: #fefefe;
`;
const Code = styled.span`
  font-family: 'Cousine', monospace;
  color: #fefefe;
  background-color: rgba(121, 117, 134, 0.2);
  padding: 5px;
  font-size: 0.9em;
`;

const ProjectContainer = styled.div`
  margin: 20px 0;
`;


const Container = styled.div`
@media (min-width: 768px) {
  margin: 15vh 15vw;
}
@media (max-width: 767px) {
  margin: 8vh 8vw;
}
`;

const Underline = styled.a`
  background-image: linear-gradient(90deg, rgba(255,191,113,1), rgba(255,145,153,1));
  background-position: 0 1.3em;
  background-repeat: repeat-x;
  background-size: 100% 4px;
  padding: 5px 0;
  transition: all 0.5s ease;

  &:hover {
    background-size: 500% 4px;
  }
`;

const CatContainer = styled.div`
  margin: 50px;
`;

function Catscii(props) {
  return (
    <div>
      <Head>
        <title>xnmz.co/catscii</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>xnmz.co/catscii</Title>
        <Sub>
        it gets lonely staring at a screen all day. thankfully i made this program that turns my cat pictures into ascii art that i can curl whenever the mood strikes.
        </Sub>
        <Sub>want to try it?</Sub>
        <Code>curl https://xnmz.co/api/cat/random</Code>

      <CatContainer>
        {
          props.pics.map((pic) => {
            return (
              <>
                <Image
                  src={pic.url}
                  alt="A picture of a cat"
                  width={200}
                  height={200}
                />
              </>
              
            )
          })
        }
      </CatContainer>
      </Container>
    </div>
  )
}

Catscii.getInitialProps = async (ctx) => {
  const res = await fetch('https://xnmz.co/api/cat/all');
  const json = await res.json();
  // console.log(json[0].url);
  return { pics: json };
}

export default Catscii;
