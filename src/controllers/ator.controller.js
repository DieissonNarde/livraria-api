import AtorService from '../services/ator.service.js';

async function createAtor(req, res, next) {
  try {
    let ator = req.body;
    if (!ator.nome || !ator.email || !ator.telefone) {
      throw new Error('Nome, Email e Telefone são obrigatórios.');
    }
    ator = await AtorService.createAtor(ator);
    res.send(ator);
    logger.info(`POST /ator - ${JSON.stringify(ator)}`);
  } catch (err) {
    next(err);
  }
}

async function getAtores(req, res, next) {
  try {
    res.send(await AtorService.getAtors());
    logger.info('GET /ator');
  } catch (err) {
    next(err);
  }
}

async function getAtor(req, res, next) {
  try {
    res.send(await AtorService.getAtor(req.params.id));
    logger.info('GET /ator');
  } catch (err) {
    next(err);
  }
}

async function deleteAtor(req, res, next) {
  try {
    await AtorService.deleteAtor(req.params.id);
    res.end();
    logger.info('DELETE /ator');
  } catch (err) {
    next(err);
  }
}

async function updateAtor(req, res, next) {
  try {
    let ator = req.body;
    if (!ator.atorId || !ator.nome || !ator.email || !ator.telefone) {
      throw new Error('ID, Nome, Email e Telefone são obrigatórios.');
    }
    ator = await AtorService.updateAtor(ator);
    res.send(ator);
    logger.info(`PUT /ator - ${JSON.stringify(ator)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAtor,
  getAtores,
  getAtor,
  deleteAtor,
  updateAtor,
};
