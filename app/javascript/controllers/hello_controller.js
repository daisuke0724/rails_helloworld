function test_controller(name) {
  let greeting = "Hello, " + name + "!";
  console.log(greeting);
  alert(greeting);
}


const clickButton = document.getElementById("greet-user-button");
clickButton.addEventListener('click', (event) => {
  test_controller('JavaScript')
});