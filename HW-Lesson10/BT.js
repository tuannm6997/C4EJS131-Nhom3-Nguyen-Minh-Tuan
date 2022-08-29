// B1: Tạo 1 object gồm 3 object con với key là id bắt đầu từ 1, object con gồm 3 cặp keys value:

let object = {
    obj: [
      {
        id: 1,
        albumTitle: "title1",
        artist: "artist1",
        track: ["a, b, c"],
      },
      {
        id: 2,
        albumTitle: "title2",
        artist: "artist2",
        track: ["d, e, f"],
      },
      {
        id: 3,
        albumTitle: "title3",
        artist: "artist3",
        track: ["g, h, k"],
      },
    ],
  };
  
  // B2: viết CRUD cho object trên
  function create(AlbumTitle, Artist) {
    let count = object.obj.length + 1;
  
    object.obj.push({
      id: count,
      albumTitle: AlbumTitle,
      artist: Artist,
      track: ["k, l, m"],
    });
  }
  
  create("title4", "artist4");
  
  function readAll() {
    console.log(object);
  }
  function updateiD(iD, NewiD) {
    for (i = 0; i < object.obj.length; i++) {
      if (object.obj[i].id === iD) {
        object.obj[i].id = NewiD;
      }
    }
  }
  function updateTitle(Title, NewTitle) {
    for (i = 0; i < object.obj.length; i++) {
      if (object.obj[i].albumTitle.toLowerCase() === Title.toLowerCase()) {
        object.obj[i].Title = NewTitle;
      }
    }
  }
  function updateArtist(Artist, newArtist) {
    for (i = 0; i < object.obj.length; i++) {
      if (object.obj[i].artist.toLowerCase() === Artist.toLowerCase()) {
        object.obj[i].artist = newArtist;
      }
    }
  }
  function updateTrack(iD, NewTrack) {
    for (i = 0; i < object.obj.length; i++) {
      if (object.obj[i].id === iD) {
        object.obj[i].track.push(NewTrack);
      }
    }
  }
  function deleteiD(iD) {
    for (i = 0; i < object.obj.length; i++) {
      if (object.obj[i].id === iD) {
        object.obj.splice(i, 1);
      }
    }
  }
  
  function deleteTitle(Title) {
    for (i = 0; i < object.obj.length; i++) {
      if (object.obj[i].albumTitle.toLowerCase() === Title.toLowerCase()) {
        object.obj.splice(i, 1);
      }
    }
  }
  
  function deleteArtist(Artist) {
    for (i = 0; i < object.obj.length; i++) {
      if (object.obj[i].artist.toLowerCase() === Artist.toLowerCase()) {
        object.obj.splice(i, 1);
      }
    }
  }
  
  function deleteTrack(iD, Track) {
    for (i = 0; i < object.obj.length; i++) {
      if (object.obj[i].id === iD) {
        for (j = 0; j < object.obj[i].track.length; j++) {
          if (object.obj[i].track[j] === Track) {
            object.obj[i].track.splice(j, 1);
          }
        }
      }
    }
  }
  
  deleteTitle("Title2");
  //deleteArtist("artist1");
  updateiD(1,10)
  console.log(object);