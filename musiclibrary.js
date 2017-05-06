const Track = function(title, artist, album, rating, duration) {
  this.title = title;
  this.artist = artist;
  this.rating = rating;
  this.duration = duration;
};

const song = new Track('track1', 'artist1', 'album1', 4, 120);
const song2 = new Track('track2', 'artist2', 'album1', 5, 150);
const song3 = new Track('track3', 'artist3', 'album1', 4, 180);
const song4 = new Track('track4', 'artist4', 'album1', 1, 110);

console.log('new song:', song);

const Playlist = function(name) {
  this.name = name;
  this.tracks = [];
  this.overallRating = function() {
    let total = 0;
    for (let song of this.tracks) {
      total += song.rating;
    }
    return total / this.tracks.length;
  };
  this.totalDuration = function () {
    let total = 0;
    for (let song of this.tracks) {
      total += song.duration;
    }
    return total;
  };
};

const playlist1 = new Playlist('playlist1');

Playlist.prototype.addTracks = function (newSongs) {
  for (let i = 0; i < newSongs.length; i++) {
    this.tracks.push(newSongs[i]);
  }
};

playlist1.addTracks([song, song2, song3, song4]);

console.log(playlist1.name, 'rating:', playlist1.overallRating(), '/ 5');

console.log(playlist1.name, 'duration:', playlist1.totalDuration(), 'minutes');

console.log('new playlist:', playlist1);

const Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
};

Library.prototype.addPlaylists = function (newPlaylists) {
  for (let i = 0; i < newPlaylists.length; i++) {
    this.playlists.push(newPlaylists[i]);
  }
};

const library1 = new Library('library1', 'Kevin');

library1.addPlaylists([playlist1]);

console.log('new library:', library1);
