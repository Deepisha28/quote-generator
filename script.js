const quotes = {
    motivational: [
      "The only way to do great work is to love what you do. – Steve Jobs",
      "Believe you can and you're halfway there. – Theodore Roosevelt",
      "It does not matter how slowly you go as long as you do not stop. – Confucius",
      "You are never too old to set another goal or to dream a new dream. – C.S. Lewis"
    ],
    inspirational: [
      "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
      "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
      "The best way to predict your future is to create it. – Abraham Lincoln",
      "It always seems impossible until it’s done. – Nelson Mandela"
    ],
    success: [
      "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
      "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
      "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
      "Opportunities don't happen, you create them. – Chris Grosser"
    ]
  };
  
  let currentCategory = "";
  
  function showQuotes(category) {
    alert(`You selected the ${category} category!`);
  }
   
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    document.getElementById('quote').textContent = quotes[currentCategory][randomIndex];
  }
  