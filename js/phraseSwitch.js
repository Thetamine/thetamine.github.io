const words = [
    'iOS',
    'android',
    'desktop',
    'mobile',
    'web'

]

const phrase = document.getElementById('phrase');

// function: take element 'target', take text value, 
// sideffect: change current text value to new text value
// return value is void

const switchValue = (target, value) => target.innerText = value;

const cyclePhrases = (phrases) => {
    let index = 0;
    const cycleHandler = () => {
        switchValue(phrase, phrases[index]);
        phrase.dataset.words = phrases[index];
        index = (index + 1) % phrases.length;
    } 
    const intervalId = setInterval(cycleHandler, 140);
} 

cyclePhrases(words);
