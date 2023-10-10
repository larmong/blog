import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 280px);
  background: rgba(0, 0, 0, 0.2);
  color: #333;
  padding: 50px 30px 10px 30px;
`;

export const Page = styled.div`
  min-height: calc(100vh - 100px);
  background: rgba(255, 255, 255, 0.38);
`;
