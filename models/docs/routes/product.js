const { Router } = require('express');
const router = Router();

router.get('/products', (req, res) => {res.send('Obtaining Products')})
router.post('/products', (req, res) => {res.send('Creating Products')})

module.exports = router;