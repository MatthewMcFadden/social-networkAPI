// Require express router
const router = require('express').Router();

// Set requirements (from posts-controller)
const { 
    getAllPosts, 
    getPostsById, 
    createPosts, 
    updatePosts,
    deletePosts,
    addReaction,
    deleteReaction

} = require('../../controllers/posts-controller');

// -- Directs to: /api/posts <GET>
router.route('/').get(getAllPosts);

// -- Directs to: /api/posts/:id <GET, PUT, DELETE>
router.route('/:id').get(getPostsById).put(updatePosts).delete(deletePosts); 

// -- Directs to: /api/posts/:userId <POST>
router.route('/:userId').post(createPosts);

// -- Directs to: /api/posts/:postId/reactions <POST>
router.route('/:postId/reactions').post(addReaction);

// -- Directs to: /api/posts/:postId/reactionId <DELETE>
router.route('/:postId/reactions/:reactionId').delete(deleteReaction);

// Export module router
module.exports = router;