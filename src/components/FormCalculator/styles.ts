import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  height: 100%;
  background: #fff;
  border-radius: 8px;

  @media(max-width: 540px){
    border-radius: 0;
  }
`;

export const Form = styled.form`
    div + div {
      margin: 30px 0;
    }

    label{
      color: #333;

      strong {
        color: #00CC69;
      }
    }

  button{
    padding: 16px 24px;
    width: 100%;
    border: none;
    border-radius: 8px;
    background: #00CC69;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const Gender = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

    li{
      background: #f5f5f5;
      border: 2px solid #f5f5f5;
      height: 120px;
      width: 120px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      & + li {
        margin-left: 20px;
      }
    }

    .active{
      border-color: #00CC69;
    }
`;

export const Range = styled.div`
  display: flex;
  flex-direction: column;

  label{
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    span{
      font-size: 28px;
      font-weight: 500;
      color: #00CC69;
    }
  }

  input[type="range"]{
    margin-top: 20px;
  }
`;
