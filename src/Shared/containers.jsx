import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

export const Navigation = styled.div`
  width: 220px;
  flex-shrink: 0;
  background: #333333;
  color: #FFDBC9;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
`;

export const Body = styled.div`
  height: 100vh;
  width:800px;
  margin-right: auto;
  margin-left : auto;
`;
