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

export default function PyCussion() {
    return (
      <div>
        <Head>
          <title>xnmz.co/pycussion</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <PageColumn>
          <Title>
            <Underline href="/">xnmz.co</Underline>/pycussion
          </Title>

          <Sub>
            i've been making music lately but for live performances i really needed some visuals to go along with it.
          </Sub>
          <Sub>
            chatgpt helped me figure out this python app that analyzes the audio stream from my synth and generates a waveform that responds to the phrasing. 
            in the future i'll add more visuals but for now it's a fun project.
          </Sub>

        <Title>
            <Underline href="https://github.com/patrickedelen/pycussion">github.com/patrickedelen/pycussion</Underline>
        </Title>

        <Title>
            <Underline href="https://soundcloud.com/patrick-edelen/upgrade-live-techno-set">upgrade - my techno set</Underline>
        </Title>
        

        <video controls width="600">

            <source src="/pycussion_demo.webm" type="video/webm" />

            Sorry, your browser doesn't support embedded videos.

        </video>
        </PageColumn>
      </div>
    );
}

PyCussion.getInitialProps = async (ctx) => {

    return { prop: '' };
  };
  
