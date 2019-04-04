import styled, { css } from "styled-components";

const ConfigThemeStyle = styled.div`
  ${props => {
    const {
      theme: { primary }
    } = props;

    return css`
      position: absolute;
      right: 0;
      top: 200px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      background: ${primary};
    `;
  }}
`;

export default ConfigThemeStyle;
