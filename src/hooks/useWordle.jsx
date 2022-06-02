import { useState } from "react";

function useWordle(solution) {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState(['ninja']) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {
        console.log('formatting the guess -', currentGuess)
    }

    const addNewGuess = () => {

    }

    const handleKeyUp = ({ key }) => {

        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }

        if (key === 'Enter') {
            if (turn > 5) {
                console.log('u used all ur guesses')
                return
            }
            if (history.includes(currentGuess)) {
                console.log('you already tried that word')
                return
            }
            if (currentGuess.length !== 5) {
                console.log('word must be 5 chars long')
                return
            }
            formatGuess()
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyUp}

}

export default useWordle;