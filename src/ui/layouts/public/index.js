import React from 'react'
import styled from 'styled-components';

import '../../../assets/App.css';

const BodySection = styled.section`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;

  > div {
    display: grid;
    align-items: center;
    justify-items: center;

    h1 {
      margin: 0;
    }
  }
`;

const PublicLayout = ({ children }) => {
  return (
    <>
      <BodySection>
        <div>
          {children}
        </div>
      </BodySection>
    </>
  );
};

export default PublicLayout;
