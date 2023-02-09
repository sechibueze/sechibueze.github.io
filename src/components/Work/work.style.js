import styled from 'styled-components';
import { CARD_SHADOW } from 'constants/style.constant';
export const StyledWorkContainer = styled.div``;

export const StyledWork = styled.div`
  width: 100%;
  padding: 0.85rem;
  border-radius: 0.8rem;
  box-shadow: ${CARD_SHADOW};
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;

    > a {
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      background: blueviolet;
      color: aliceblue;
      text-decoration: none;
      font-weight: bold;
      font-family: 'font__medium';
      font-size: 0.85rem;
      text-align: center;
    }
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
