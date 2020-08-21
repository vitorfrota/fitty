import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header{
    border-bottom: 1px solid #eee;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    h3{
      text-transform: uppercase;
      color: #00CC69;
    }
  }

  .container-illustration {
    height: 250px;
    width: 250px;
    margin: 10px auto;
  }

  button {
    margin: 30px;
    margin-top: 0;
    padding: 16px 24px;
    border: none;
    border-radius: 8px;
    background: #00CC69;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
  }

  @media(max-width: 540px){
    border-radius: 0;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

  div{
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p{
    font-size: 16px;
    color: #333;
  }

  span{
      margin-top: 10px;
      font-size: 32px;
      font-weight: 500;
      color: #00CC69;
    }
`;
