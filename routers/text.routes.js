const router = require('express').Router();
const {create,find}=require('../controller/text.controller')

router.get("/", find
);
router.post("/",create);
