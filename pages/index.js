import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import WordGrid from "../components/WordGrid";

import rawWords from "../public/words.json";

export default function Home() {
  const [RIGHT_WORD] = useState(
    rawWords[Math.floor(Math.random() * rawWords.length)]
  );

  const handleWin = () => {
    alert("Congrats!");
  };

  const handleLoss = () => {
    console.log(RIGHT_WORD);
    alert("NICE TRY! Right word was: ", RIGHT_WORD);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Wordle</title>
        <meta name="description" content="Guess the word in 6 tries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <WordGrid
          RIGHT_WORD={RIGHT_WORD}
          handleWin={handleWin}
          handleLoss={handleLoss}
        />
      </main>
    </div>
  );
}
