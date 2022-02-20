import styled from "styled-components";

export const LoadingSpinner = styled.div `
  border: 10px solid #fff;
  border-top: 10px solid #000;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
`;