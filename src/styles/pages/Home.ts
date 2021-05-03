import styled from 'styled-components';

import W78W7 from '../../assets/78W7.webp';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-bottom: 32px;

  main {
    display: grid;
    min-width: 80vw;
    min-height: 100%;
    height: 80vh;
    grid-template-columns: 28% 72%;
    border-radius: 0 8px 8px 0;
    background-color: #000;

    .left {
      background: url(${W78W7});
      background-size: cover;
      min-height: 100%;
    }

    .right {
      align-self: center;
      justify-self: center;
    }
  }

  h1 {
    font-size: 54px;
  }

  p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 32px;
  }

  button {
    margin-top: 16px;
    padding: 8px 16px;
    background-color: #fff;
    color: black;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
