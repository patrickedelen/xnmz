import Head from 'next/head'
import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';


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


const YoutubePlayer = (props) => {
  const opts = {
    playerVars: { autoplay: 1 }
  };
  return (
    <>
    {props.curVideoId !== '' && (
    <YouTube
    videoId={props.curVideoId}
    onReady={() => console.log('ready')}
    opts={opts}
    />
    )}
    <h4>loading {props.curVideoId}</h4>
    </>
    )
}

const getVideo = async () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL;

  const res = await fetch(`${url}/api/g/random`);
  const json = await res.json();
  return json.url;
}

const Glimpses = () => {
  // const [curVideos, setCurVideos] = useState(['']);
  // const [curVideoIndex, setCurVideoIndex] = useState(0);

  const [vidId, setVidId] = useState('');

  const changeVideo = async () => {
    const id = await getVideo();
    setVidId(id);
  }

  // if (data?.videos && curVideoIndex === 0) {
  //   setCurVideos([...curVideos, ...data.videos.map((v) => v.url)]);
  //   setCurVideoIndex(data?.videos.length + 1);
  // }

  useEffect(() => {
    changeVideo();

    const intervalId = setInterval(() => {
      changeVideo();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  console.log('rendering', vidId)

  

  return (
    <div>
        <Head>
          <title>xnmz.co/pycussion</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <PageColumn>
          <Title>
            <Underline href="/">xnmz.co</Underline>/glimpses
          </Title>

          <Sub>
            there was a website i used to go on in high school that just played random youtube videos with default file names on loop. the moments you catch from around the world are pretty neat.
          </Sub>
          <Sub>
            i built this replica app a while ago to scrape videos and play them here, maybe stay for a minute?
          </Sub>

          <YoutubePlayer curVideoId={vidId} />
        
        </PageColumn>
      </div>
  )
}

export default Glimpses;
