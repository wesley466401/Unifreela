import React, { useState } from 'react';
function SaquePix() {
  const [chavePix, setChavePix] = useState('');
  return (
    <div className="p-4">
      <h2>Saque via PIX</h2>
      <input placeholder="Chave PIX" onChange={e => setChavePix(e.target.value)} className="block my-2" />
      <button className="bg-green-500 text-white px-4 py-2">Solicitar Saque</button>
    </div>
  );
}
export default SaquePix;