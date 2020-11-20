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
  max-width: 60%;
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
  background-size: 500% 4px;
  padding: 5px 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background-size: 100% 4px;
  }
`;

const CatPic = styled.div`
  height: 200px;
  width: 200px;
  margin: 5px;
`;

const CatContainer = styled.div`
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-center;
`;

const RoundedImage = styled(Image)`
  border-radius: 4px;
`;

function Catscii(props) {
  return (
    <div>
      <Head>
        <title>xnmz.co/catscii</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title><Underline href="/">xnmz.co</Underline>/catscii</Title>
        <Sub>
        it gets lonely staring at a screen all day. thankfully i made this program that turns my cat pictures into ascii art that i can curl whenever the mood strikes.
        </Sub>
        <Sub>want to try it?</Sub>
        <Code>curl https://xnmz.co/api/cat/random</Code>
        <Sub>or click any of the pics to see the ascii version</Sub>

      <CatContainer>
        {
          props.pics.map((pic) => {
            return (
              <CatPic key={pic._id}>
                <a href={`/api/cat/${pic._id}`} >
                  <RoundedImage
                    src={pic.url}
                    alt="A picture of a cat"
                    width={200}
                    height={200}
                    layout="fixed"
                  />
                </a>
              </CatPic>
              
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
