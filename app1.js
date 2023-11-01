fetch("https://api.newscatcherapi.com/v2/search?q=pakistan", {
  headers: {
    'x-api-key': 'j8QSzrTvMZE2mwPx1ikHPpGOVBbZLvINQO5uA2UI4rM'
  }
})
  .then(res => res.json())
  .then(res => {
    let news = document.getElementById("news");
    const articles = res.articles
    for (var i = 0; i < articles; i++) {
      console.log(articles[i])
      const { media, title, summary } = articles[i]
      news.innerHTML += ` 
      <div class="card" style="width: 18rem;">
      <img src="${media}" class="news-image card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${title.slice(0, 20)}..</h5>
          <p class="card-text">${summary.slice(0, 50)}...</p>
      </div>
  </div> 
`
    }
  })
  .catch(err => console.log(err))

let newsSearch = () => {
    let search = document.getElementById("search")
    console.log(search.value)
  }