// Import express 
const express = require('express');

// Create our express app 
const app = express();

let games = [
    {name: 'Minecraft',
     funLevel: 5  
    },
    {name: 'CoD',
     funLevel: 6   
    },
    {name: 'Super Mario Bros',
     funLevel: 7  
    },
    {name: 'Final Fantasy 7',
     funLevel: 10
    },
];
//                 request, response
app.get('/games', (req, res) => {
    // This code is run when someone asks to get games 
    // ie. goes to http://localhost:5000/games 

    // Send the games back to the client 
    res.send(games);
});



// Share my client side files
// with public (as in, anyone that wants them)
app.use(express.static('server/public'));

app.listen(5000, ()=> {
    console.log('🌽 I\'m listening....');

});

console.log(`Look ma, I'm a server!`);

