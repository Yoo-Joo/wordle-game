import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle';
import Grid from "./grid";

function Wordle({ solution }) {

    const { currentGuess, handleKeyUp, guesses, isCorrect, history, turn } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp])

    useEffect(() => {
        console.log(guesses, turn, isCorrect);
    }, [guesses, turn, isCorrect])

    return (<>
        <div>solution - {solution}</div>
        <div>current guess - {currentGuess}</div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </>);
}

export default Wordle;