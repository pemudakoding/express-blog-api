const express = require('express');
const router = express.Router();
const fetchBlogsController = require('../../controllers/blog/fetchBlogs.controller');
const storeBlogController = require('../../controllers/blog/storeBlog.controller');
const destroyBlogController = require('../../controllers/blog/destroyBlog.controller');
const updateBlogController = require('../../controllers/blog/updateBlog.controller');
const showBlogController = require('../../controllers/blog/showBlog.controller');


router.get('/', fetchBlogsController.handle)
router.post('/', storeBlogController.handle)
router.delete('/:id', destroyBlogController.handle)
router.put('/:id', updateBlogController.handle)
router.get('/:id', showBlogController.handle)

module.exports = router;