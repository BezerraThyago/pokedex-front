import styled from 'styled-components';

export const Container = styled.div`
  max-width: calc(33% - 15px);
  width: 100%;
  text-align: center;
  background-color: var(--white);
  padding: 3.75rem 1.5rem 1.5rem;
  border-radius: 1.5rem;
  height: 173px;
  position: relative;
  margin-top: 70px;
  box-shadow: 0px 7px 14px -1px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:last-of-type {
    margin-right: auto;
  }

  img {
    max-width: 80px;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }

  .number {
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0.7rem;
    color: var(--gray);
  }

  .name {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--dark-blue);
    text-transform: capitalize;
    margin-bottom: 0.7rem;
  }

  .types {
    display: flex;
    gap: 5px;
    justify-content: center;

    span {
      padding: 0.3rem 0.5rem;
      background-color: gray;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: capitalize;
      border-radius: 4px;
    }
  }
`;
