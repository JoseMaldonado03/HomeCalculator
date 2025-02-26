import numeral from 'numeral';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import { ALT_COLOR } from '../colors';

const Container = styled.div`
  margin-top: 16px;
`;

const Item = styled.div`
  border-bottom: 1px dashed ${ALT_COLOR};
  padding: 16px 0 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.p`
  font-size: 24px;
  margin: 0;
`;

const Valores = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 960px) {
    justify-content: space-between;
  }
`;

const Division = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: #6e6e6e;
  margin: 0;
  margin-right: 10px;

  @media (min-width: 960px) {
    font-size: 20px;
  }
`;

const Valor = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #000;
  margin: 0;

  @media (min-width: 960px) {
    font-size: 24px;
  }
`;

const Delete = styled.button`
  margin: 8px 0px 0px 8px;
  padding: 0px;
  background: transparent;
  border: 0px;
  cursor: pointer;
  font-size: 24px;
`;

function Lista({ lista }) {
  return (
    <Container>
      {lista.map((i, index) => (
        <Item key={`lista-item-${i.title}`}>
          <Title>
            {index + 1}. {i.title}
          </Title>
          <Valores>
            <Division>
              {numeral(i.precio).format('$ 0,0.00')} / {i.qtdPersonas} =
            </Division>
            <Valor>{numeral(i.precio / i.qtdPersonas).format('$ 0,0.00')}</Valor>
            <Delete>
              <IoClose />
            </Delete>
          </Valores>
        </Item>
      ))}
    </Container>
  );
}

export default Lista;
