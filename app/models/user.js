"use strict";

const bookshelf = require('../db/bookshelf');
const bcrypt = require('bcrypt');
const Comment = require('./comment');
const Post = require('./post');

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  posts: function() {
    return this.hasMany(Posts, 'author');
  },
  comments: function() {
    return this.hasMany(Comments);
  },
});

module.exports = bookshelf.model('User', User);
