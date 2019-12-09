import React from "React"
import styled from "styled-components"

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`

const Backdrop = ({ click }) => {
  return <StyledBackdrop onClick={click} />
}

Backdrop.propTypes = {}

export default Backdrop
