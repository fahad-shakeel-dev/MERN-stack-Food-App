import express from 'express';
// import contactController from '../controllers/contactController.js';
import { submitContact } from '../controllers/contactController.js';
import { getContacts } from '../controllers/contactController.js';
import { updateContact } from '../controllers/contactController.js';
import { deleteContact } from '../controllers/contactController.js';
import verifyToken from '../middleware/auth.js';

const contactRouter = express.Router();

contactRouter.post('/submit', submitContact);
contactRouter.get('/', verifyToken,getContacts);
contactRouter.put('/:id', verifyToken,updateContact);
contactRouter.delete('/:id', verifyToken, deleteContact);

export default contactRouter;
