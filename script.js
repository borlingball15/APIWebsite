function enterChat() {
    document.getElementById('opening-page').style.display = 'none'; // Hide the opening page
    document.getElementById('chat-interface').style.display = 'flex'; // Show the chat interface
  }
  
  const cursor = document.getElementById("cursor");
  const title = document.getElementById("title");
  const button = document.getElementById("enter-button");
  
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });
  
  // Function to handle hover effect
  function addHoverEffect(element) {
    element.addEventListener("mouseenter", () => {
      element.classList.add("hovering");
      cursor.classList.add("hover");
    });
    element.addEventListener("mouseleave", () => {
      element.classList.remove("hovering");
      cursor.classList.remove("hover");
    });
  }
  
  // Function to add x-ray effect on hover
  function addXRayEffect(element) {
    const xrayDiv = document.createElement("div");
    xrayDiv.classList.add("xray-effect");
    element.classList.add("xray");
    element.appendChild(xrayDiv);
  
    element.addEventListener("mouseenter", () => {
      xrayDiv.style.opacity = "0";
    });
    element.addEventListener("mouseleave", () => {
      xrayDiv.style.opacity = "0.5";
    });
  }
  
  addHoverEffect(title);
  addHoverEffect(button);
  
  // attempt for xray effect
  addXRayEffect(title);
  addXRayEffect(button);
  
  // Simulating a simple chat function that interacts with your local API
  async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatOutput = document.getElementById("chat-output");
  
    //  user message
    chatOutput.innerHTML += `<div><b>You:</b> ${userInput}</div>`;
    
    // Clear input field
    document.getElementById("user-input").value = '';
  
    // Make a fetch request to local API 
    try {
        const response = await fetch('https://apiwebsite-uk45.onrender.com/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userInput }),
        });
      
        if (!response.ok) {
          throw new Error('API request failed');
        }
      
        const data = await response.json();
        const aiResponse = data.response || 'huh? idk what u just said. try again?';
        chatOutput.innerHTML += `<div><b>AI:</b> ${aiResponse}</div>`;
        chatOutput.scrollTop = chatOutput.scrollHeight;
      } catch (error) {
        console.error('Error:', error);
        chatOutput.innerHTML += `<div><b>AI:</b> Sorry, there was an error processing your request. Error: ${error.message}</div>`;
      }
    }