import mongoose from 'mongoose';
import AvaliacaoSchema from './avaliacao.schema.js';

const LivroInfoSchema = new mongoose.Schema(
  {
    livroId: Number,
    descrição: String,
    paginas: String,
    editora: String,
    avaliacoes: [AvaliacaoSchema],
  },
  {
    collection: 'livroInfos',
  }
);

export default LivroInfoSchema;
