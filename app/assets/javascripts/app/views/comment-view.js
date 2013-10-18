(function () {

  window.CommentView = Backbone.View.extend({
    className: 'row comment',
    template: _.getTemplate('comment'),
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
      var newCommentHtml = this.template( this.model.toJSON() );
      $(this.el).html(newCommentHtml);
      var doesUserOwnComment = g.user.id === this.model.get('user_id');
      $(this.el).find('.delete').toggle(doesUserOwnComment);
    },

    events: {
      'click .delete': 'deleteComment'
    },

    deleteComment: function(e) {
      e.preventDefault();
      this.model.destroy();
    }
  });

})();
