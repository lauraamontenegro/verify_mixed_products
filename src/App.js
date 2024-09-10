import React, { useState } from 'react';
import ProductSelector from './components/ProductSelector';
import ResultDisplay from './components/ResultDisplay';
import { checkMixSafety } from './utils'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';  

function App() {
  const [product1, setProduct1] = useState('');
  const [product2, setProduct2] = useState('');
  const [result, setResult] = useState(null);
  const products = ['Água Sanitária', 'Vinagre', 'Detergente', 'Álcool', 'Sabão Líquido'];

  const handleCheckMix = () => {
    const mixResult = checkMixSafety(product1, product2);
    setResult(mixResult);
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-header bg-pink text-white text-center">
          <h1>Verificador de Misturas de Produtos de Limpeza</h1>
        </div>
        <div className="card-body">
          <ProductSelector
            label="Selecione o primeiro produto"
            products={products}
            selectedProduct={product1}
            onChange={setProduct1}
          />
          <ProductSelector
            label="Selecione o segundo produto"
            products={products}
            selectedProduct={product2}
            onChange={setProduct2}
          />
          <div className="text-center my-4">
            <button className="btn btn-pink btn-lg" onClick={handleCheckMix}>
              Verificar Mistura
            </button>
          </div>
          {result && <ResultDisplay result={result} />}
        </div>
      </div>
    </div>
  );
}

export default App;