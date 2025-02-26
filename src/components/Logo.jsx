import styled from 'styled-components';
import { ALT_COLOR } from '../colors';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import UserModal, { Overlay } from '../components/UserModal';

const Container = styled.div`
  margin: 30px;
`;

const BackgroundBall = styled.div`
  background: ${ALT_COLOR};
  width: 88px;
  height: 88px;
  border-radius: 44px;
`;

const Title = styled.p`
  font-size: 34px;
  margin-left: -30px;

  strong {
    display: block;
  }
`;

function Logo() {
  const { showModal, setShowModal } = useContext(UserContext);

  return (
    <Container>
      <BackgroundBall>
        <Title>
          home
          <strong>Calculator</strong>
        </Title>
      </BackgroundBall>

      <button onClick={() => setShowModal(true)}>add user</button>

      {showModal && (
        <>
          <Overlay />
          <UserModal />
        </>
      )}
    </Container>
  );
}

export default Logo;
