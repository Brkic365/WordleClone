import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/WordGrid.module.scss";

import rawWords from "../public/words.json";

function WordGrid({ RIGHT_WORD, handleWin, handleLoss }) {
  const [currentRow, setCurrentRow] = useState(0);
  const [input, setInput] = useState(null);
  const [words, setWords] = useState([]);
  const [colors, setColors] = useState([]);

  const inputTxt = useRef(null);

  const finish = (correct) => {
    inputTxt.current.blur();

    if (correct === 5) {
      handleWin();
    } else {
      handleLoss();
    }
  };

  const handleGuess = () => {
    // Compare
    const right_letters = RIGHT_WORD.split("");
    const input_letters = input.split("");

    let current_colors = [];
    let used_indexes = [];

    let correct = 0;

    input_letters.forEach((input_letter, i) => {
      let right_index = right_letters.indexOf(input_letter.toLowerCase());

      if (right_index === i) {
        current_colors.push("#6AAA64");
        correct++;
        used_indexes.push(right_index);
      } else if (right_index !== -1 && !used_indexes.includes(right_index)) {
        current_colors.push("#C9B458");
      } else {
        current_colors.push("#787C7E");
      }
    });

    setColors((prev) => [...prev, current_colors]);

    if (correct === 5 || currentRow === 5) {
      finish(correct);
    }

    // Cleanup
    setWords((prev) => [...prev, input]);
    setInput(null);
    inputTxt.current.value = "";
    setCurrentRow((prev) => prev + 1);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value.toUpperCase());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input.length === 5 && rawWords.includes(input.toLowerCase())) {
        handleGuess();
      }
    }
  };

  useEffect(() => {
    inputTxt.current.focus();
  });

  return (
    <main className={styles.wordGrid}>
      <input
        style={{ opacity: 0 }}
        onBlur={() => inputTxt.current.focus()}
        ref={inputTxt}
        maxLength={5}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      {
        // Map through an array of 6 elements, and display a row each time

        [...Array(6).keys()].map((i) => {
          return (
            <section className={styles.wordRow} key={i}>
              {
                // Map through an array of 5 elements, and display a box each time

                [...Array(5).keys()].map((j) => {
                  let letter = "";
                  let backgroundColor = "white";
                  let borderColor = "rgba(0, 0, 0, 0.5)";
                  let color = "black";

                  if (i === currentRow) {
                    if (input && input[j]) {
                      letter = input[j];
                    }
                  } else if (i < currentRow) {
                    letter = words[i][j];
                    backgroundColor = colors[i][j];
                    borderColor = "transparent";
                    color = "white";
                  }

                  return (
                    <section
                      className={styles.letterBox}
                      key={j}
                      style={{ backgroundColor, borderColor, color }}
                    >
                      <h3>{letter}</h3>
                    </section>
                  );
                })
              }
            </section>
          );
        })
      }
    </main>
  );
}

export default WordGrid;
