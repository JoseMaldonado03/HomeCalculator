import { useState } from 'react';
import styled from 'styled-components';
import { ALT_COLOR } from '../colors';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { IoPeopleOutline } from 'react-icons/io5';

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
})``;

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

  border-bottom: 1px solid #fff;

  @media (min-width: 960px) {
    border: 0px;
  }
`;

function Form({ setLista, lista }) {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0);
  const [ctdPersonas, setCtdPersonas] = useState(1);

  function validacionDeCtdPersonas(e) {
    if (e.target.value < 1) return 1;

    setCtdPersonas(e.target.value);
  }

  function guardaInfo(e) {
    setLista([
      ...lista,
      {
        nombre,
        precio,
        ctdPersonas,
      },
    ]);
    setNombre('');
    e.preventDefault();
  }

  return (
    <Container>
      <FormText placeholder="Escriba el nombre del pago" value={nombre} onChange={(e) => setNombre(e.target.value)} />

      <FormGroup>
        <Icon>
          <RiMoneyDollarCircleLine />
        </Icon>
        <FormNumber value={precio} onChange={(e) => setPrecio(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <Icon>
          <IoPeopleOutline />
        </Icon>
        <FormNumber min={1} value={ctdPersonas} onChange={validacionDeCtdPersonas} />
      </FormGroup>

      <Button onClick={guardaInfo}>Guardar</Button>
    </Container>
  );
}

export default Form;
