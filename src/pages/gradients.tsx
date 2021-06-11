import React from 'react';

import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  main {
    display: grid;

    background-color: #000;

    padding: 32px;

    .gradients {
      display: grid;
      grid-gap: 16px;

      grid-template-columns: repeat(4, 256px);
      grid-template-rows: repeat(2, 128px);

      > div {
        //height: 128px;
        //width: 256px;
        display: grid;
        border-radius: 8px 0 8px 0;
        padding: 8px;

        > .top {
          text-align: right;
        }
        > .bottom {
          align-self: end;
          text-align: left;
        }
      }

      #d01 {
        background: linear-gradient(45deg, #ffab1d 0%, #f8501c 50%);
      }
      #d02 {
        background: linear-gradient(45deg, #42df90 0%, #149e8e 50%);
      }
      #d03 {
        background: linear-gradient(45deg, #f86b64 0%, #fa5293 50%);
      }
      #d04 {
        background: linear-gradient(45deg, #ff3b57 0%, #892168 50%);
      }
      #d05 {
        background: linear-gradient(45deg, #888bf4 0%, #5151c6 50%);
      }
      #d06 {
        background: linear-gradient(45deg, #2bdce3 0%, #42ffdb 50%);
      }
      #d07 {
        background: linear-gradient(45deg, #f573c3 0%, #c13dff 50%);
      }
      #d08 {
        background: linear-gradient(45deg, #2dc8ed 0%, #548af0 50%);
      }
    }
  }
`;

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Gradientes</title>
    </Head>

    <main>
      <h1>Gradientes legais</h1>
      <br />
      <div className="gradients">
        <div id="d01">
          <span className="top">#ffab1d</span>
          <span className="bottom">#f8501c</span>
        </div>
        <div id="d02">
          <span className="top">#42df90</span>
          <span className="bottom">#149e8e</span>
        </div>
        <div id="d03">
          <span className="top">#fa5293</span>
          <span className="bottom">#f86b64</span>
        </div>
        <div id="d04">
          <span className="top">#892168</span>
          <span className="bottom">#ff3b57</span>
        </div>
        <div id="d05">
          <span className="top">#5151c6</span>
          <span className="bottom">#888bf4</span>
        </div>
        <div id="d06">
          <span className="top">#42ffdb</span>
          <span className="bottom">#2bdce3</span>
        </div>
        <div id="d07">
          <span className="top">#c13dff</span>
          <span className="bottom">#f573c3</span>
        </div>
        <div id="d08">
          <span className="top">#548af0</span>
          <span className="bottom">#2dc8ed</span>
        </div>
      </div>
    </main>
  </Container>
);

export default Home;
