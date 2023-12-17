import styled from 'styled-components';

const MainText = styled.h2`
  text-align: center;
`;

const Notification = ({ message }) => (
    <MainText>{message}</MainText>
); 



export default Notification;
