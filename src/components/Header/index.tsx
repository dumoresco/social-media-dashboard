import React, { useContext } from "react";

import Switch from "react-switch";

import { ThemeContext } from "styled-components";

import { shade } from "polished";

import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <div className="menu">
        <div>
          <h1>Social Media Dashboard</h1>
          <h2>Total followers: 23,004</h2>
        </div>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={30}
          width={60}
          handleDiameter={22}
          offColor={shade(0.15, colors.toggle)}
          onColor={colors.toggle}
          spellCheck={true}
        />
      </div>
    </Container>
  );
};

export default Header;
