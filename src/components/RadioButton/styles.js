import styled from 'styled-components';

import colors from '../../themes/colors';

export const Container = styled.fieldset`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  border: none;

  display: flex;
  flex-direction: row;
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

    span{
      margin-left: 10px;
    }
  }
`;

export const RadioHTML = styled.input`
  display: flex;
  width: 100%;
  height: 20px;
  padding: 6px 8px;

  border: 1px solid ${colors.greyWhite};

  flex: 1;

  @media (max-width: 1024px) {
    height: 65px;
  }
`;
