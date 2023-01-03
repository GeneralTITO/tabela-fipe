import styled from "styled-components";

export const SectionStyled = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  header {
    div {
      display: flex;
      flex-direction: row;
      gap: 5px;
    }
    gap: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
export const DivCardStyled = styled.div`
  display: flex;
  max-width: 200px;
  width: 100%;
  flex-direction: column;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  gap: 30px;
  height: 150px;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const PAno = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  span {
    font-weight: 700;
  }
`;
export const PPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  span {
    font-weight: 700;
  }
`;
