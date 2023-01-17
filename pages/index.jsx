import Head from 'next/head';
import React, { useState, useEffect } from 'react';

function Home() {
  const [text, setText] = useState('');
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  var [time, setTime] = useState(60000 / 300);
  const [timerIds, setTimerIds] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === 'Enter') {
      splitWords();
      handleWord();
    }
  }

  const handleWord = () => {
    for (let i = 0; i < words.length; i++) {
      const timerId = setTimeout(() => {
        setCurrentWord(words[i]);
      }, time * i);
      setTimerIds((prevTimerIds) => [...prevTimerIds, timerId]);
    }
  }

  const handleReset = () => {
    timerIds.forEach((id) => clearTimeout(id));
    setTimerIds([]);
    setText('');
    setWords([]);
    setCurrentWord('');
  }

  const splitWords = () => {
    //split text into words and separate them by a space or a new line
    setWords(text.split(/[\s ]+/));
  }

  const handleWPM = (e) => {
    setTime(60000 / e.target.value);
    if (e.key === 'Enter') {
      splitWords();
      handleWord();
    }
  }

  useEffect(() => {
    console.log(time);
  }, [time]);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Hyper Text, a new way to read" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-screen h-screen bg-zinc-900 flex justify-center items-center flex-col'>
        {currentWord ? (
          <div className='flex flex-col items-center gap-5'>
            <span className='md:text-9xl text-6xl text-gray-200'>{currentWord}</span>
            <button
              className='bottom-10 absolute'
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        ) : (
          <>
            <textarea
              placeholder="Type your text"
              name="text"
              id=""
              className='input h-72 w-full max-w-5xl text-gray-900'
              onChange={handleChange}
              onKeyPress={handleChange}
            />

            <input
              type="text"
              name="text"
              className="wpm bottom-10 absolute"
              placeholder="How many words per minute?"
              onChange={handleWPM}
              onKeyPress={handleWPM}
            />
          </>
        )}
      </main>
    </>
  );
}

export default Home;
