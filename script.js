window.onload = function(){
    getRandomQuotes();
}

function getRandomQuotes(){
    var btn = document.getElementById("btn");
    btn.onclick = function(){
        var RandomQuotesArray = [
                "The only way to do great work is to love what you do.",
                "In three words I can sum up everything I've learned about life: it goes on.",
                "Success is not final, failure is not fatal: It is the courage to continue that counts.",
                "The only limit to our realization of tomorrow will be our doubts of today.",
                "The best way to predict the future is to create it.",
                "Life is what happens when you're busy making other plans.", 
                "Don't watch the clock; do what it does. Keep going.",
                "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                "The only person you are destined to become is the person you decide to be.",
                "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
                "Web development is all about turning a concept into reality with pixels and code.",
                "Behind every great website is a team of web developers who turn dreams into pixels.",
                "Good web developers write code that works. Great web developers write code that makes you think it was easy.",
                "The best web developers are those who can bring poetry to the prose of code.",
                "Web development is not just about creating websites; it's about crafting digital experiences that leave a lasting impression.",
                "Web development is a puzzle where every piece of code fits together to create a beautiful online picture."
            ];

        var randomQuote = document.getElementById("randomQuote");
        var rand = Math.floor(Math.random()*16);
        randomQuote.textContent = "\""+ RandomQuotesArray[rand]+ "\"";
    }
}