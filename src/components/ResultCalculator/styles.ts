import styled from 'styled-components';

interface Bar {
  progress: number;
  bgColor: string;
}

export const Container = styled.div`
  background: #fff;
  width: 100%;
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

  .btn-outline {
    background: none;
    color: #00CC69;
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

    .group-buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    @media (max-width: 540px){
      .group-buttons {
        flex-direction: column;
      }
    }
`;

export const Bar = styled.div<Bar>`
  width: 50%;
  margin: 0 auto;
  height: 15px;
  border-radius: 10px;
  background: #f5f5f5;

  .progress-bar{
    width: ${(props) => props.progress}%;
    max-width: 100%;
    height: 100%;
    background: ${(props) => props.bgColor};
    border-radius: 10px;
  }

  @media (max-width: 540px){
    width: 75%;
  }
`;
