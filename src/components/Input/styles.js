import styled from 'styled-components';

import colors from '../../themes/colors';

export const Container = styled.fieldset`
  border: none;
  width: ${({ width }) => (width ? `${width}px` : '100%')};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  label {
    margin-top: 1rem;
    margin-bottom: 0.2rem;

    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${colors.eightGrey};

    @media (max-width: 1024px) {
      font-size: 30px;
    }
  }

  span{
      font-weight: 400;
    }
`;

export const InputHTML = styled.input`
  width: 100%;
  height: 35px;
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid ${colors.greyWhite};

  @media (max-width: 1024px) {
    height: 65px !important;
  }
`;
