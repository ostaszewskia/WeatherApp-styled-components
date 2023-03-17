import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BottomContainer,
  HeaderOne,
  Paragraph,
  ParagraphBold,
  TopContainer,
  TopContainerDescription,
  WeatherContainer,
  WeatherContainerCard,
  WeatherSearchBox,
  WeatherSearchContainer,
} from '../../styles/Weather.style';

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ed48e0a2f48b709b469d67876493f57d&lang=pl&units=metric`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  useEffect(() => {
    setLoading(true);
    const initialUrl = `https://api.openweathermap.org/data/2.5/weather?q=warszawa&appid=ed48e0a2f48b709b469d67876493f57d&lang=pl&units=metric`;

    axios.get(initialUrl).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setLoading(false);
  }, []);

  return (
    <WeatherContainer>
      <WeatherSearchContainer>
        <WeatherSearchBox
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          type='text'
          placeholder='Enter Location'
          onKeyPress={searchLocation}
        />
      </WeatherSearchContainer>
      <WeatherContainerCard>
        <TopContainer>
          <div>
            <Paragraph>{data?.name}</Paragraph>
          </div>
          <div>
            <HeaderOne>{data?.main?.temp.toFixed()}°C</HeaderOne>
          </div>
          <TopContainerDescription>
            {data.weather && <Paragraph>{data?.weather[0]?.description}</Paragraph>}
          </TopContainerDescription>
        </TopContainer>
        <BottomContainer>
          <div>
            <ParagraphBold>{data?.main?.feels_like.toFixed()}°C</ParagraphBold>
            <Paragraph>Feels Like</Paragraph>
          </div>
          <div>
            <ParagraphBold>{data?.main?.humidity}%</ParagraphBold>
            <Paragraph>Humidity</Paragraph>
          </div>
          <div>
            <ParagraphBold>{data?.wind?.speed.toFixed()} Km/h</ParagraphBold>
            <Paragraph>Wind Speed</Paragraph>
          </div>
        </BottomContainer>
      </WeatherContainerCard>
    </WeatherContainer>
  );
};

export default Weather;
