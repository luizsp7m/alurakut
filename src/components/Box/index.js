import styled from 'styled-components';

const Box = styled.div`
  background: ${props => props.theme.boxBackgroundColor};
  transition: background .25s;
  border-radius: 8px;
  padding: 16px;
  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }

  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
    color: ${props => props.theme.boxTitleColor};
    transition: color .25s;
  }

  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    color: ${props => props.theme.boxTitleColor};
    transition: color .25s;
  }
  
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme.boxSmallTitle};
    transition: color .25s;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background: ${props => props.theme.boxInputColor};
    transition: all .25s;
    color: ${props => props.theme.boxInputTextColor};
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: ${props => props.theme.boxInputTextColor};
      transition: color .25s;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 10px 16px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #6F92BB;
  }
`; 

export default Box