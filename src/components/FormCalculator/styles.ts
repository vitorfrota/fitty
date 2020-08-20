import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  height: 100%;
  background: #fff;
`;

export const Form = styled.form`
    div + div {
      margin: 30px 0;
    }

  button{
    padding: 16px 24px;
    width: 100%;
    border: none;
    border-radius: 8px;
    background: blue;
    color: #fff;
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
      height: 90px;
      width: 90px;
      border-radius: 8px;
      border: 2px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      & + li {
        margin-left: 20px;
      }
    }

    .active{
      border-color: blue;
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
      font-size: 26px;
      font-weight: bold;
      color: blue;
    }
  }

  input[type="range"]{
    margin-top: 20px;
  }
`;
