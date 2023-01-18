import FloatingButton from '@/components/floatingButton';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';

import demo from '../components/info';

function Home() {

  const [text, setText] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  var [time, setTime] = useState(60000 / 300);
  const [timerIds, setTimerIds] = useState([]);

  useEffect(() => {
    console.log('text changed');
    const keyPressHandler = (e) => {
      if (e.key === 'Enter') {
        console.log('enter pressed');
        getCurrentWord();
      }
    };
    document.addEventListener('keypress', keyPressHandler);
    return () => {
      document.removeEventListener('keypress', keyPressHandler);
    }
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const splitWords = () => {

    var words = text.split(' ');
    console.log(words);

    words.forEach((word, index) => {
      const timerId = setTimeout(() => {
        setCurrentWord(word);
        console.log(word);
      }, time * index);
      setTimerIds((timerIds) => [...timerIds, timerId]);
    });

  }

  function getCurrentWord() {
    splitWords();
  }


  const handleDemo = () => {
    const textarea = document.getElementById('textarea');
    textarea.value = demo;
    setText(demo);
  }

  const handleReset = () => {
    timerIds.forEach((id) => clearTimeout(id));
    setTimerIds([]);
    setText('');
    setCurrentWord('');
  }

  const handleWPM = (e) => {
    setTime(60000 / e.target.value);
    console.log(e.target.value);
  }
  
  return (
    <>
      <Head>
        <title>Hyper Text</title>
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
              id="textarea"
              className='input h-72 w-full max-w-5xl text-gray-900'
              onChange={handleChange}
              onKeyPress={handleChange}
            />

            <div className='bottom-10 absolute flex gap-5'>
              <input
                type="text"
                name="text"
                className="wpm"
                placeholder="How many words per minute?"
                onChange={handleWPM}
                onKeyPress={handleWPM}
                value={60000 / time}
              />
              <button
                onClick={handleDemo}
              >
                Demo
              </button>
            </div>
            <FloatingButton onClick={getCurrentWord}/>
          </>
        )}
      </main>
    </>
  );
}

export default Home;
