import styled from 'styled-components';

const MainText = styled.div`
  text-align: center;
`;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <MainText>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </MainText>
  );
};

export default Statistics;
