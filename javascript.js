var quotes = [
    'The purpose of our lives is to be happy. — Dalai Lama',
    'Life is what happens when you’re busy making other plans. — John Lennon',
     'Get busy living or get busy dying.” — Stephen King',
     'You only live once, but if you do it right, once is enough.— Mae West',

  '“Many of life’s failures are people who did not realize how close they were to success when they gave up.”– Thomas A. Edison',
 '“If you want to live a happy life, tie it to a goal, not to people or things.”– Albert Einstein',

'"Never let the fear of striking out keep you from playing the game.”– Babe Ruth',

' “Money and success don’t change people; they merely amplify what is already there.” — Will Smith',

' “Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – Steve Jobs',


'“Not how long, but how well you have lived is the main thing.” — Seneca',

'“If life were predictable it would cease to be life, and be without flavor.” – Eleanor Roosevelt',

'“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”– Henry Ford',

'"If you can do what you do best and be happy, you’re further along in life than most people.” —Leonardo DiCaprio'

]
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
    
}