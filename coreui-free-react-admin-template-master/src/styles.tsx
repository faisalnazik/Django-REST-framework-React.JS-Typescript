import { css } from "@emotion/core";
import { borderRadius, imageSize, grid } from "const";
import { N900 } from "utils/colors";

export const avatarStyles = css`
  height: 2rem;
  width: 2rem;
  font-size: 12px;
  margin-left: -4px;
`;

export const descriptionStyles = css`
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
