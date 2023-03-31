import Venda from '../models/venda.model.js';
import Cliente from '../models/cliente.model.js';
import Livro from '../models/livro.model.js';

async function insertVenda(venda) {
  try {
    return await Venda.create(venda);
  } catch (err) {
    throw err;
  }
}

async function updateVenda(venda) {
  try {
    await Venda.update(venda, {
      where: {
        vendaId: venda.vendaId,
      },
    });

    return await getVenda(venda.vendaId);
  } catch (err) {
    throw err;
  }
}

async function deleteVenda(id) {
  try {
    return await Venda.destroy({
      where: {
        vendaId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getVendas() {
  try {
    return await Venda.findAll();
  } catch (err) {
    throw err;
  }
}

async function getVenda(id) {
  try {
    return await Venda.findByPk(id, { raw: true });
  } catch (err) {
    throw err;
  }
}

async function getVendasPorCliente(clienteId) {
  try {
    return await Venda.findAll({
      where: {
        clienteId,
      },
      include: [
        {
          model: Cliente,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getVendasPorLivro(livroId) {
  try {
    return await Venda.findAll({
      where: {
        livroId,
      },
      include: [
        {
          model: Livro,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertVenda,
  getVendas,
  getVenda,
  getVendasPorCliente,
  getVendasPorLivro,
  updateVenda,
  deleteVenda,
};
