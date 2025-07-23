import React from 'react';
const user = JSON.parse(localStorage.getItem('user'));

function Painel() {
  if (!user) return <div>Não autenticado.</div>;
  if (user.tipo === 'freelancer') return <div>Área do Freelancer - saldo, saque PIX</div>;
  if (user.tipo === 'cliente') return <div>Área do Cliente - contratar serviço, pagar</div>;
  if (user.tipo === 'admin') return <div>Painel Administrativo - comissões, saque da plataforma</div>;
}
export default Painel;