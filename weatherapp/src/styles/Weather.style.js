import styled from 'styled-components';

export const WeatherContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh; */
  width: 100%;
  height: 100vh;
  position: relative;
  /* border: 1px solid black; */
`;

export const WeatherContainerCard = styled.div`
  padding: 0 1rem;
  max-width: 700px;
  height: 700px;
  margin: auto;
  position: relative;
  top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

export const Paragraph = styled.p`
  font-size: 1.6rem;
`;

export const ParagraphBold = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const HeaderOne = styled.h1`
  font-size: 6rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 12px;
  background-color: rgba(253, 184, 19, 0.2);
`;

export const TopContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
`;

export const TopContainerDescription = styled.div`
  position: relative;
  right: -90%;
  transform-origin: 0 0;
  transform: rotate(270deg);
`;

export const WeatherSearchBox = styled.input`
  padding: 0.7rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 25px;
  border: 1px solid rgba(253, 184, 19, 0.8);
  background: rgba(253, 184, 19, 0.1);
`;

export const WeatherSearchContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;
