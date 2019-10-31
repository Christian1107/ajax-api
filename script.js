fetch("https://www.reddit.com/r/aww/.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let postEl = document.querySelector(".posts");
    for (const entry of data.data.children) {
      let titleEl = document.createElement("h1");
      titleEl.innerText = entry.data.title;
      postEl.appendChild(titleEl);

      let imageEl = document.createElement("img");
      imageEl.setAttribute("src", entry.data.thumbnail);
      postEl.appendChild(imageEl);

      let linkEl = document.createElement("a");
      postEl.appendChild(linkEl);
      let link = document.createTextNode("This is a link");
      linkEl.appendChild(link);
      linkEl.title = "This is a link";

      linkEl.setAttribute(
        "href",
        `https://www.reddit.com${entry.data.permalink}` // permalink
      );
      postEl.appendChild(linkEl);
    }
  });
