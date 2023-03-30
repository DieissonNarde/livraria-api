import LivroService from '../services/livro.service.js';

async function createLivro(req, res, next) {
  try {
    let livro = req.body;
    if (!livro.nome || !livro.valor || !livro.estoque || !livro.autorId) {
      throw new Error('Nome, Valor, Estoque e Id de Autor são obrigatórios.');
    }
    livro = await LivroService.createLivro(livro);
    res.send(livro);
    logger.info(`POST /livro - ${JSON.stringify(livro)}`);
  } catch (err) {
    next(err);
  }
}

async function getLivros(req, res, next) {
  try {
    res.send(await LivroService.getLivros());
    logger.info('GET /livro');
  } catch (err) {
    next(err);
  }
}

async function getLivro(req, res, next) {
  try {
    res.send(await LivroService.getLivro(req.params.id));
    logger.info('GET /livro');
  } catch (err) {
    next(err);
  }
}

async function deleteLivro(req, res, next) {
  try {
    await LivroService.deleteLivro(req.params.id);
    res.end();
    logger.info('DELETE /livro');
  } catch (err) {
    next(err);
  }
}

async function updateLivro(req, res, next) {
  try {
    let livro = req.body;
    if (
      !livro.livroId ||
      !livro.nome ||
      !livro.valor ||
      !livro.estoque ||
      !livro.autorId
    ) {
      throw new Error(
        'ID, Nome, Valor, Estoque e Id de Autor são obrigatórios.'
      );
    }
    livro = await LivroService.updateLivro(livro);
    res.send(livro);
    logger.info(`PUT /livro - ${JSON.stringify(livro)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createLivro,
  getLivros,
  getLivro,
  deleteLivro,
  updateLivro,
};
