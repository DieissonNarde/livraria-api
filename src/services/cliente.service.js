import ClienteRepository from '../repositories/cliente.repository.js';

async function createCliente(cliente) {
  return await ClienteRepository.insertCliente(cliente);
}

async function updateCliente(cliente) {
  return await ClienteRepository.updateCliente(cliente);
}

async function deleteCliente(id) {
  await ClienteRepository.deleteCliente(id);
}

async function getClientes() {
  return await ClienteRepository.getAnimais();
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