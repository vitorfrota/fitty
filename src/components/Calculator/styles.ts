import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media(max-width: 540px){
    display: flex;
    flex-direction: column;
  }
`;
