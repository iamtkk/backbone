// var Song = Backbone.Model.extend({
//   initialize: function () {
//     console.log("A new song has been created.");
//   },
// });

// var Song = Backbone.Model.extend();
// var Song = Backbone.Model.extend({
//   defaults: {
//     genre: "Jazz",
//   },
// });

// set method를 사용하여 속성을 정의
// var song = new Song();
// song.set("title", "Blue in Green!");
// song.set({
//   artist: "Miles Davis!",
//   publishYear: 1959,
// });

// var song = new Song({
//   title: "Blue in Green",
//   artist: "Miles Davis",
//   publishYear: 1959,
// });

// var Song = Backbone.Model.extend({
//   validate: function (attrs) {
//     if (!attrs.title) return "Title is required";
//   },
// });

// var song = new Song();

// var Animal = Backbone.Model.extend({
//   walk: function () {
//     console.log("Animal walking...");
//   },
// });

// var Dog = Animal.extend({
//   walk: function () {
//     Animal.prototype.walk.apply(this);
//     console.log("Dog walking...");
//   },
// });

// var dog = new Dog();

// dog.walk();

// var Song = Backbone.Model.extend();

// var Songs = Backbone.Collection.extend({
//   model: Song,
// });

// var songs = new Songs([
//   new Song({ title: "Song 1" }),
//   new Song({ title: "Song 2" }),
//   new Song({ title: "Song 3" }),
// ]);

// songs.add(new Song({ title: "Song 4" }));

// var Song = Backbone.Model.extend();

// var Songs = Backbone.Collection.extend({
//   model: Song,
// });

// var songs = new Songs();

// songs.add(
//   new Song({ title: "Song 1", genre: "Jazz", downloads: 110 }, { at: 0 })
// );

// songs.push(new Song({ title: "Song 2", genre: "Jazz", downloads: 90 }));

// var jazzSongs = songs.where({ genre: "Jazz" });

// var firstJazzSong = songs.findWhere({ genre: "Jazz" });

// console.log("Jazz Songs", jazzSongs);

// console.log("First Jazz Song", firstJazzSong);

// var filteredSongs = songs.where({ genre: "Jazz", title: "Song 2" });

// console.log("filteredSongs", filteredSongs);

// var topDownloads = songs.filter(function (song) {
//   return song.get("downloads") > 100;
// });

// console.log("Top Downloads", topDownloads);

// songs.each(function (song) {
//   console.log(song);
// });

// var SongView = Backbone.View.extend({
//   tagName: "span",
//   className: "song",
//   id: "1234",
//   attributes: {
//     "data-genre": "Jazz",
//   },
//   render: function () {
//     this.$el.html("Hello World");
//     return this;
//   },
// });
// var songView = new SongView({ el: "#container" });
// var songView = new SongView();
// songView.render();
// $("#container").html(songView.$el);

// var Song = Backbone.Model.extend();

// var Songs = Backbone.Collection.extend({
//   model: Song,
// });

// var SongView = Backbone.View.extend({
//   tagName: "li",
//   render: function () {
//     this.$el.html(this.model.get("title"));
//     return this;
//   },
// });

// var SongsView = Backbone.View.extend({
//   render: function () {
//     var self = this;
//     this.model.each(function (song) {
//       var songView = new SongView({ model: song });
//       self.$el.append(songView.render().$el);
//     });
//   },
// });

// var songs = new Songs([
//   new Song({ title: "Blue in Green" }),
//   new Song({ title: "So What" }),
//   new Song({ title: "All Blues" }),
// ]);

// var songsView = new SongsView({ el: "#container", model: songs });
// songsView.render();

// var Song = Backbone.Model.extend();

// var SongView = Backbone.View.extend({
//   events: {
//     click: "onClick",
//     "click .bookmark": "onClickBookmark",
//   },
//   onClick: function () {
//     console.log("Listen Clicked");
//   },
//   onClickBookmark: function (e) {
//     e.stopPropagation();
//     console.log("Bookmark Clicked");
//   },
//   render: function () {
//     this.$el.html(
//       this.model.get("title") +
//         " <button>Listen</button> <button class='bookmark'>Bookmark</button>"
//     );
//     return this;
//   },
// });

// var song = new Song({ title: "Blue in Green" });
// var songView = new SongView({ el: "#container", model: song });
// songView.render();

// var Song = Backbone.Model.extend({
//   defaults: {
//     listeners: 0,
//   },
// });

// var song = new Song({ title: 'Blue in Green' });

// var SongView = Backbone.View.extend({
//   initialize: function () {
//     this.model.on('change', this.render, this);
//   },

//   render: function () {
//     this.$el.html(
//       this.model.get('title') + ' - Listeners: ' + this.model.get('listeners')
//     );
//     return this;
//   },
// });

// var songView = new SongView({ el: '#container', model: song });
// songView.render();

// var Song = Backbone.Model.extend();

// var SongView = Backbone.View.extend({
//   tagName: 'li',
//   render: function () {
//     this.$el.html(this.model.get('title'));
//     this.$el.attr('id', this.model.id);
//     return this;
//   },
// });

// var Songs = Backbone.Collection.extend({
//   model: Song,
// });

// var SongsView = Backbone.View.extend({
//   tagName: 'ul',

//   initialize: function () {
//     this.model.on('add', this.onSongAdded, this);
//     this.model.on('remove', this.onSongRemoved, this);
//   },

//   onSongAdded: function (song) {
//     var songView = new SongView({ model: song });
//     this.$el.append(songView.render().$el);
//   },

//   onSongRemoved: function (song) {
//     // this.$el.find('li#' + song.id).remove();
//     this.$('li#' + song.id).remove();
//   },

//   render: function () {
//     var self = this;
//     this.model.each(function (song) {
//       var songView = new SongView({ model: song });
//       self.$el.append(songView.render().$el);
//     });
//   },
// });

// var songs = new Songs([
//   new Song({ id: 1, title: 'Blue in Green' }),
//   new Song({ id: 2, title: 'So What' }),
//   new Song({ id: 3, title: 'All Blues' }),
// ]);

// var songsView = new SongsView({ el: '#songs', model: songs });
// songsView.render();

var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
  render: function () {
    // this.$el.html(this.model.get('title')) + ' <button>Listen</button>';
    var template = _.template($('#songTemplate').html());
    var html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  },
});

var song = new Song({ title: 'Blue in Green', plays: 1100 });

var songView = new SongView({ el: '#container', model: song });
songView.render();
