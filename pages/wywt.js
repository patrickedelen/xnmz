import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';



import styled from '@emotion/styled';
import { PageColumn } from '../components/PageColumn';

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
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

const ImageContainer = styled.div`
    margin-top: 30px;

    img {
      margin: 10px;
    }
`
const Underline = styled.a`
  background-image: linear-gradient(90deg, rgba(255, 191, 113, 1), rgba(255, 145, 153, 1));
  background-position: 0 1.3em;
  background-repeat: repeat-x;
  background-size: 500% 4px;
  padding: 5px 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background-size: 100% 4px;
  }
`;

export default function WYWT() {
    return (
      <div>
        <Head>
          <title>xnmz.co/wywt</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <PageColumn>
          <Title>
            <Underline href="/">xnmz.co</Underline>/wywt
          </Title>

          <Sub>
            i tend to buy too many clothes, so i built a webapp to track what outfits i actually wear
          </Sub>
          <Sub>
            i've been using vue a lot at work so this project was great to get back into react. 
            i used framer-motion extensively to animate the components and developed the prototype in figma.
            the app connects to notion to store all of your clothes and then creates new pages when you put an outfit together
            so you can add notes.
          </Sub>
          <Sub>
            having backgrounds in the images got annoying so i built a serverless function in lambda to strip the background. check that project out here:
          </Sub>

          <Title>
            screenshots:
          </Title>

          <ImageContainer>
            <img 
              src='/upload_start.jpg'
              height={400}
            />
            <img 
              src='/upload_form.jpg'
              height={400}
            />
            <img 
              src='/wywt_home.jpg'
              height={400}
            />
            <img 
              src='/outfit_form.jpg'
              height={400}
            />

          </ImageContainer>

          <Sub>want to try it?</Sub>
          <Code>go to https://wywt.xnmz.co on your phone or scan the QR code below</Code>
            <br/>
        <ImageContainer>
          <Image
            src='/qr-code.png'
            alt="link to wywt project"
            width={250}
            height={250}
          />
        </ImageContainer>
        </PageColumn>
      </div>
    );
}

WYWT.getInitialProps = async (ctx) => {

    return { prop: '' };
  };
  
