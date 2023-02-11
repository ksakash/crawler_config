function onSubmitClick() {

    var crawlerTypeElement = document.getElementById("crawlers");
    var crawler_type = crawlerTypeElement.value;

    var siteElement = document.getElementById("sites");
    var site_name = siteElement.value;

    var data = {
        "crawler_type": crawler_type,
        "site_name": site_name
    };

    fetch('http://localhost:8000/crawler_class', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json());
}

var button = document.querySelector("button#submit_button");
button.addEventListener("click", onSubmitClick);
