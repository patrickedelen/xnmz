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

export default function BgRemove() {
    return (
      <div>
        <Head>
          <title>xnmz.co/picshare</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <PageColumn>
          <Title>
            <Underline href="/">xnmz.co</Underline>/picshare
          </Title>

          <Sub>
            i go to a lot of doctor appointments and the one thing they all have in common is how awful uploading insurance / ID photos are on their forms.
          </Sub>
          <Sub>
            i built a simple demo app that lets you open a page on your phone to take and upload the photo, then sends it over websockets to your desktop browser. 
            wanted to mess with infra stuff so i set it up to auto deploy to AWS and Vercel on commit. please someone steal this. please.
          </Sub>


        <Title>
            <Underline href="https://picshare-pedelen.vercel.app/">live demo - picshare-pedelen.vercel.app</Underline>
        </Title>

        <Title>
            <Underline href="https://github.com/patrickedelen/picshare">github.com/patrickedelen/picshare</Underline>
        </Title>

        <ImageContainer>
            <img 
              src='/picshare_desktop_start.png'
              height={400}
            />
            <img 
              src='/picshare_mobile_start.jpg'
              height={400}
            />
            <img 
              src='/picshare_mobile_sent.jpg'
              height={400}
            />
            <img 
              src='/picshare_desktop_end.png'
              height={400}
            />
        </ImageContainer>

        

        </PageColumn>
      </div>
    );
}

BgRemove.getInitialProps = async (ctx) => {

    return { prop: '' };
  };
  
