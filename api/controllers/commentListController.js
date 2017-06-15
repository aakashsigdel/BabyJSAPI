const mongoose = require('mongoose');

const Comments = mongoose.model('Comments');

exports.listAllComments = function (req, res) {
  Comments.find({}, function (err, comments) {
    if (err) {
      res.send(err);
    }

    res.send(comments);
  });
}

exports.createComment = function (req, res) {
  const rawComment = req.body;
  rawComment.createdAt = new Date();
  rawComment.done = false;
  const comment = new Comments(rawComment);

  comment.save(function (err, comment) {
    if (err) {
      res.send(err);
    }

    res.send(comment);
  });
}

exports.getComment = function (req, res) {
  Comments.findById(req.params.commentId, function (err, comment) {
    if (err) {
      res.send(err);
    }

    res.send(comment);
  });
}

exports.updateComment = function (req, res) {
  Comments.findOneAndUpdate(
    req.params.commentId,
    req.body,
    { new: true },
    function (err, comment) {
      if (err) {
        res.send(err)
      }

      res.send(comment)
  });
}

exports.deleteComment = function (req, res) {
  console.log(req.params);
  Comments.remove({ _id: req.params.commentId }, function (err, status) {
    if (err) {
      res.send(err);
    }

    res.send({ message: 'Comment successfully Deleted' });
  });
}
