import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;

  .select {
    width: 100%;
    .css-1s2u09g-control {
      border: none;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    }

    .css-1hb7zxy-IndicatorsContainer {
      span {
        background: none;
        padding-left: 0;
      }
      div {
        padding-left: 0;
      }
    }

    .css-qc6sy-singleValue {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--gray);
    }

    svg path {
      fill: var(--gray);
    }
  }

  button {
    background-color: var(--gray);
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 38px;
    height: 38px;
    border-radius: 0.8rem;
    transition: filter 0.2s;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

    &:hover {
      filter: brightness(0.9);
    }

    img {
      width: 100%;
    }
  }
`;
