import React from 'react';

function ResultDisplay({ result }) {
  return (
    <div>
      <h2>Resultado da Mistura</h2>
      <p>{result.safe ? 'A mistura é segura.' : 'A mistura NÃO é segura.'}</p>
      <p>{result.explanation}</p>
    </div>
  );
}

export default ResultDisplay;