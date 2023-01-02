import React, { useState, useEffect } from 'react'
import data from '../data/db.json'

function KeyPad({ usedKeys }) {
    const [letters, setLetters] = useState(null)
    
    useEffect(() => {
        const json = data['letters']
        setLetters(json)
    }, [])

    return (
        <div className='keypad'>
            {letters && letters.map((l) => {
                const color = usedKeys[l.key]
                return (
                    <div className={color} key={l.key}>{l.key}</div>
                )
            })}
        </div>
    );
}

export default KeyPad;