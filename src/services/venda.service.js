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

async function getVendas(clienteId, livroId, autorId) {
  if (clienteId) {
    return await VendaRepository.getVendasPorCliente(clienteId);
  } else if (livroId) {
    return await VendaRepository.getVendasPorLivro(livroId);
  } else if (autorId) {
    let vendasPorAutor = [];
    const livros = await LivroRepository.getLivrosPorAutor(autorId);
    console.log('livros ', livros);
    for (let i = 0; i < livros.length; i++) {
      vendasPorAutor.push(
        await VendaRepository.getVendasPorLivro(livros[i].livroId)
      );
    }
    return vendasPorAutor;
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
