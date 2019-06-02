import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarStyledComponent = styled.div` {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;

  topBarContainer { 
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;

    @media (min-width: 1280px) {
      width: 1280px;
    }

    topBarContainerLeft { 
      display: flex;
      justify-content: none;
      align-items: center;
      flex-direction: row;
      flex: 1;
      font-size: 11px;

      topBarContainerLeftSpan { 
        cursor: pointer;
        margin-right: 25%;
        font-weight: bold;
      } 
    }

    topBarContainerCenter { 
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex: 3;
      font-size: 9px;

      topBarContainerCenterSpan { 
        cursor: pointer;
        margin-right: 5%;
        &:last-child { 
          margin-right: 0;
        }
        &:hover { 
          text-decoration: underline;
        }
      }
    }

    topBarContainerRight { 
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: row;
      flex: 1;
      font-size: 11px;
      font-weight: bold;

      topBarContainerRightSpan { 
        cursor: pointer;
      }
    }
  }
}`


// *********************************************************************

const TopBar = () => {
  return (
   <TopBarStyledComponent>
      <topBarContainer>
        <topBarContainerLeft>
          <topBarContainerLeftSpan>TOPICS</topBarContainerLeftSpan>
          <topBarContainerLeftSpan>SEARCH</topBarContainerLeftSpan>
        </topBarContainerLeft>
        <topBarContainerCenter>
          <topBarContainerCenterSpan>GENERAL</topBarContainerCenterSpan>
          <topBarContainerCenterSpan>BROWNBAG</topBarContainerCenterSpan>
          <topBarContainerCenterSpan>RANDOM</topBarContainerCenterSpan>
          <topBarContainerCenterSpan>MUSIC</topBarContainerCenterSpan>
          <topBarContainerCenterSpan>ANNOUNCEMENTS</topBarContainerCenterSpan>
        </topBarContainerCenter>
        <topBarContainerRight>
          <topBarContainerRightSpan>LOG IN</topBarContainerRightSpan>
        </topBarContainerRight>
        </topBarContainer>
    </TopBarStyledComponent>
  )
}

export default TopBar;