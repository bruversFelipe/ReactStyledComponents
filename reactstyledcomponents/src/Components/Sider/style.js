import styled, { css } from "styled-components";

const SiderStyle = styled.div`
  ${props => {
    const {
      theme: { primary, gray }
    } = props;
    return css`
      background: ${primary};
      width: 225px;
      min-height: 100vh;
      box-shadow: 2px 4px 10px ${gray};
    `;
  }};
`;

export default SiderStyle;
