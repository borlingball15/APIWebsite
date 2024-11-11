// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Predefined responses for the chatbot
const chatbotResponses = {
  "hello": "yo! whats good? i'm an ai bot. how u been?",
  "how are you": "i'm chillin. wbu you good?",
  "how are you?": "i'm chillin. wbu you good?",
  "whats up": "nm. what's on ur mind?",
  "bye": "bet see ya soon",
  "joke": "u should look in the mirror. hahhhaha jk",
  "love": "love u too bro",
  "wyd": "just being an ai bot. ts not so fun",
  "god bless": " god bless g you a real one",
  "that's fire": "typeee shitt",
  "that's fire bro": "word",
  "default": "huh? idk what u js said. try again?",
  "yes": "bless thats good",
  "yea": "bless thats good",
  "no": "damn sorry ab that",
  "nah": "damn sorry ab that",
  "wyd": "nun much just vibin. wbu",
  "song recommendation": "no pole - don toliver. its been on loop for me",
  "what's the weather": "fr its brick out here. ",
};

// Chatbot endpoint
app.post('/chat', (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  let response = chatbotResponses[userMessage] || chatbotResponses["default"];
  res.json({ response });
});

// Start the server
app.listen(port, () => {
  console.log(`Chatbot API is running on http://localhost:${port}`);
});
