import express from 'express';
import LivroController from '../controllers/livro.controller.js';

const router = express.Router();

router.post('/', LivroController.createLivro);
router.get('/', LivroController.getLivros);
router.get('/:id', LivroController.getLivro);
router.delete('/:id', LivroController.deleteLivro);
router.put('/', LivroController.updateLivro);

export default router;
