import LivroRepository from '../repositories/livro.repository.js';
import LivroInfoRepository from '../repositories/livroInfo.repository.js';
import VendaRepository from '../repositories/venda.repository.js';

async function createLivro(livro) {
  return await LivroRepository.insertLivro(livro);
}

async function updateLivro(livro) {
  return await LivroRepository.updateLivro(livro);
}

async function deleteLivro(id) {
  const vendas = await VendaRepository.getVendasPorLivro(id);
  if (vendas) {
    throw new Error('O livro possui vendas');
  }

  await LivroRepository.deleteLivro(id);
}

async function getLivros() {
  return await LivroRepository.getLivros();
}

async function getLivro(id) {
  return await LivroRepository.getLivro(id);
}

async function createLivroInfo(livroInfo) {
  await LivroInfoRepository.createLivroInfo(livroInfo);
}

async function updateLivroInfo(livroInfo) {
  await LivroInfoRepository.updateLivroInfo(livroInfo);
}

async function deleteLivroInfo(livroId) {
  await LivroInfoRepository.deleteLivroInfo(livroId);
}

async function createAvaliacao(avaliacao, livroId) {
  await LivroInfoRepository.createAvaliacao(avaliacao, livroId);
}

async function deleteAvaliacao(livroId, index) {
  await LivroInfoRepository.deleteAvaliacao(parseInt(livroId), index);
}

export default {
  createLivro,
  getLivros,
  getLivro,
  deleteLivro,
  updateLivro,
  createLivroInfo,
  updateLivroInfo,
  deleteLivroInfo,
  createAvaliacao,
  deleteAvaliacao,
};
