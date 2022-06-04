import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from "./grid"
import KeyPad from './keyPad';

function Wordle({ solution }) {

    const { currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        if (isCorrect) {
            console.log('congrats u win')
            window.removeEventListener('keyup', handleKeyUp)
        }
        
        if (turn > 5) {
            console.log('u lost');
            window.removeEventListener('keyup', handleKeyUp)
        }

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp, isCorrect, turn])

    return (<>
        <div>solution - {solution}</div>
        <div>current guess - {currentGuess}</div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <KeyPad usedKeys={usedKeys} />
    </>);
}

export default Wordle;