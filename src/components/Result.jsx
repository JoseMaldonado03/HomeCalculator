import { useContext } from 'react';
import styled from 'styled-components';
import numeral from 'numeral';
import { BUTTON_COLOR } from '../colors';
import { ItemContext } from '../context/ItemContext';
import { UserContext } from '../context/UserContext';

const Container = styled.div`
  background: ${BUTTON_COLOR};
  padding: 16px;
  color: #fff;
  margin-top: 50px;
  border-radius: 16px;
`;

const Total = styled.p`
  font-size: 28px;
  margin: 0px;
  font-weight: bold;
`;

const Item = styled.div`
  border-bottom: 1px dashed #fff;
  padding: 16px 0 0;
  display: flex;
  flex-direction: column;
  font-size: 20px;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Name = styled.div``;

const TotalPago = styled.div`
  font-weight: bold;
`;

export default function Result() {
  const { getTotal, getTotalByUser } = useContext(ItemContext);
  const { users } = useContext(UserContext);

  if (getTotal() === 0) {
    return <></>;
  }

  return (
    <Container>
      <Total>Total: {numeral(getTotal()).format('$ 0,0.00')}</Total>

      {users.map((user, userIndex) => (
        <Item>
          <Name>
            {userIndex + 1}. {user}
          </Name>
          <TotalPago>{numeral(getTotalByUser(userIndex)).format('$ 0,0.00')}</TotalPago>
        </Item>
      ))}
    </Container>
  );
}
