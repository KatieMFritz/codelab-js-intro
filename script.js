var jokes = ["How do you make a Kleenex dance? Put a little boogie in it!", "Two guys walk into a bar, the third one ducks.", "I had a dream that I was a muffler last night. I woke up exhausted!", "Why can’t you hear a pterodactyl use the bathroom? Because the P is silent."];

var randomjoke = jokes[Math.floor(Math.random() * jokes.length)];

function getjoke() {
  alert(randomjoke);
}
