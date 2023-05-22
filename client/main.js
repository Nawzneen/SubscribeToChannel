const btnElement = document.getElementById("btn");
btnElement.addEventListener("click", (event) => {
  console.log("button is clicked");
});

const formElement = document.getElementById("form");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameValue = document.getElementById("name").value;
  const subscribedValue = document.getElementById("subscribedToChannel").value;

  const formData = {
    name: nameValue,
    subscribedToChannel: subscribedValue,
  };

  axios
    .post("http://localhost:3000/subscribers", formData)
    .then((response) => {
      console.log("success", response.data);
      alert("Subscriber added successfully");
    })
    .catch((error) => {
      console.error("error", error.response.data);
      alert("Failed. Please try again.");
    });
  formElement.reset();
});
window.addEventListener("load", () => {
  formElement.reset();
});
