let news = "";
let counter = 0;
fetch("https://newsapi.org/v2/everything?q=apple&from=2024-05-10&to=2024-05-10&sortBy=popularity&apiKey=eaf6aa3f8845485f94d1151694357608")
  .then((data) => data.json())
  .then((data) => {
    for (const x of data.articles) {
      if (counter < 5) {
        news += `
          <h1>${x.title}</h1>
          <p>${x.description}</p>
          `;
        counter++;
      } else {
        break; // Exit the loop once 10 articles are displayed
      }
    }
    const todays = document.querySelector("#news");
    todays.innerHTML = news;
  })
  .catch((error) => {
    console.error('Error fetching news:', error);
  });
