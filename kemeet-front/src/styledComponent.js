import styled from "styled-components";

// export const MediaDiv = styled.div`
//   margin: 0px auto;
//   min-height: 100vh;
//   width: 768px;
//   color: ${(props) => props.theme.fontColor};
//   background-color: ${(props) => props.theme.bgColor};
//   @media screen and (max-width: 768px) {
//     width: 100%;
//   }
// `;

export const HeaderDiv = styled.div`
  width: 768px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Black Han Sans", sans-serif;
  position: absolute;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Footer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterBig = styled.span`
  margin: 5px;
  font-size: 12px;
`;
export const FooterSmall = styled.span`
  margin: 5px;
  font-size: 5px;
`;

