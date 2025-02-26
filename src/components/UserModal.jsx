import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { BUTTON_COLOR } from '../colors';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  left: 0;
  top: 0;
  z-index: 1;
`;

const Container = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 16px;
  position: fixed;
  width: 300px;
  left: 50%;
  margin-left: -150px;
  top: 100px;
  z-index: 2;
`;

const Title = styled.div`
  font-size: 26px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Close = styled.button`
  background: transparent;
  border: 0px;
  cursor: pointer;
  font-size: 24px;
`;

const Form = styled.div`
  background: ${BUTTON_COLOR};
  padding: 6px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: 0px;
  color: #fff;

  &::placeholder {
    color: #fff;
    opacity: 60%;
  }

  &:focus {
    outline: none;
  }
`;

const Submit = styled.button`
  border-radius: 8px;
  border: 0px;
  cursor: pointer;
  background: #3e6347;
  color: #fff;
  padding: 6px 10px;
  transition:
    background-color 1s ease,
    color 1s ease;

  &:hover {
    background: rgb(32, 57, 39);
  }
`;

const Item = styled.div`
  border-bottom: 1px dashed ${BUTTON_COLOR};
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  font-size: 16px;
`;

const Borrar = styled.button`
  background: transparent;
  border: 0px;
  cursor: pointer;
  font-size: 16px;
`;

function UserModal() {
  const { setShowModal, addUser, removeUser, users } = useContext(UserContext);
  const [userName, setUserName] = useState('');

  return (
    <Container>
      <Title>
        Registro de usuario
        <Close onClick={() => setShowModal(false)}>
          <IoClose />
        </Close>
      </Title>

      <Form>
        <Input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Escriba el nombre del usuario"
        />
        <Submit
          onClick={() => {
            addUser(userName);
            setUserName('');
          }}
        >
          guardar
        </Submit>
      </Form>

      {users.map((u, index) => (
        <Item key={`usermodel-item-${index}-${u}`}>
          {index + 1}. {u}
          <Borrar onClick={() => removeUser(index)}>
            <IoClose />
          </Borrar>
        </Item>
      ))}
    </Container>
  );
}

export default UserModal;
