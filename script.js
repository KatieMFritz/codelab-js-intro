var jokes = ["How do you make a Kleenex dance? Put a little boogie in it!", "Two guys walk into a bar, the third one ducks.", "I had a dream that I was a muffler last night. I woke up exhausted!", "Why can’t you hear a pterodactyl use the bathroom? Because the P is silent."];

function randomjoke() {

 document.getElementById('getjoke') = jokes[Math.floor(Math.random() * jokes.length)];

}

function testfunction() {
  alert("Here's a joke");
}
