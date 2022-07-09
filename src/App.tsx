import React from "react";

import { ThemeProvider } from "styled-components";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import usePersistedState from "./utils/usePersistedState";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import SocialMediaCard from "./components/SocialMediaCard";

import facebookIcon from "./images/icon-facebook.svg";
import instagramIcon from "./images/icon-instagram.svg";
import twitterIcon from "./images/icon-twitter.svg";
import youtubeIcon from "./images/icon-youtube.svg";

import arrowUp from "./images/icon-up.svg";
import arrowDown from "./images/icon-down.svg";

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header toggleTheme={toggleTheme} />
        <div className="container">
          <div className="cards-container">
            <SocialMediaCard
              borderClassName="facebook"
              username="dumoresco"
              iconName={facebookIcon}
              arrowIcon={arrowUp}
              infoType="followers"
              todayTotal={54}
              total={1242}
            />
            <SocialMediaCard
              borderClassName="twitter"
              username="dumoresco"
              iconName={twitterIcon}
              arrowIcon={arrowDown}
              infoType="followers"
              todayTotal={2}
              total={104}
              infoClassName="negative"
            />
            <SocialMediaCard
              borderClassName="instagram"
              username="dumoresco"
              iconName={instagramIcon}
              arrowIcon={arrowUp}
              infoType="followers"
              todayTotal={12}
              total={467}
            />
            <SocialMediaCard
              borderClassName="youtube"
              username="dumoresco"
              iconName={youtubeIcon}
              arrowIcon={arrowDown}
              infoType="subscribers"
              todayTotal={5}
              total={635}
              infoClassName="negative"
            />
          </div>
        </div>

        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

export default App;
