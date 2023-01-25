import express, { Router } from 'express';
import { getPhotos,addPhoto,editPhoto,deletePhoto } from '../controler/posts.js';

const router = express.Router();

router.get('/',getPhotos)
router.post('/',addPhoto)
router.patch('/:id',editPhoto)
router.delete('/:id',deletePhoto)


export default router;


