const apiUrl = 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
fetch(apiUrl)
.then(response=>{
    if(!response.ok){
        throw new Error(`error !!!",${response.status}`)
    }
    return response.json();
})
.then(data => {
    console.log('  GIF about sun  :', data);
  })
.catch(err=>console.log("error GIF"))