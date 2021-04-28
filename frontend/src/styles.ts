import styled from "styled-components";

// BackGroudColors = 0b1a21 Primary , 324048 Light , 001624 Dark
// Text colors = fffff0 light

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`;

export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

export const DataListContainer = styled.div`
  background-color: #ebecf0;
  width: 900px;
  min-height: 400px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`;
