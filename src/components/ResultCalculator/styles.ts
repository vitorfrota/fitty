import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 100%;
  border: 1px solid #eee;
  border-radius: 8px 0 0 8px;
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
    height: 200px;
    width: 200px;
    margin: 20px auto;

    img {
      width: 100%;
      height: 100%;
    }
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
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p{
    font-size: 16px;
  }

  span{
      font-size: 26px;
      font-weight: bold;
      color: #00CC69;
    }
`;
