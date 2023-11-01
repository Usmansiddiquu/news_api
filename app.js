let getNews = (search, page) => {
    fetch(`https://api.newscatcherapi.com/v2/search?q=${search}&page_size=12&page=${page ? page : 1}`, {
        headers: {
            'x-api-key': 'tALHqDfvsKylZD8tlTKTuQokjTsT7MdX2hGRWPghptM'
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            let news = document.getElementById("news");
            const articles = res.articles
            for (var i = 0; i < articles.length; i++) {
                const { media, title, summary } = articles[i];
                console.log(articles[i])
                news.innerHTML += `
        <div class="card mt-2" style="width: 18rem;">
        <img src="${media}" class="news-image card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${title.slice(0, 20)}...</h5>
        <p class="card-text">${summary.slice(0, 50)}...</p>
        </div>
        </div>
        `
            }
        })
        .catch(err => console.log(err))
}

getNews()

let page = 1;

let newsSearch = () => {
    let news = document.getElementById("news");
    let search = document.getElementById("search");
    news.innerHTML = ""
    getNews(search.value)
}

let loadMore = () => {
    let search = document.getElementById("search");
    page++
    getNews(search.value, page)
}