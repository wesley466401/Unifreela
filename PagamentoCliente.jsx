import React from 'react';
function PagamentoCliente() {
  return (
    <div className="p-4">
      <h2>Pagamento para Freelancer</h2>
      <p>Total: R$ 100,00</p>
      <p>Comissão (20%): R$ 20,00</p>
      <p>Freelancer receberá: R$ 80,00</p>
      <button className="bg-blue-500 text-white px-4 py-2">Pagar</button>
    </div>
  );
}
export default PagamentoCliente;