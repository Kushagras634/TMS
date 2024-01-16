const express=require('express');
const router=express.Router();
const {post,del,update,get,getAll}=require('../controller/task');

router.post('/',post);
router.get('/', getAll);
router.get('/:id',get);
router.patch('/:id',update);
router.delete('/:id',del);;

module.exports=router;
