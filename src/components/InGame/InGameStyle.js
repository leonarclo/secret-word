import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  max-width: 100vw;
`;

export const InfoContainer = styled.section`
  color: white;
  p {
    margin-bottom: 50px;
  }

  h2 {
  }

  h3 {
    padding: 20px;
    text-align: center;
    span {
      color: #f554b7;
      font-size: 25px;
      text-transform: uppercase;
      letter-spacing: 3px;
    }
  }
`;
export const Letters = styled.section`
  margin: 20px 10px 30px;
  border: 10px solid #f554b7;
  padding: 10px;
  display: flex;
  gap: 5px;

  span {
    font-weight: bold;
    font-size: 40px;
    background-color: white;
    border: 2px solid black;
    padding: 20px;
    text-transform: uppercase;
  }
`;
export const LettersContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;

  p {
    margin: 30px 20px 0 0;
  }

  input {
    width: 70px;
    height: 60px;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    border: 2px solid black;
  }

  Button {
    padding: 0px;
    width: 90px;
    height: 60px;
    border: 2px solid black;
  }
`;
export const AttemptsContainer = styled.section`
  color: white;
  display: flex;
  align-items: center;
  margin: 40px 0 0 0;

  p {
    font-weight: bold;
    padding: 20px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    border: 3px solid #be388b;
    padding: 10px;
  }
`;

export const WrongLetteresContainer = styled(AttemptsContainer)`
  margin-top: 0px;
  text-transform: uppercase;
`;
