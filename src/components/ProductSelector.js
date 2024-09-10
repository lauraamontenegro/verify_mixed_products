import React from 'react';

function ProductSelector({ label, products, selectedProduct, onChange }) {
  return (
    <div className="form-group">
      <label className="text-pink">{label}</label>
      <select
        className="form-control form-control-lg"
        value={selectedProduct}
        onChange={e => onChange(e.target.value)}
      >
        <option value="">Selecione um produto</option>
        {products.map(product => (
          <option key={product} value={product}>{product}</option>
        ))}
      </select>
    </div>
  );
}

export default ProductSelector;