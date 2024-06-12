let list = "";
let url = "https://picsum.photos/v2/list?page=2&limit=48";
fetch(url)
  .then((datax) => datax.json())
  .then((data) => {
    for (const x of data) {
      list += `<img src="${x.download_url}" width="70px" height="70">`;
    }
    const tbodyOfTable = document.querySelector("#fetchGallery");
    tbodyOfTable.innerHTML = list;
  })
  .catch(error => console.error('Error:', error));