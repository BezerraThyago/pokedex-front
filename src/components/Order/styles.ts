import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.7rem;

  .order {
    .css-1s2u09g-control {
      border: none;
      background: transparent;
    }

    .css-1hb7zxy-IndicatorsContainer {
      span {
        background: none;
      }
    }
    svg path {
      fill: var(--dark-blue);
    }
  }

  .range {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    span {
      font-weight: 900;
      color: var(--dark-blue);
    }
    input {
      font-weight: 400;
      background: transparent;
      border-radius: 0.5rem;
      outline: 0;
      border: 1px solid var(--gray);
      font-size: 1rem;
      color: var(--dark-blue);
      width: 4rem;
      text-align: right;
      appearance: none;
      height: 2.71rem;
      padding: 0 1rem;
      -moz-appearance: textfield;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`;
