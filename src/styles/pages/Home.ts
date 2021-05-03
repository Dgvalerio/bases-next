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
    grid-template-columns: 20% 80%;
    border-radius: 0 8px 8px 0;
    background-color: #000;

    .left {
      background: url(${W78W7});
      background-size: cover;
      min-height: 100%;
    }

    .right {
      text-align: center;
      padding: 32px;
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

  table {
    min-width: 100%;
    padding: 16px;
    border-radius: 8px;
    border-collapse: separate;

    th,
    td {
      margin: 4px;
      text-align: center;
      align-items: center;
      padding: 8px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
  }

  button {
    margin: 0;
    padding: 12px 20px;
    background-color: rgba(255, 255, 255, 0.02);
    color: white;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    width: 100%;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;
