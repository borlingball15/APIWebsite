// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS
app.use(cors({
  origin: 'https://borlingball15.github.io/APIWebsite/'  // front end url
}));


// Middleware to parse JSON requests
app.use(express.json());

// Predefined responses for the chatbot
const chatbotResponses = {
  "hello": "yo! whats good? i'm an ai bot. how u been?",
  "how are you": "i'm chillin. wbu you good?",
  "how are you?": "i'm chillin. wbu you good?",
  "whats up": "nm. what's on ur mind?",
  "bye": " see ya soon",
  "joke": "u should look in the mirror. hahhhaha jk",
  "love": "love u too bro",
  "wyd": "just being an ai bot. not so fun",
  "im tired": "meeeee tooooo",
  "im good": "yippieee! how was ur day?",
  "good": "bless",
  "bad": "damn hopefully it gets better",
  "just chilling": "u n me both",
  "god bless": " god bless you a real one",
  "that's fire": "typeee shitt",
  "that's fire bro": "word",
  "default": "huh? idk what u just said. try again?",
  "yes": "bless thats good",
  "yea": "bless thats good",
  "no": "damn sorry ab that",
  "nah": " sorry ab that",
  "wyd": "nun much just vibin. wbu",
  "song recommendation": "no pole - don toliver. its been on loop for me",
  "what's the weather": " idk you should go out and see maybe ",
};

// Chatbot endpoint
app.post('/chat', (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  console.log("Received message:", userMessage);  // Log the incoming message
  let response = chatbotResponses[userMessage] || chatbotResponses["default"];
  console.log("Response:", response);  // Log the response
  res.json({ response });
});

// Start the server
app.listen(port, () => {
  console.log(`Chatbot API is running on http://localhost:${port}`);
});
