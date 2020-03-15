import styled from "styled-components";

import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export const UploadButton = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  justify-self: center;
  width: 80px;
  background-color: #0277bd;
  border-width: 0;
  height: 35px;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  margin: 15px;
  &:hover {
    background-color: ${darken(0.05, '#0277bd')};
  }
  &:active {
    background-color: #0277bd;
  }
`;
