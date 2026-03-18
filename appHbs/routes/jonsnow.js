var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const theories = [
    {
      id: 1,
      icon: '👑',
      title: 'R+L=J: Jon é filho de Rhaegar e Lyanna',
      description: 'A teoria mais popular e confirmada na série: Jon Snow é na verdade Aegon Targaryen, filho legítimo de Rhaegar Targaryen e Lyanna Stark.',
      evidence: 'Sonhos de Ned, olhos de Lyanna'
    },
    {
      id: 2,
      icon: '🐉',
      title: 'Jon é o Príncipe Prometido',
      description: 'Jon pode ser o "Príncipe Que Foi Prometido", profetizado para derrotar os Outros.',
      evidence: 'Sangue Targaryen, nascimento'
    },
    {
      id: 3,
      icon: '❄',
      title: 'Jon é um warg poderoso',
      description: 'Jon tem habilidades de warging não desenvolvidas, permitindo controlar animais e talvez pessoas.',
      evidence: 'Conexão com Ghost'
    },
    {
      id: 4,
      icon: '⚔',
      title: 'Jon voltará como Rei do Norte',
      description: 'Após ressurreição, Jon será proclamado Rei do Norte, unindo Starks e Selvagens.',
      evidence: 'Lealdade dos Selvagens'
    },
    {
      id: 5,
      icon: '🔥',
      title: 'Jon controlará dragões',
      description: 'Como Targaryen, Jon poderá montar dragões, especialmente Drogon.',
      evidence: 'Sangue Targaryen'
    },
    {
      id: 6,
      icon: '🦅',
      title: 'Jon é filho de Howland Reed',
      description: 'Teoria alternativa: Jon é filho de Howland Reed e uma mulher misteriosa.',
      evidence: 'Ausência de Howland'
    }
  ];
  res.render('jonsnow', { 
    title: 'Jon Snow', 
    theories: theories,
    theoriesJSON: JSON.stringify(theories)
  });
});

module.exports = router;
