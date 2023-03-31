import ClienteRepository from '../repositories/cliente.repository.js';
import VendaRepository from '../repositories/venda.repository.js';

async function createCliente(cliente) {
  return await ClienteRepository.insertCliente(cliente);
}

async function updateCliente(cliente) {
  return await ClienteRepository.updateCliente(cliente);
}

async function deleteCliente(id) {
  const vendas = await VendaRepository.getVendasPorCliente(id);
  if (vendas) {
    throw new Error('O cliente possui vendas');
  }

  await ClienteRepository.deleteCliente(id);
}

async function getClientes() {
  return await ClienteRepository.getClientes();
}

async function getCliente(id) {
  return await ClienteRepository.getCliente(id);
}

export default {
  createCliente,
  getClientes,
  getCliente,
  deleteCliente,
  updateCliente,
};
