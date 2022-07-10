import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 8px;
  padding: 30px 20px;
  position: relative;
  transition: 0.5s background-color;
  &:hover {
    background-color: ${(props) => props.theme.colors.cardBgHover};
    cursor: pointer;
  }

  background-color: ${(props) => props.theme.colors.cardBg};

  .user-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;

    span {
      font-size: 15px;
      color: ${(props) => props.theme.colors.subtitle};
      font-weight: bold;
    }
  }

  .today-info-statistics {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 15px;
    color: hsl(163, 72%, 41%);

    &.negative {
      color: hsl(356, 69%, 56%);
    }
    font-weight: bold;

    .info-numbers {
      font-size: 30px;
      transition: 0.5s color;
      color: ${(props) => props.theme.colors.text};
      font-weight: bold;
    }

    .info-type {
      font-size: 25px;
      color: ${(props) => props.theme.colors.subtitle};
      text-transform: uppercase;
      opacity: 0.5;
      letter-spacing: 5px;
    }

    .today-numbers {
      margin-left: 5px;
    }
  }

  .percent {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
