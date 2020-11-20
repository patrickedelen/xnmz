import React from 'react';
import Head from 'next/head'
import styled from '@emotion/styled';

import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

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
  background-size: 100% 4px;
  padding: 5px 0;
  transition: all 0.5s ease;

  &:hover {
    background-size: 500% 4px;
  }
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
    <div>
      <Head>
        <title>xnmz.co/hometeam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title><Underline href="/">xnmz.co</Underline>/hometeam</Title>
        <Sub>
          the pandemic has provided some interesting changes to study. one of those i was most interested in was seeing if the bubble removed a presume home court advantage in basketball games. here's the data...
        </Sub>

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
        <Sub>Looks pretty even huh? There are some players with better home (blue) than away (red) free throw performance but it's not clear cut. When we run the data through a python script we get some interesting results!</Sub>
        <Sub>For the top 10% of players by total play time, players score ~.9 free throws per 36 minutes on the court for home games and ~.88 for away games, showing a slight advantage to being home.</Sub>
        <Sub>After the bubble, players scored ~.89 free throws per 36 minutes at home and ~.91 while away. So there was a change!</Sub>
        <Sub>Play around with individual players below:</Sub>
      </Container>
    </div>
  )
}

HomeTeam.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/bb/all');
  const json = await res.json();
  console.log(json[0].url);
  return { data: json };
}

export default HomeTeam;
