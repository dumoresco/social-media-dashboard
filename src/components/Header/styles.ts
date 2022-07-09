import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  background: ${(props) => props.theme.colors.headerBg};
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px 30px;

  .menu {
    width: 80%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
      color: ${(props) => props.theme.colors.text};
      font-size: 2rem;
    }
    h2 {
      color: ${(props) => props.theme.colors.subtitle};
      font-size: 1rem;
    }
  }

  .theme-switcher {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
