import Head from 'next/head'
import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';



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
  const res = await fetch('http://localhost:3000/api/g/random');
  const json = await res.json();
  return json.url;
}

const Home = () => {
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
    <div className="container">
      <Head>
        <title>Glimpses</title>
      </Head>

      <main>
        <YoutubePlayer curVideoId={vidId} />
      </main>

    </div>
  )
}

export default Home;
