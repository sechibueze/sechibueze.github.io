import styled from 'styled-components';
import { CARD_SHADOW } from 'constants/style.constant';
export const StyledWorkContainer = styled.div``;

export const StyledWork = styled.div`
  width: 100%;
  padding: 0.85rem;
  border-radius: 0.8rem;
  box-shadow: ${CARD_SHADOW};
  display: flex;
  gap: 1rem;
  flex-direction: column;

  > img {
    border-radius: 0.5rem;
    width: 100%;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;

    > h4 {
      font-family: 'font__bold';
      font-weight: bolder;
    }

    > a {
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.light};
      text-decoration: none;
      font-weight: bold;
      font-family: 'font__bold';
      font-size: 0.85rem;
      text-align: center;
      transition: all 0.5s;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.light};
      }
    }
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > img {
      width: 30%;
    }
    > div {
      width: 70%;
    }
  }
`;
