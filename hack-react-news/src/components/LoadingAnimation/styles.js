import styled, { keyframes } from 'styled-components';

const blink = keyframes`

  0% {
    opacity: .15;
  }

  20% {
    opacity: 1;
  }

  100% {
    opacity: .15;
  }
`;

export const Animation = styled.div`
  text-align: center;

  span {
    color: ${({ theme }) => theme.textSecondary};
    display: inline-block;
    font-size: 83px;
    line-height: 0.1;
    margin-left: 6px;
    margin-right: 6px;

    animation-name: ${blink};
    animation-duration: .5s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
