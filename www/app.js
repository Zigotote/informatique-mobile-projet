var content = document.querySelector("ion-content");
const api_url = "https://devfest-nantes-2018-api.cleverapps.io/blog";
const image_utl = "https://devfest2018.gdgnantes.com";
fetch(api_url).then((blob) =>
  blob.json().then((data) => {
    data.map((entry) => {
      console.log(entry);
      var card = document.createElement("ion-card");
      var image = document.createElement("img");
      image.src = image_utl.concat("", entry.image);
      var title = document.createElement("ion-card-title");
      title.append(entry.title);
      var card_content = document.createElement("ion-card-content");
      card_content.append(entry.brief);
      card.append(image, title, card_content);
      content.append(card);
    });
  })
);
