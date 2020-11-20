import Document, { Html, Head, Main, NextScript } from 'next/document'
import styled from '@emotion/styled';

const Body = styled.body`
  margin: 0;
  padding: 0;
  background-color: #030414;
`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html style={{ backgroundColor: 'transparent' }}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" /> 
          <link href="https://fonts.googleapis.com/css2?family=Cousine&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    )
  }
}

export default MyDocument;