import VendaRepository from '../repositories/venda.repository.js';
import ClienteRepository from '../repositories/cliente.repository.js';
import LivroRepository from '../repositories/livro.repository.js';

async function createVenda(venda) {
  let error = '';
  if (!(await ClienteRepository.getCliente(venda.clienteId))) {
    error = 'O id do cliente informado não existe. ';
  }

  const livro = await LivroRepository.getLivro(venda.livroId);

  if (!livro) {
    error += 'O id do livro informado não existe.';
  }
  if (error) {
    throw new Error(error);
  }

  if (livro.estoque > 0) {
    venda.valor = livro.valor;
    venda.data = new Date();
    venda = await VendaRepository.insertVenda(venda);

    livro.estoque--;
    await LivroRepository.updateLivro(livro);
    return venda;
  } else {
    throw new Error('O livro informado não possui estoque.');
  }
}

async function updateVenda(venda) {
  return await VendaRepository.updateVenda(venda);
}

async function deleteVenda(id) {
  await VendaRepository.deleteVenda(id);
}

async function getVendas(clienteId) {
  if (clienteId) {
    return await VendaRepository.getVendasPorCliente(clienteId);
  }

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
