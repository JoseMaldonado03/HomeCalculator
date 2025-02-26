import { useState, useContext } from 'react';
import styled from 'styled-components';
import { ALT_COLOR } from '../colors';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { IoPeopleOutline } from 'react-icons/io5';
import { UserContext } from '../context/UserContext';
import { ItemContext } from '../context/ItemContext';

const Container = styled.div`
  background: ${ALT_COLOR};
  padding: 10px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FormText = styled.input`
  border: 0px;
  background: transparent;
  padding: 16px;
  color: #fff;
  width: 100%;

  &::placeholder {
    color: #fff;
    opacity: 60%;
  }

  &:focus {
    outline: 0px;
  }

  @media (min-width: 960px) {
    border-right: 1px solid #fff;
    margin-right: 16px;
  }
`;

const FormNumber = styled(FormText).attrs({
  type: 'number',
  min: 0,
})`
  font-size: 20px;
`;

const FormGroupNumber = styled.div`
  border: 0px;
  background: transparent;
  padding: 16px;
  color: #fff;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  font-size: 20px;

  &::placeholder {
    color: #fff;
    opacity: 60%;
  }

  &:focus {
    outline: 0px;
  }

  @media (min-width: 960px) {
    border-right: 0;
    margin-right: 16px;
  }
`;

const Button = styled.button`
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

const Icon = styled.div`
  font-size: 21px;
  color: #fff;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  border-bottom: 1px solid #fff;

  @media (min-width: 960px) {
    border: 0px;
  }
`;

const UserPicker = styled.div`
  background: #fff;
  padding: 8px;
  position: absolute;
  top: 48px;
  left: 0;
  min-width: 200px;

  @media (min-width: 960px) {
    top: 58px;
    left: -16px;
    min-width: 120px;
  }
`;

const UserPickerItem = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
`;

const UserPickerToggle = styled.input.attrs({
  type: 'checkbox',
})``;

function Form() {
  const [title, setTitle] = useState('');
  const [precio, setPrecio] = useState(0);
  const [personas, setPersonas] = useState([]);
  const [showUserPicker, setShowUserPicker] = useState(false);

  const { addItem } = useContext(ItemContext);
  const { users } = useContext(UserContext);

  function guardaInfo(e) {
    addItem({
      title,
      precio: parseInt(precio),
      personas,
    });
    setTitle('');
    e.preventDefault();
  }

  const toggleUser = (userIndex) => {
    const userExistsInTheList = personas.findIndex((el) => userIndex == el);

    if (userExistsInTheList >= 0) {
      return setPersonas(personas.filter((i) => i != userIndex));
    }

    return setPersonas([...personas, userIndex]);
  };

  return (
    <Container>
      <FormText placeholder="Escriba el nombre del pago" value={title} onChange={(e) => setTitle(e.target.value)} />

      <FormGroup>
        <Icon>
          <RiMoneyDollarCircleLine />
        </Icon>
        <FormNumber value={precio} onChange={(e) => setPrecio(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <Icon onClick={() => setShowUserPicker(!showUserPicker)}>
          <IoPeopleOutline />
        </Icon>
        <FormGroupNumber onClick={() => setShowUserPicker(!showUserPicker)}>{personas.length}</FormGroupNumber>

        {showUserPicker && (
          <UserPicker>
            {users.map((u, index) => (
              <UserPickerItem key={`form-userpickeritem-${index}`}>
                <UserPickerToggle onChange={() => toggleUser(index)} checked={personas.find((i) => i == index) >= 0} />{' '}
                {u}
              </UserPickerItem>
            ))}
            {users.length === 0 && <p>Oprima Agregar usuario para añadir.</p>}
          </UserPicker>
        )}
      </FormGroup>

      <Button onClick={guardaInfo}>Guardar</Button>
    </Container>
  );
}

export default Form;
