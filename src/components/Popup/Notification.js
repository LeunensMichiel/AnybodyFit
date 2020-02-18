import React from "react"
import styled from "styled-components"

import colors from "../framework/Colors"
import screens from "../framework/Screens"

import CrossIcon from "../../images/svg/cross.inline.svg"

const NotificationContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: ${colors.accent2};
  z-index: 500;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  animation: ${props => (props.isVisible ? "fadein" : " ")} 0.5s forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  animation-delay: 1s;
  visibility: hidden;

  h3 {
    font-size: 1em;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 0.8em;
    margin: 0;
  }

  @media ${screens.tablet} {
    h3 {
      font-size: 1.3em;
      margin-bottom: 0.5em;
    }

    p {
      font-size: 1em;
      margin: 0;
    }
  }

  @keyframes fadein {
    from {
      bottom: -100%;
      opacity: 0;
      visibility: hidden;
    }
    to {
      visibility: visible;
      bottom: 0;
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      visibility: visible;
      bottom: 0;
      opacity: 1;
    }
    to {
      visibility: hidden;
      bottom: -100%;
      opacity: 0;
    }
  }
`

const StyledCross = styled(CrossIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 20px;
  cursor: pointer;
  fill: ${colors.black};
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;
  &:focus {
    outline: none;
  }
  &:hover,
  &:focus {
    transform: scale(0.95);
  }
`

const Notification = ({ notification, click, isVisible }) => {
  return (
    <NotificationContainer isVisible={isVisible === true}>
      <span onClick={click} onKeyDown={click} tabIndex={0} role="button">
        <StyledCross />
      </span>
      <h3>{notification.title || ""}</h3>
      <p>{notification.description}</p>
    </NotificationContainer>
  )
}

export default Notification
