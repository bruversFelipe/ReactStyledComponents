import styled, { css } from "styled-components";

const HeaderStyle = styled.div`
  ${props => {
    const {
      theme: { header, gray }
    } = props;

    return css`
      background: ${header};
      width: 100%;
      height: 64px;
      display: flex;
      justify-content: flex;
      align-items: center;
      padding: 10px;
      box-shadow: 2px 4px 10px ${gray};

      h1 {
        font-weight: 300;

        span {
          font-weight: 500;
        }
      }
    `;
  }}
`;

export default HeaderStyle;
