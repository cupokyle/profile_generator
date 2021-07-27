const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? :) ', (name) => {
  console.log(`That's an awesome name, ${name}!`);
  rl.question('What\'s an activity you like to do for fun? ', (activity) => {
    console.log(`Ooh that's a fun one! I love ${activity}`);
    rl.question('What do you listen to while you do that? ', (music) => {
      console.log(`Hmm.. Never heard of ${music}`);
      rl.question('Which meal-time is your favourite? ', (mealtime) => {
        console.log(`${mealtime}?! That's what I would've said! `);
        rl.question('What\'s your favourite thing to eat for that meal? ', (meal) => {
          console.log(`I'll take an order of that please! I love ${meal}`);
          rl.question('What sport is your absolute favourite? ', (sport) => {
            console.log(`${sport} is a sport?`);
            rl.question('In a few words, tell us what your superpower is! ', (power) => {
              console.log(`Very boring...`);
              setTimeout(() => {
                console.log(`${name} loves listening to ${music} while ${activity}, devouring ${meal}  for ${mealtime}, prefers ${sport} over any other \"sport\", and has the incredible ability to use ${power}. ¯\\_(ツ)_/¯`);
              }, 3000);


              rl.close();
            });
          });
        });
      });
    });
  });
});
