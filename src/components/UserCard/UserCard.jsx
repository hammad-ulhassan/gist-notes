
import styled from 'styled-components';
import { Card as AntCard } from "antd";


const UserCard = styled(AntCard).attrs(({size})=>({size: size}))`
  max-width: 28rem;
  max-height: 22rem;
  min-height: 22rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.25rem var(--gray);
`;

export default UserCard;
