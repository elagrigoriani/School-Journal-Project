import styled, { css } from "styled-components";
export const SChooseWeek = styled.div`
  border: solid 1px #4169e1;
  padding: 12px;
  margin: 12px;
  gap: 12px;
  display: inline-flex;
`;

export const SChooseWeekButton = styled.button`
  cursor: pointer;
  padding: 12px;
  border: solid 1px #4169e1;
  background-color: transparent;
  border-radius: 12px;
  color: #4169e1;
  font-weight: bold;
  font-size: 16px;

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: #4169e1;
          color: white;
        `
      : ""}
`;
