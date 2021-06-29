import styled from 'styled-components';
import Image from 'next/image';

export const PageContainer = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: rgba(37, 55, 70, 0.9);

  padding: 40px 120px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex: 1;
`;
export const BackgroundImage = styled(Image as any)`
  background: linear-gradient(180deg, rgba(37, 55, 70, 0) 0%, #253746 100%);
`;

export const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  margin-top: auto;
  margin-bottom: auto;
  padding: 20px 0;
`;

export const InputWrapper = styled.div`
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  input {
    border: none;
    background: #ffffff;
    border-radius: 4px;
    height: 42px;
    width: 60%;
    padding: 0 15px;
    font-size: 14px;
    font-family: 'Aller';
    font-weight: 400;

    @media (max-width: 950px) {
      width: 200px !important;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-family: 'Aller';
      color: #253746;
    }
  }

  button {
    border: none;
    background: #797f87;
    border-radius: 4px;
    height: 42px;
    width: 57px;
    margin-left: 5px;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: opacity 0.2 ease-in-out;
    font-family: 'Aller';
    font-weight: 700;
    font-size: 16px;

    &:hover {
      opacity: 0.8;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const PageTopContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  width: 50vw;

  @media (max-width: 600) {
    width: 100vw !important;
  }

  h1 {
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-family: 'Aller';
    font-size: 36px;
    width: 320px;
    text-align: center;
    font-weight: 700;
  }
`;

export const PageBottomContentWrapper = styled.div``;

export const PageImage = styled.img`
  z-index: 1000;

  @media (max-width: 1200px) {
    width: 950px;
  }

  @media (max-width: 950px) {
    width: 800px;
  }

  @media (max-width: 780px) {
    width: 700px;
  }

  @media (max-width: 680px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 100vw;
    margin-bottom: 50px;
  }
`;

export const CompanyLogo = styled.img`
  @media (max-width: 550px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
