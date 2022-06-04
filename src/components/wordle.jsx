import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from "./grid"
import KeyPad from './keyPad';

function Wordle({ solution }) {

    const { currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys } = useWordle(solution)

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
        <KeyPad usedKeys={usedKeys} />
    </>);
}

export default Wordle;