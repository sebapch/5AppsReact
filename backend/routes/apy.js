const router = require('express').Router();
const auth = require('../middleware/auth');
const Apy = require('../models/apy.model');

//save apy in db
router.post('/save', /* auth, */ async (req, res) => {
    //save default values to test
    let {stableApy, big4Apy, bscApy} = req.body;
    const apy = new Apy({
        stableApy, big4Apy, bscApy
    });
    try {
        const newApy = await apy.save();
        res.status(201).json(newApy);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//edit apy in db
router.post('/edit', /* auth, */ async (req, res) => {
    let {stableApy, big4Apy, bscApy} = req.body;
    try {
        const apy = await Apy.findById(id);
        if (!apy) return res.status(404).json({ msg: 'Apy not found' });
        apy.stableApy = stableApy;
        apy.big4Apy = big4Apy;
        apy.bscApy = bscApy;
        const updatedApy = await apy.save();
        res.json(updatedApy);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//update apy in dbOwner
router.post('/update', /* auth, */ async (req, res) => {
    let {stableApy, big4Apy, bscApy} = req.body;
    let id = '62953ca5229a522185434785';
    Apy.findByIdAndUpdate(id, {
        $set: {
            stableApy, big4Apy, bscApy
        }
    }, { new: true }, (err, apy) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json(apy);
    });
});



//get All apys in dbOwner
router.get('/getAll', /* auth, */ async (req, res) => {
    try {
        const apys = await Apy.find({});
        res.send(apys);
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router;