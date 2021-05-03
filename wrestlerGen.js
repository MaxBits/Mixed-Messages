//Array of wrestler objects with name, and sayings
const wrestlerArray = [{
    name: 'Hulk Hogan',
    opponents: ['Macho Man','Stone Cold Steve Austin', 'The Rock', 'Chris Jericho'],
    sayings: ['Whatcha gonna do, when Hulkamania runs wild on you!', 'Hulkamania Is Running Wild, Brother', 'Jabroni', 
            'God created the Heavens, he created the earth! He created all the Hulkamaniacs! Then, he created a set of 24-inch pythons, brother!,', 
            'Well let me tell you something, brother!'],
}, {
    name: 'Macho Man',
    opponents: ['Hulk Hogan','Stone Cold Steve Austin', 'The Rock', 'Chris Jericho'],
    sayings: ['I\'m the tower of power, too sweet to be sour.', 'I\'m funky like a monkey. Sky\'s the limit and space is the place!', 
            'Too hot to handle, too cold to hold!', 'Expect the unexpected in the kingdom of madness!', 'Oooooh yeeeah!'],
}, {
    name: 'Stone Cold Steve Austin',
    opponents: ['Hulk Hogan','Macho Man', 'The Rock', 'Chris Jericho'],
    sayings: ['Austin 3:16 says I just whipped your @$$!', 'And that\'s the bottom line, cuz Stone Cold said so!', 
            'Tune in next week, same Stone Cold time, same Stone Cold Channel!', 'McMahon 3:16 says \'I just pissed my pants!\'', 
            'Does anybody have, a cold beer for Steve Austin?'],
}, {
    name: 'Rock',
    opponents: ['Hulk Hogan','Macho Man', 'Stone Cold Steve Austin', 'Chris Jericho'],
    sayings: ['It doesn\'t matter what your name is', 'You run around here looking like a big, fat bowl of Fruity Pebbles!', 
            'You want to go One on One with the Great One?', 'The Rock will Layeth the Smacketh Down all over your Candy Ass!', 
            'If you smell what The Rock….. is….. cookin’!'],
}, {
    name: 'Chris Jericho',
    opponents: ['Hulk Hogan','Macho Man', 'Stone Cold Steve Austin', 'The Rock'],
    sayings: ['You just made the list!', 'I\'m from Winnipeg, you idiot.', 'I give you the gift of Jericho. Drink it in, man.', 
            'I am the Ayatollah of Rock and Rolla!', 'Will you please shut the hell up?'],
}];

const ppvLocations = ['Wrestlemania', 'Summerslam', 'Survivor Series', 'Royal Rumble', 'King of the Ring', 'No Mercy', 'Backlash'];

const randIndex = (arr) => Math.floor(Math.random() * arr.length);

const cutPromo = () => {
    const index = randIndex(wrestlerArray);
    const wrestler = wrestlerArray[index].name
    const opponent = wrestlerArray[index].opponents[randIndex(wrestlerArray[index].opponents)];
    const saying = wrestlerArray[index].sayings[randIndex(wrestlerArray[index].sayings)];
    const location = ppvLocations[randIndex(ppvLocations)];

    console.log(`${wrestler} you are gonna face ${opponent} at ${location} \nWhat do you have to say to your opponent? \n${saying}`);
}
cutPromo();