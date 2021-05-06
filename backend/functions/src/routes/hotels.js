const {Router} = require('express');
const router = Router();
const listHotels = require('../model/data.json');

router.get('/', (req, res)=>{
    res.json(listHotels);
});

router.post('/search', (req, res)=>{
    const arrayHotels = [];
    listHotels.forEach(hotel => {
        
        if(hotel['city']==req.query['city']){
            arrayHotels.push(hotel);
        }
    });
    res.json(arrayHotels);
});

router.post('/search/min', (req, res)=>{
    const arrayHotels = [];
    listHotels.forEach(hotel => {
        
        if(hotel['minPrice']>=req.query['minPrice']){
            arrayHotels.push(hotel);
        }
    });
    res.json(arrayHotels);
});

router.post('/search/max', (req, res)=>{
    const arrayHotels = [];
    listHotels.forEach(hotel => {
        
        if(hotel['maxPrice']<=req.query['maxPrice']){
            arrayHotels.push(hotel);
        }
    });
    res.json(arrayHotels);
});

module.exports = router;