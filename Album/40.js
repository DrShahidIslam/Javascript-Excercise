function make_album(artist, album) {
    const data = {
      artist,
      album,
    };
    return data;
  }
  
  const album_a = make_album("Atif Aslam", "Faltoo");
  const album_b = make_album("Ali Sethi", "Farig");
  const album_c = make_album("Shae Gill", "Fazool");
  
  console.log(album_a);
  console.log(album_b);
  console.log(album_c);
  
  function makeAlbum(artist, album, tracks=1){
      data = {
          artist,
          album,
          tracks
      }
      return data
  }
  
  const newAlbum = makeAlbum("Abida Parveen", "Sufi")
  const oldAlbum = makeAlbum("Rahat Fateh Ali Khan", "dard-e-dil", 3)
  console.log(newAlbum)
  console.log(oldAlbum)