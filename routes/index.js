// routes/index.js

const express = require('express');
const router = express.Router();
const pets = require('../db');

router.get('/', (req, res) => {
  const petsHome = pets.slice(0, 4);
  res.render('index', { petsHome });
});

router.get('/animais', (req, res) => {
  res.render('animais', { dados: pets });
});

router.get('/ongs', (req, res) => {
  res.render('ongs');
});

router.get('/contato', (req, res) => {
  res.render('contato');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/forgot-password', (req, res) => {
  res.render('forgot-password');
});

router.get('/pet/:id', (req, res) => {
  const petId = parseInt(req.params.id);
  const pet = pets.find(p => p.id === petId);

  if (pet) {
    res.render('detalhesPet', { pet });
  } else {
    res.status(404).send('Pet não encontrado');
  }
});


router.get('/buscar', (req, res) => {
  const termo = (req.query.q || '').toLowerCase();
  const results = pets.filter(pet =>
    pet.nome.toLowerCase().includes(termo) ||
    (pet.porte && pet.porte.toLowerCase().includes(termo)) ||
    (pet.estado && pet.estado.toLowerCase().includes(termo))
    // Adicione outros campos se quiser
  );
  res.render('results', { results, termo });
});

module.exports = router;