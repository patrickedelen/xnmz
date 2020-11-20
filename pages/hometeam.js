import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import styled from '@emotion/styled';

import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const Container = styled.div`
  witdth: 90%;
  margin-top: 100px;
  padding: 30px;
  border-radius: 5px;
  max-width: 800px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;

`;

const Title = styled.h1`
color: #222222;
font-weight: 400;
font-size: 1.5rem;
margin-bottom: 20px;
`;

const Text = styled.p`
  color: #222222;
  font-weight: 400;
  font-size: 1.2rem;
`;

const Code = styled.p`
background: #fafafa;
border-radius: 5px;
padding: 0.2rem;
font-size: 1rem;
font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
  Bitstream Vera Sans Mono, Courier New, monospace;
`;

function HomeTeam(props) {

  const home = [];
  const away = [];

  props.data.forEach((p) => {
    home.push({
      x: p.homeFreeThrows,
      y: p.homeTime,
    });
    away.push({
      x: p.awayFreeThrows,
      y: p.awayTime,
    })
  });
  
  return (
    <div className={styles.container}>
      <Head>
        <title>xnmz.co/hometeam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>xnmz.co/hometeam</Title>
        <Text>
        the pandemic has provided some interesting changes to study. one of those i was most interested in was seeing if the bubble removed a presume home court advantage in basketball games. here's the data...
        </Text>

        <ScatterChart
          width={600}
          height={600}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="y" name="sections played" unit="sections" />
          <YAxis type="number" dataKey="x" name="free throws / section" unit="points" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Home Game Free Throw Perf" data={home} fill="blue" />
          <Scatter name="Away Game Free Throw Perf" data={away} fill="red" />
        </ScatterChart>
        <Text>Looks pretty even huh? There are some players with better home (blue) than away (red) free throw performance but it's not clear cut. When we run the data through a python script we get some interesting results!</Text>
        <Text>For the top 10% of players by total play time, players score ~.9 free throws per 36 minutes on the court for home games and ~.88 for away games, showing a slight advantage to being home.</Text>
        <Text>After the bubble, players scored ~.89 free throws per 36 minutes at home and ~.91 while away. So there was a change!</Text>
        <Text>Play around with individual players below:</Text>
      </Container>
    </div>
  )
}

HomeTeam.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/bb/all');
  const json = await res.json();
  // console.log(json[0].url);
  return { data: json };
}

export default HomeTeam;
