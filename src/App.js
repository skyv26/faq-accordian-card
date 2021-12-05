import React from "react";
import FaqTextContainer from "./components/FaqTextContainer/FaqTextContainer";
import FaqHead from "./components/FaqHead/FaqHead";
import FaqList from "./components/FaqList/FaqList";
import Card from "./UI/Card/Card";
import FaqHero from "./components/FaqHero/FaqHero";
import styles from "./App.module.css";
import Box from './assests/illustration-box-desktop.svg';

function App() {
  return (
    <div className={styles.Main}>
      <Card>
        <figure className={styles.BoxImage}>
          <img src={Box} alt="box illustration" />
        </figure>
        <FaqHero />
          <FaqTextContainer>
            <FaqHead />
            <FaqList />
          </FaqTextContainer>
      </Card>
    </div>
  );
}

export default App;
