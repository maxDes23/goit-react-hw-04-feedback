import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background-color: #af8c4c;
  color: white;
  padding: 15px 32px;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  border-style: none;
  transition: box-shadow 0.3s ease;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <StyledButton
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </StyledButton>
      ))}
    </div>
  );
};

export default Feedback;
