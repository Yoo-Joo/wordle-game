import React from 'react'
import Row from "./row";

function Grid({ currentGuess, guesses, turn }) {
    return (
        <div>
            {guesses.map((g, i) => {
                return <Row key={i} />
            })}
        </div>
    );
}

export default Grid;