const express = require('express');
const router = express.Router();

// @route       GET api/contacts
// @dsc         Get all user's contacts
// @access      Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route       POST api/contacts
// @dsc         Add new contact
// @access      Private
router.post('/', (req, res) => {
  res.send('Add contacts');
});

// @route       PUT api/contacts/:id
// @dsc         Update contact
// @access      Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route       DELETE api/contacts/:id
// @dsc         Delete contact
// @access      Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
