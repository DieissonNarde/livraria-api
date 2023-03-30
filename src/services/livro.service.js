import LivroRepository from '../repositories/livro.repository.js';

async function createLivro(livro) {
  return await LivroRepository.insertLivro(livro);
}

async function updateLivro(livro) {
  return await LivroRepository.updateLivro(livro);
}

async function deleteLivro(id) {
  await LivroRepository.deleteLivro(id);
}

async function getLivros() {
  return await LivroRepository.getAnimais();
}

async function getLivro(id) {
  return await LivroRepository.getLivro(id);
}

export default {
  createLivro,
  getLivros,
  getLivro,
  deleteLivro,
  updateLivro,
};
