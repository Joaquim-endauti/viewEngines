var express = require('express');
var router = express.Router();

const curiosidades = [
  {
    icon: '🌍',
    titulo: 'Nome de um Planeta',
    texto: 'Phainon vem do grego "Phaenon", nome antigo para o planeta Saturno. Em chinês, 白厄 (Bái-è) combina "branco/puro" e "adversidade/calamidade" — a dualidade perfeita de um herói que carrega luz e ruína ao mesmo tempo.'
  },
  {
    icon: '🔄',
    titulo: '33 Milhões de Loops',
    texto: 'Para impedir o nascimento de Irontomb, Phainon viveu a mesma linha do tempo mais de 33 milhões de vezes. Cada reset custava sua memória, mas ele continuava — acumulando os 12 Coreflames em seu próprio corpo.'
  },
  {
    icon: '🪵',
    titulo: 'Soldados de Madeira',
    texto: 'Quando criança em Aedes Elysiae, Phainon esculpia soldadinhos de madeira e os usava em batalhas imaginárias. Esse hábito infantil reflete sua natureza heroica inata — ele sempre sonhou em proteger os outros.'
  },
  {
    icon: '🧬',
    titulo: 'Expy de Kevin Kaslana',
    texto: 'Phainon é considerado o equivalente narrativo de Kevin Kaslana de Honkai Impact 3rd — ambos são guerreiros de cabelos brancos que carregam o peso do mundo, fazem sacrifícios extremos e têm conexão profunda com o conceito de "fim".'
  },
  {
    icon: '☀',
    titulo: 'A Marca do Sol',
    texto: 'Phainon usa um choker de couro no pescoço que esconde uma marca dourada em forma de sol — o selo do Coreflame Worldbearing. Essa marca cresce e brilha quando ele entra no estado Flame Reaver.'
  },
  {
    icon: '⚖',
    titulo: 'Honra Acima da Vitória',
    texto: 'Na batalha contra o Titã Nikador, Phainon venceu a aposta com Mydei — mas insistiu que Mydei desferisse o golpe final para honrar o sacrifício anterior do colega. Ganhar sem reconhecer o esforço alheio não era vitória para ele.'
  },
  {
    icon: '💥',
    titulo: 'O Dano Mais Alto do Jogo',
    texto: 'Em seu estado transformado Flame Reaver, a Enhanced E Skill de Phainon com 4 cargas de Scourge atinge até 1170% de ATK em um único alvo — um dos multiplicadores de dano mais altos já vistos em Honkai: Star Rail.'
  },
  {
    icon: '🎮',
    titulo: 'Técnica Única',
    texto: 'Phainon é um dos únicos personagens do jogo cuja Técnica permite derrotar inimigos comuns do mapa sem nem iniciar o combate. Além disso, ele aumenta o limite de Technique Points do time de 5 para 8.'
  }
];

router.get('/', function(req, res, next) {
  res.render('phainon', { title: 'Phainon', curiosidades: curiosidades });
});

module.exports = router;
