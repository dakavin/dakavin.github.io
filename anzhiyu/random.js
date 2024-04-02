var posts=["posts/fac34f51.html","posts/83f127d5.html","posts/d68e5e2f.html","posts/56705aa1.html","posts/4110bbe2.html","posts/4110bbe2.html","posts/d4b6632d.html","posts/678d5250.html","posts/6c17d6bd.html","posts/c636a720.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };