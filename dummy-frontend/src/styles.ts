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

export const IsolatedListContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 1px;
  color: rgba(0, 0, 0, 0.5);
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    margin: 0 0 12px;
  }
  h2 {
    font-size: 20px;
    line-height: 24px;
    margin: 16px 0 8px;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    margin: 0 0 8px;
  }
  h3,
  h4,
  h5,
  h6 {
    font-size: 16px;
    line-height: 20px;
  }
  ol,
  ul {
    margin: 8px 0;
    padding: 0;

    margin-block-start: 0.25em;
    margin-block-end: 0.25em;
    padding-inline-start: 16px;
  }
  li {
    margin-bottom: 0;
  }
  p {
    margin: 0;
    margin-bottom: 10px;
    line-height: 20px;
  }
  pre {
    padding: 10px 16px;
    line-height: 16px;
  }
  code {
    font-size: 12px;
  }
  blockquote p {
    margin: 0;
  }
`;
