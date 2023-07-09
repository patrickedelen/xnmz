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
          <title>xnmz.co/freebg</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <PageColumn>
          <Title>
            <Underline href="/">xnmz.co</Underline>/freebg
          </Title>

          <Sub>
            why spend $0.20 to remove an image background if you can spend 10 hours building it yourself?
          </Sub>
          <Sub>
            i already had all my images from wywt uploading to an s3 bucket, so building a lambda function to process them was simple. 
            this container is involked on upload and runs the rembg python package to process the image and save it to another bucket.
          </Sub>
          <Sub>
            check out / steal the repo if you need something similar.
          </Sub>

            <Title>

          <Underline href="https://github.com/patrickedelen/freebg">github.com/patrickedelen/freebg</Underline>
            </Title>
        </PageColumn>
      </div>
    );
}

BgRemove.getInitialProps = async (ctx) => {

    return { prop: '' };
  };
  
