(function () {

  window.CommentWallView = Backbone.View.extend({
    initialize: function (options) {
      this.modelViews = {};
      this.listenTo(this.collection, 'add', this.addCommentToWall);
      this.listenTo(this.collection, 'remove', this.removeCommentFromWall);
    },

    addCommentToWall: function (comment) {
      var view = new CommentView({ model: comment });
      view.render();
      $(this.el).append(view.el);
      // Store the view using the comment model's local id
      this.modelViews[comment.cid] = view;
    },

    removeCommentFromWall: function (comment) {
      // Grab the comment's view using its local id
      var commentView = this.modelViews[comment.cid];
      // TODO: Remove the view from the page
      commentView.remove();
    }
  });

})();
