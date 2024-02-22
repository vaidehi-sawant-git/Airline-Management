const express = require('express');
const cityController = require('../../controllers/city-controller');

const router = express.Router();

router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destroy);
router.patch('/city/:id',cityController.update);
router.get('/city/:id',cityController.get)

module.exports = router;
 