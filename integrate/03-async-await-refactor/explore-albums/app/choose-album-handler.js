import { Album } from './album.js';

async function alubmbyId(id,parameters){
  let query= '?'
  if(parameters._embed){
    query +=parameters._embed.map(reso=>`&_embed=${reso}`);
  }
  const response = await fetch('https://jsonplaceholder.typicode.com/albums/' + id + encodeURI(query))
  const albumData =await response.json();
  return  new Album(albumData);
  

}

export const chooseAlbumHandler = (event) => {
  const albumId = event.target.form.albumId.value;

 alubmbyId(albumId,{
   _embed:['photos'],
 }).then(albumInstance => {
      console.log(albumInstance);
      const view = albumInstance.render();
      document.getElementById('root').innerHTML = '';
      document.getElementById('root').appendChild(view);
    })
    .catch(err => console.error(err));
};
