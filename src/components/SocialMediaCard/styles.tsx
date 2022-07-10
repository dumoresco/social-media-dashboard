import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 8px;
  padding: 50px 10px;
  position: relative;
  transition: 0.5s background-color;
  &:hover {
    background-color: ${(props) => props.theme.colors.cardBgHover};
    cursor: pointer;
  }

  background-color: ${(props) => props.theme.colors.cardBg};

  .user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    span {
      margin-left: 10px;
      font-size: 13px;
      color: ${(props) => props.theme.colors.subtitle};
      font-weight: bold;
    }
  }

  .info-statistics {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .info-numbers {
      font-size: 64px;
      transition: 0.5s color;
      color: ${(props) => props.theme.colors.text};
      font-weight: bold;
    }

    .info-type {
      font-size: 15px;
      color: ${(props) => props.theme.colors.subtitle};
      text-transform: uppercase;
      opacity: 0.5;
      letter-spacing: 5px;
    }
  }

  .today-info-statistics {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 15px;
    color: hsl(163, 72%, 41%);

    &.negative {
      color: hsl(356, 69%, 56%);
    }
    font-weight: bold;

    img {
      margin-right: 10px;
    }
  }
`;

export const Border = styled.div`
  position: absolute;
  width: 100%;
  height: 5px;
  top: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &.instagram {
    background: linear-gradient(45deg, #fdc468, #df4996);
  }

  &.facebook {
    background: hsl(208, 92%, 53%);
  }

  &.twitter {
    background: hsl(203, 89%, 53%);
  }
  &.youtube {
    background: hsl(348, 97%, 39%);
  }
`;
