import styled from 'styled-components';

const MainText = styled.h2`
  text-align: center;
`


const Section = ({ title, children }) => {
  return (
    <div>
      <MainText>{title}</MainText>
      {children}
    </div>
  );
};

export default Section;
