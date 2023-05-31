import React, { useState } from 'react';
import topics from './english';

const Topics = () =>{
    const [index, setIndex] = useState(0);
    const { question } = topics[index];

    const checkNumber = (number) => {
        if (number > topics.length - 1) {
          return 0;
        }
        if (number < 0) {
          return topics.length - 1;
        }
        return number;
    };


    const randomTopics = () => {
        let randomNumber = Math.floor(Math.random() * topics.length);
        if (randomNumber === index) {
          randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    return(
    <>
      <article className='review'>
        <h3 className='info'>{question}</h3>
        <button className='random-btn' onClick={randomTopics} >
          Next Topic
        </button>
      </article>
    </>
    
    )

}

export default Topics;