import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.7rem;

  input {
    padding: 0 1.5rem;
    border-radius: 1rem;
    box-shadow: 0px 7px 14px -1px rgba(0, 0, 0, 0.12);
    width: 100%;
    border: none;
    color: var(--dark-blue);
    height: 5rem;

    &::placeholder {
      color: var(--gray);
      font-size: 1rem;
    }
  }

  button {
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    background-color: var(--red);
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 0.8rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    img {
      width: 100%;
    }
  }
`;
