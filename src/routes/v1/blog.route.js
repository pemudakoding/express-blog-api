const express = require('express');
const router = express.Router();

const fetchBlogsController = require('../../controllers/blog/fetchBlogs.controller');
const storeBlogController = require('../../controllers/blog/storeBlog.controller');
const destroyBlogController = require('../../controllers/blog/destroyBlog.controller');
const updateBlogController = require('../../controllers/blog/updateBlog.controller');

const storeRequest = require('../../request/blog/store.request')
const fetchRequest = require('../../request/blog/fetch.request')


router.get(
  '/',
  fetchRequest.validate(),
  fetchBlogsController.handle
)

router.post(
  '/',
  storeRequest.validate(),
  storeBlogController.handle
)
router.delete(
  '/:id',
  destroyBlogController.handle
)
router.put(
  '/:id',
  updateBlogController.handle
)

module.exports = router;