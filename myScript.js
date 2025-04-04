
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const body = document.body;
const chatContainer = document.querySelector('.chat-container');
const chatHeader = document.querySelector('.chat-header');
const themeToggle = document.getElementById('theme-toggle');

function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    if (userMessage.includes('hello') || userMessage.includes('hi')) {
        return "Hello there!";
    } else if (userMessage.includes('how are you')) {
        return "I'm doing well, thank you for asking!";
    } else if (userMessage.includes('what is your name')) {
        return "I am a simple AI Chatbot.";
    } else if (userMessage.includes('bye') || userMessage.includes('goodbye')) {
        return "Goodbye! Have a great day!";
    } else {
        return "I'm not sure how to respond to that. Can you ask something else?";
    }
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        appendMessage(message, 'user');
        userInput.value = '';
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            appendMessage(botResponse, 'bot');
        }, 500);
    }
}

userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  chatContainer.classList.toggle('dark-mode');
  chatHeader.classList.toggle('dark-mode');
  chatMessages.querySelectorAll('.message').forEach(message => message.classList.toggle('dark-mode'));
  document.querySelectorAll('.chat-input input[type="text"]').forEach(input => input.classList.toggle('dark-mode'));
  document.querySelectorAll('.chat-input').forEach(input => input.classList.toggle('dark-mode'));
  document.querySelectorAll('.chat-input button').forEach(button => button.classList.toggle('dark-mode'));
});
