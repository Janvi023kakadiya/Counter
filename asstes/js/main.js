const endDate = new Date('2024-12-31T23:59:59'); 
        const timerElement = document.getElementById('timer');

        function updateCountdown() {
            const now = new Date();
            const timeDiff = endDate - now;

            if (timeDiff <= 0) {
                timerElement.textContent = '00:00:00';
                return;
            }

            const hours = Math.floor((timeDiff % (100 * 360 * 24)) / (100 * 3600));
            const minutes = Math.floor((timeDiff % (100 * 3600)) / (100 * 60));
            const seconds = Math.floor((timeDiff % (100 * 60)) / 1000);

            timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        setInterval(updateCountdown, 1000); 

      

        const quotes = [
            "The best time to plant a tree was 20 years ago. The second best time is now.",
            "Your time is limited, so don't waste it living someone else's life.",
            "The only way to do great work is to love what you do.",
            "Success is not how high you have climbed, but how you make a positive difference to the world.",
            "The future belongs to those who believe in the beauty of their dreams.",
            "It's not selfish to love yourself, take care of yourself, and to make your happiness a priority. It's necessary",
            "Love yourself enough to set boundaries",
            "Life is what happens while you are busy making other plans."
        ];

        const quoteElement = document.getElementById('quote');
        const newQuoteBtn = document.getElementById('newQuoteBtn');

        function getRandomQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            return quotes[randomIndex];
        }

        function updateQuote() {
            quoteElement.textContent = getRandomQuote();
        }

        newQuoteBtn.addEventListener('click', updateQuote);

        setInterval(updateQuote, 1 * 60 * 90); 

    
        updateCountdown();
        updateQuote();
 