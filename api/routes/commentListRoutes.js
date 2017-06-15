module.exports = function (app) {
  var commentList = require('../controllers/commentListController');

  app.route('/comments')
    .get(commentList.listAllComments)
    .post(commentList.createComment);

  app.route('/comments/:commentId')
    .get(commentList.getComment)
    .put(commentList.updateComment)
    .delete(commentList.deleteComment);
};
