import { useState, useContext } from 'react';
import styled from 'styled-components';

import Form from '../components/Form';
import Logo from '../components/Logo';
import Lista from '../components/Lista';

import { UserContext } from '../context/UserContext';
import UserModal, { Overlay } from '../components/UserModal';
import Result from '../components/Result';

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;
  font-size: 10px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserButton = styled.button`
  background: #984c22;
  color: #fff;
  border-radius: 16px;
  padding: 16px;
  font-weight: 500;
  border: 0px;
  transition:
    background-color 1s ease,
    color 1s ease;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background: rgb(90, 41, 14);
  }

  @media (min-width: 960px) {
    margin: 0px;
  }
`;

function Home() {
  const { showModal, setShowModal } = useContext(UserContext);

  return (
    <Container>
      <Header>
        <Logo />
        <UserButton onClick={() => setShowModal(true)}>Agregar Usuarios</UserButton>
      </Header>
      {showModal && (
        <>
          <Overlay />
          <UserModal />
        </>
      )}
      <Form />
      <Lista />
      <Result />
    </Container>
  );
}

export default Home;
