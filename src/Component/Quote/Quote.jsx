import React from 'react';
import './Quote.css';

const quotesData = [
  {
    text: "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    author: 'Adam Scott'
  },
  {
    text: "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
    author: 'Adelle Davis'
  },
  {
    text: "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
    author: 'Adelle Davis'
  },
  {
    text: "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
    author: 'Albert Einstein'
  },
  {
    text: "Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
    author: 'Alice May Brock'
  },
  {
    text: "Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, Your fatness is an affront to me, so we have the right to treat you as offensively as you appear. Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.",
    author: 'Anthelme Brillat-Savarin'
  },
  {
    text: "Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!",
    author: 'Calvin Trillin'
  },
  {
    text: "Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.",
    author: 'Calvin Trillin'
  },
  {
    text: "Tell me what you eat, and I will tell you what you are.",
    author: 'Cyra McFadden'
  },
  {
    text: "Health food makes me sick.",
    author: 'Eike von Repkow'
  }
];

const Quote = () => {
  return (
    <section className="quote-section">
      {quotesData.map((quote, index) => (
        <div className="quote-card" key={index}>
          <p className="quote-text">"{quote.text}"</p>
          <p className="quote-author">- {quote.author}</p>
        </div>
      ))}
    </section>
  );
};

export default Quote;
