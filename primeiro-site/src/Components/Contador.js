import React, { useState } from 'react';

const Contador = () => {
    const [cont, setCont] = useState(0);

    const incrementar = () => {
        setCont(cont + 1);
    };

    const decrementar = () => {
        setCont(cont - 1);
    };

    return (
        <div>
            <h2>Contador: {cont}</h2>
            <button onClick={incrementar}>+1</button>
            <button 
                onClick={decrementar} 
                disabled={cont === 0} 
                style={{
                    backgroundColor: cont === 0 ? 'gray' : 'lightcoral', 
                    cursor: cont === 0 ? 'not-allowed' : 'pointer'
                }}
            >
                -1
            </button>
        </div>
    );
};

export default Contador;
