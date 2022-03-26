const express = require("express")
const router = express.Router();
// const fs = require('fs');
const { createIssue, updateIssue, index, deleteIssue } = require('./../controllers/IssuesController');

router.post('/issues/create', createIssue);
router.get('/issues', index);
router.patch('/issues/update/:id', updateIssue);
router.delete('/issues/delete/:id', deleteIssue);
module.exports = router;