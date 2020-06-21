import styled from "styled-components"

import { Props } from "."

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.isHome ? "var(--rocketseat)" : "var(--primary)"};
  cursor: pointer;
  position: relative;

  img {
    height: 24px;
    width: 24px;
  }

  &::before {
    content: "";
    height: 9px;
    width: 9px;
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
    background-color: var(--white);
    border-radius: 50%;
    display: ${(props) => (props.hasNotifications ? "inline" : "none")};
  }

  &::after {
    content: "${(props) => props.mentions && props.mentions}";
    background-color: var(--notification);
    width: auto;
    height: 25px;
    padding: 0 4px;
    position: absolute;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    text-align: right;
    font-size: 14px;
    font-weight: bold;
    color: var(--white);
    display: ${(props) =>
      props.mentions && props.mentions > 0 ? "inline" : "none"};
  }

  transition: border-radius 350ms, background-color 350ms;
  &.active,
  &:hover {
    border-radius: 15px;
    background-color: ${(props) =>
      props.isHome ? "var(--rocketseat)" : "var(--discord)"};
  }
`
