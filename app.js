document.addEventListener('DOMContentLoaded', function() {
    const getMessage = document.getElementById('get-message');
    const postMessage = document.getElementById('post-message');
    const messageForm = document.getElementById('message-form');
  
    // GET 요청 처리
    fetch('/api/message')
      .then(response => response.json())
      .then(data => {
        getMessage.textContent = data.message;
      })
      .catch(error => {
        console.error('Error fetching GET message:', error);
      });
  
    // POST 요청 처리
    messageForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const formData = new FormData(messageForm);
      const message = formData.get('message');
  
      fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      })
      .then(response => response.json())
      .then(data => {
        postMessage.textContent = `Received: ${data.received}`;
      })
      .catch(error => {
        console.error('Error sending POST message:', error);
      });
    });
  });
  