import "./style.css";
import React, { Suspense } from "react";
import { Trans, useTranslation } from "react-i18next";

// Component using the Trans component - good to translate a JSX tree in one translation -> enables to easily translate text containing a link component or formattting like <strong>
const MyComponent = () => {
  return (
    <Trans i18nKey="description.part1">
      To get started, edit <code>src/App.js</code> and save to reload.
    </Trans>
  );
};

// page uses the hook - useTranslation hook function takes one options argument - either pass in a namespace or an array of namespaces to load
const Page = () => {
  const { t, i18n } = useTranslation(["translation", "common"]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <nav>
        <div class="nav-bar">
          <h1 class="logo">{t("logo")}</h1>
          <ul class="menu">
            <li>
              <a class="menu--item" href="./">
                {t("navigation.home")}
              </a>
            </li>
            <li>
              <a class="menu--item" href="./aboutProject.html">
                {t("navigation.aboutProject")}
              </a>
            </li>
            <li>
              <a class="menu--item" href="./aboutUs.html">
                {t("navigation.aboutUs")}
              </a>
            </li>
            <li>
              <button type="button" onClick={() => changeLanguage("cs")}>
                cs
              </button>
            </li>
            <li>
              {" "}
              <button type="button" onClick={() => changeLanguage("en")}>
                en
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="App-header"></div>
      <div className="App-intro">
        <MyComponent />
      </div>
      <div>{t("description.part2")}</div>
    </div>
  );
};

const Loader = () => {
  <div className="App">
    <div>loading...</div>
  </div>;
};

export const HomePage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
};
