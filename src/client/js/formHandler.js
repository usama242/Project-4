function handleSubmit(event) {
  event.preventDefault();
  const input_url = document.querySelectorAll("input[name=test-url]");

  //Verify that input is a valid url
  if (Client.checkForURL(JSON.parse(JSON.stringify(input_url[0].value)))) {
    console.log("URL is valid");
    fetch("http://localhost:8000/article", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: input_url[0].value }),
    })
      .then((res) => res.json())
      .then(function (res) {
        console.log(res);
        // update HTML dynamically
        document.querySelector("#polarity").innerHTML =
          "<h5>Polarity: </h5>" + res.polarity;
        document.querySelector("#polarity_confidence").innerHTML =
          "<h5>Polarity Confidence: </h5>" + res.polarity_confidence;
        document.querySelector("#subjectivity").innerHTML =
          "<h5>Subjectivity: </h5>" + res.subjectivity;
        document.querySelector("#subjectivity_confidence").innerHTML =
          "<h5>Subjectivity Confidence: </h5>" + res.subjectivity_confidence;
        document.querySelector("#text").innerHTML =
          "<h5>Text: </h5>" + res.text;
      });
  } else {
    alert(
      "The URL:[" +
        JSON.stringify(input_url[0].value) +
        "] is not valid. Please enter a valid url"
    );
  }
}

export { handleSubmit };
