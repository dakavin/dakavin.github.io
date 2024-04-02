var posts=["posts/fac34f51.html","posts/83f127d5.html","posts/b7e144d1.html","posts/56705aa1.html","posts/d4b6632d.html","posts/4110bbe2.html","posts/6c17d6bd.html","posts/678d5250.html","posts/c636a720.html","posts/4110bbe2.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };