import React from 'react';
import Head from 'next/head'
import styled from '@emotion/styled';
import { PageColumn } from '../components/PageColumn';

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #fefefe;
`;

const Quote = styled.h2`
  font-family: 'Cousine', monospace;
  color: #fefefe;
  background-color: rgba(121, 117, 134, 0.2);
  font-weight: 600;
  font-size: 1.1rem;
  color: #fefefe;
  margin: 40px 0;
  padding: 10px;
  text-align: center;
`

const Objective = styled.h3`
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: #fefefe;
  margin: 20px 0;
  width: 80%;
  max-width: 800px;
`

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

export default function Dark() {
  return (
    <div>
      <Head>
        <title>xnmz.co</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageColumn>
        <>
        <svg width="281" height="39" viewBox="0 0 281 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.2189 31.1C36.1189 32 36.5689 33.025 36.5689 34.175C36.5689 35.275 36.1439 36.275 35.2939 37.175C34.4439 38.025 33.4439 38.45 32.2939 38.45C31.0439 38.45 29.9689 37.925 29.0689 36.875L18.4939 25.175L7.91895 36.875C6.96895 37.875 5.89395 38.375 4.69395 38.375C3.59395 38.375 2.61895 37.95 1.76895 37.1C0.918945 36.25 0.493945 35.275 0.493945 34.175C0.493945 33.025 0.943945 32 1.84395 31.1L12.7939 19.175L2.44395 7.925C1.54395 7.025 1.09395 6 1.09395 4.85C1.09395 3.7 1.51895 2.725 2.36895 1.925C3.21895 1.075 4.19395 0.649998 5.29395 0.649998C6.49395 0.649998 7.56895 1.15 8.51895 2.15L18.4939 13.1L28.4689 2.15C29.4189 1.15 30.4939 0.649998 31.6939 0.649998C32.8439 0.649998 33.8189 1.075 34.6189 1.925C35.4689 2.725 35.8939 3.7 35.8939 4.85C35.8939 6 35.4439 7.025 34.5439 7.925L24.1939 19.175L35.2189 31.1ZM64.6359 0.424996C69.0359 0.424996 72.3109 1.675 74.4609 4.175C76.6109 6.675 77.6859 10.45 77.6859 15.5V33.95C77.6859 35.35 77.2609 36.45 76.4109 37.25C75.6109 38.05 74.4859 38.45 73.0359 38.45C71.5859 38.45 70.4359 38.05 69.5859 37.25C68.7359 36.45 68.3109 35.35 68.3109 33.95V16.025C68.3109 13.175 67.7609 11.1 66.6609 9.8C65.6109 8.5 63.9359 7.85 61.6359 7.85C58.9359 7.85 56.7609 8.7 55.1109 10.4C53.5109 12.1 52.7109 14.375 52.7109 17.225V33.95C52.7109 35.35 52.2859 36.45 51.4359 37.25C50.5859 38.05 49.4359 38.45 47.9859 38.45C46.5359 38.45 45.3859 38.05 44.5359 37.25C43.7359 36.45 43.3359 35.35 43.3359 33.95V4.925C43.3359 3.625 43.7609 2.575 44.6109 1.775C45.4609 0.974999 46.6109 0.574999 48.0609 0.574999C49.3609 0.574999 50.4109 0.974999 51.2109 1.775C52.0609 2.525 52.4859 3.525 52.4859 4.775V6.8C53.7359 4.75 55.4109 3.175 57.5109 2.075C59.6109 0.974997 61.9859 0.424996 64.6359 0.424996ZM130.783 0.424996C134.783 0.424996 137.833 1.625 139.933 4.025C142.083 6.375 143.158 10.2 143.158 15.5V33.95C143.158 35.4 142.708 36.525 141.808 37.325C140.958 38.075 139.833 38.45 138.433 38.45C137.083 38.45 135.958 38.075 135.058 37.325C134.208 36.525 133.783 35.4 133.783 33.95V15.5C133.783 12.75 133.283 10.8 132.283 9.65C131.333 8.45 129.858 7.85 127.858 7.85C125.408 7.85 123.458 8.7 122.008 10.4C120.558 12.05 119.833 14.325 119.833 17.225V33.95C119.833 35.4 119.383 36.525 118.483 37.325C117.633 38.075 116.533 38.45 115.183 38.45C113.833 38.45 112.708 38.075 111.808 37.325C110.908 36.525 110.458 35.4 110.458 33.95V15.5C110.458 12.75 109.958 10.8 108.958 9.65C108.008 8.45 106.533 7.85 104.533 7.85C102.083 7.85 100.133 8.7 98.683 10.4C97.283 12.05 96.583 14.325 96.583 17.225V33.95C96.583 35.4 96.133 36.525 95.233 37.325C94.333 38.075 93.208 38.45 91.858 38.45C90.508 38.45 89.383 38.075 88.483 37.325C87.633 36.525 87.208 35.4 87.208 33.95V4.925C87.208 3.525 87.658 2.45 88.558 1.7C89.458 0.949999 90.583 0.574999 91.933 0.574999C93.233 0.574999 94.283 0.949999 95.083 1.7C95.933 2.4 96.358 3.425 96.358 4.775V6.575C97.508 4.575 99.033 3.05 100.933 2C102.883 0.949997 105.108 0.424996 107.608 0.424996C113.108 0.424996 116.783 2.725 118.633 7.325C119.733 5.225 121.358 3.55 123.508 2.3C125.658 1.05 128.083 0.424996 130.783 0.424996ZM179.987 30.95C182.787 30.95 184.187 32.125 184.187 34.475C184.187 35.575 183.837 36.45 183.137 37.1C182.437 37.7 181.387 38 179.987 38H154.937C153.687 38 152.662 37.6 151.862 36.8C151.062 36 150.662 35.05 150.662 33.95C150.662 32.8 151.112 31.7 152.012 30.65L171.287 8.375H154.562C153.162 8.375 152.112 8.075 151.412 7.475C150.712 6.875 150.362 6 150.362 4.85C150.362 3.7 150.712 2.825 151.412 2.225C152.112 1.625 153.162 1.325 154.562 1.325H178.787C180.087 1.325 181.112 1.725 181.862 2.525C182.662 3.275 183.062 4.225 183.062 5.375C183.062 6.575 182.637 7.675 181.787 8.675L162.437 30.95H179.987ZM195.344 38.45C193.744 38.45 192.419 37.925 191.369 36.875C190.319 35.775 189.794 34.425 189.794 32.825C189.794 31.225 190.319 29.9 191.369 28.85C192.419 27.75 193.744 27.2 195.344 27.2C196.944 27.2 198.269 27.75 199.319 28.85C200.369 29.9 200.894 31.225 200.894 32.825C200.894 34.425 200.369 35.775 199.319 36.875C198.269 37.925 196.944 38.45 195.344 38.45ZM224.845 38.6C221.195 38.6 217.97 37.825 215.17 36.275C212.42 34.725 210.295 32.525 208.795 29.675C207.295 26.825 206.545 23.5 206.545 19.7C206.545 15.9 207.32 12.55 208.87 9.65C210.47 6.7 212.695 4.425 215.545 2.825C218.395 1.225 221.67 0.424996 225.37 0.424996C227.32 0.424996 229.27 0.699997 231.22 1.25C233.22 1.8 234.97 2.55 236.47 3.5C238.07 4.55 238.87 5.875 238.87 7.475C238.87 8.575 238.595 9.475 238.045 10.175C237.545 10.825 236.87 11.15 236.02 11.15C235.47 11.15 234.895 11.025 234.295 10.775C233.695 10.525 233.095 10.225 232.495 9.875C231.395 9.225 230.345 8.725 229.345 8.375C228.345 7.975 227.195 7.775 225.895 7.775C222.795 7.775 220.395 8.8 218.695 10.85C217.045 12.85 216.22 15.75 216.22 19.55C216.22 23.3 217.045 26.2 218.695 28.25C220.395 30.25 222.795 31.25 225.895 31.25C227.145 31.25 228.245 31.075 229.195 30.725C230.195 30.325 231.295 29.8 232.495 29.15C233.245 28.7 233.895 28.375 234.445 28.175C234.995 27.925 235.545 27.8 236.095 27.8C236.895 27.8 237.57 28.15 238.12 28.85C238.67 29.55 238.945 30.425 238.945 31.475C238.945 32.325 238.745 33.075 238.345 33.725C237.995 34.325 237.395 34.875 236.545 35.375C234.995 36.375 233.195 37.175 231.145 37.775C229.095 38.325 226.995 38.6 224.845 38.6ZM261.916 38.6C258.166 38.6 254.866 37.825 252.016 36.275C249.216 34.725 247.041 32.5 245.491 29.6C243.941 26.7 243.166 23.325 243.166 19.475C243.166 15.625 243.941 12.275 245.491 9.425C247.041 6.525 249.216 4.3 252.016 2.75C254.866 1.2 258.166 0.424996 261.916 0.424996C265.666 0.424996 268.941 1.2 271.741 2.75C274.591 4.3 276.766 6.525 278.266 9.425C279.816 12.275 280.591 15.625 280.591 19.475C280.591 23.325 279.816 26.7 278.266 29.6C276.766 32.5 274.591 34.725 271.741 36.275C268.941 37.825 265.666 38.6 261.916 38.6ZM261.841 31.325C264.891 31.325 267.216 30.325 268.816 28.325C270.416 26.325 271.216 23.375 271.216 19.475C271.216 15.625 270.416 12.7 268.816 10.7C267.216 8.65 264.916 7.625 261.916 7.625C258.916 7.625 256.591 8.65 254.941 10.7C253.341 12.7 252.541 15.625 252.541 19.475C252.541 23.375 253.341 26.325 254.941 28.325C256.541 30.325 258.841 31.325 261.841 31.325Z" fill="url(#paint0_linear)"/>
            <defs>
            <linearGradient id="paint0_linear" x1="141" y1="-38" x2="141" y2="89" gradientUnits="userSpaceOnUse">
            <stop offset="0.234375" stopColor="#FF9199"/>
            <stop offset="0.53125" stopColor="#FFA583"/>
            <stop offset="0.963542" stopColor="#FFBF71"/>
            </linearGradient>
            </defs>
          </svg>
        </>
        <Title>
          pat edelen's portfolio site
        </Title>
        <Sub>
          patrickedelen (at) gmail.com | <Underline href="https://github.com/patrickedelen">github.com/patrickedelen</Underline>
        </Sub>

        <Sub>
          ...
        </Sub>


        <Objective>
          welcome visitor!
        </Objective>
        <Objective>
          so why make personal projects anyways? when i started coding at 14 i loved messing around with html and wordpress just to see what was possible.
          now that i have a real job and life i've realized personal projects keep me loving this profession when work is boring / frustrating / repetitive.
        </Objective>
        <Objective>  
          not 100% sure what's next for me but likely it will involve computers and working with them to solve problems. click any of the links below for a lil writeup on why i worked on the project
          and more details on how to check them out.
        </Objective>

        <Sub>
          ...
        </Sub>

        <ProjectContainer>
          <Sub>
            <Underline href="/wywt">what are you wearing today?</Underline> - manage your wardrobe
          </Sub>
          <Code>
            nextjs//figma//framer-motion
          </Code>
        </ProjectContainer>

        <ProjectContainer>
          <Sub>
            <Underline href="/freebg">freebg</Underline> - lambda docker container to remove image backgrounds
          </Sub>
          <Code>
            python//aws
          </Code>
        </ProjectContainer>

        <ProjectContainer>
          <Sub>
            <Underline href="/picshare">picshare</Underline> - web demo on how to actually handle form photo uploads
          </Sub>
          <Code>
            nextjs//express//aws
          </Code>
        </ProjectContainer>

        <ProjectContainer>
          <Sub>
            <Underline href="/pycussion">pycussion</Underline> - make visuals for my live music performances
          </Sub>
          <Code>
            python//python//python
          </Code>
        </ProjectContainer>

        <ProjectContainer>
          <Sub>
            <Underline href="/catscii">catscii</Underline> - curling ascii art of my cat to make programming fun again
          </Sub>
          <Code>
            node//s3//react-native
          </Code>
        </ProjectContainer>

        <ProjectContainer>
          <Sub>
            <Underline href="/hometeam">home court advantage</Underline> - my brother asked me a basketball question so I scraped all the stats
          </Sub>
          <Code>
            node//react//python
          </Code>
        </ProjectContainer>

        <ProjectContainer>
          <Sub>
            <Underline href="/glimpses">glimpses</Underline> - random youtube videos are actually kind of profound?
          </Sub>
          <Code>
            node//mongodb//react
          </Code>
        </ProjectContainer>

        <Sub>
          ...
        </Sub>

        <Quote>
          i don't perfect my personal projects. most of the code i write actually makes money.
        </Quote>

        <Sub>
          as a treat for scrolling down this far you can download my resume <Underline href="/resume.pdf" target="_blank">here</Underline>.
        </Sub>

      </PageColumn>
    </div>
  );
}

