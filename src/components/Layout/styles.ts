import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;

  header{
    color: #fff;
    padding-top: 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 100px;

  @media (max-width: 540px){
    margin-top: 10px;
  }
`;
