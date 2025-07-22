// import express from 'express';
// import { getOffers, addOffer, updateOffer, deleteOffer } from '../controllers/offerController.js';
// import verifyToken from '../middleware/auth.js';

// const offerRoutes = express.Router();

// offerRoutes.get('/offers', verifyToken, getOffers);
// offerRoutes.post('/offers', verifyToken, addOffer);
// offerRoutes.put('/offers/:id', verifyToken, updateOffer);
// offerRoutes.delete('/offers/:id', verifyToken, deleteOffer);

// export default offerRoutes;


// import express from 'express';
// import { getOffers, addOffer, updateOffer, deleteOffer } from '../controllers/offerController.js';
// import verifyToken from '../middleware/auth.js';

// const offerRoutes = express.Router();

// offerRoutes.get('/offers', verifyToken, getOffers);
// offerRoutes.post('/offers', verifyToken, addOffer);
// offerRoutes.put('/offers/:id', verifyToken, updateOffer);
// offerRoutes.delete('/offers/:id', verifyToken, deleteOffer);

// export default offerRoutes;


// import express from 'express';
// import { getOffers, addOffer, updateOffer, deleteOffer, getOfferCategories, addOfferCategory, deleteOfferCategory } from '../controllers/offerController.js';
// import verifyToken from '../middleware/auth.js';

// const offerRoutes = express.Router();

// offerRoutes.get('/offers', verifyToken, getOffers);
// offerRoutes.post('/offers', verifyToken, addOffer);
// offerRoutes.put('/offers/:id', verifyToken, updateOffer);
// offerRoutes.delete('/offers/:id', verifyToken, deleteOffer);
// offerRoutes.get('/offer-categories', verifyToken, getOfferCategories);
// offerRoutes.post('/offer-categories', verifyToken, addOfferCategory);
// offerRoutes.delete('/offer-categories/:name', verifyToken, deleteOfferCategory);

// export default offerRoutes;









import express from 'express';
import { getOffers, addOffer, updateOffer, deleteOffer, getOfferCategories, addOfferCategory, deleteOfferCategory } from '../controllers/offerController.js';
import verifyToken from '../middleware/auth.js';

const offerRoutes = express.Router();

offerRoutes.get('/offers', getOffers);
offerRoutes.post('/offers', verifyToken, addOffer);
offerRoutes.put('/offers/:id', verifyToken, updateOffer);
offerRoutes.delete('/offers/:id', verifyToken, deleteOffer);
offerRoutes.get('/offer-categories', verifyToken, getOfferCategories);
offerRoutes.post('/offer-categories', verifyToken, addOfferCategory);
offerRoutes.delete('/offer-categories/:name', verifyToken, deleteOfferCategory);

export default offerRoutes;