var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const constellation = [
    { id: 1, nome: 'Constelação do Dragão', descricao: 'Representa a força e a majestade dos dragões.' },
    { id: 2, nome: 'Constelação do Lobo', descricao: 'Simboliza a lealdade e a astúcia dos lobos.' },
    { id: 3, nome: 'Constelação do Falcão', descricao: 'Representa a visão aguçada e a liberdade dos falcões.' },
    { id: 4, nome: 'Constelação do Leão', descricao: 'Simboliza a coragem e a nobreza dos leões.' },
    { id: 5, nome: 'Constelação da Serpente', descricao: 'Representa a sabedoria e a astúcia das serpentes.' }
  ];
  res.render('orv', { title: 'Omniscient Reader\'s Viewpoint', constellation: constellation });
});

router.get('/constellation', (req, res) => {
  const constellation = [
    { id: 1, nome: 'Constelação do Dragão', descricao: 'Representa a força e a majestade dos dragões.' },
    { id: 2, nome: 'Constelação do Lobo', descricao: 'Simboliza a lealdade e a astúcia dos lobos.' },
    { id: 3, nome: 'Constelação do Falcão', descricao: 'Representa a visão aguçada e a liberdade dos falcões.' },
    { id: 4, nome: 'Constelação do Leão', descricao: 'Simboliza a coragem e a nobreza dos leões.' },
    { id: 5, nome: 'Constelação da Serpente', descricao: 'Representa a sabedoria e a astúcia das serpentes.' }
  ]
  res.render('constellation', { title: 'Constellation', constellation });
});
module.exports = router;
