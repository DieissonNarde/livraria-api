import VendaRepository from '../repositories/venda.repository.js';

async function createVenda(venda) {
  return await VendaRepository.insertVenda(venda);
}

async function updateVenda(venda) {
  return await VendaRepository.updateVenda(venda);
}

async function deleteVenda(id) {
  await VendaRepository.deleteVenda(id);
}

async function getVendas() {
  return await VendaRepository.getVendas();
}

async function getVenda(id) {
  return await VendaRepository.getVenda(id);
}

export default {
  createVenda,
  getVendas,
  getVenda,
  deleteVenda,
  updateVenda,
};
