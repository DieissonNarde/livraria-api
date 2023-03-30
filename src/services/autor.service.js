import AutorRepository from '../repositories/autor.repository.js';

async function createAutor(autor) {
  return await AutorRepository.insertAutor(autor);
}

async function updateAutor(autor) {
  return await AutorRepository.updateAutor(autor);
}

async function deleteAutor(id) {
  await AutorRepository.deleteAutor(id);
}

async function getAutores() {
  return await AutorRepository.getAnimais();
}

async function getAutor(id) {
  return await AutorRepository.getAutor(id);
}

export default {
  createAutor,
  getAutores,
  getAutor,
  deleteAutor,
  updateAutor,
};
