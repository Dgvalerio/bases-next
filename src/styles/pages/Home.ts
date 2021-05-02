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
    grid-template-columns: 28% 72%;
    border-radius: 0 8px 8px 0;
    background-color: #000;

    .left {
      background: url(${W78W7});
      background-size: cover;
    }

    .right {
      padding: 128px;
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
`;
