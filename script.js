const Questions = {
    Math: [
        { question: "What is 64/8?" , options: ["8","0","4","2"], answer:"8"},
        { question: "What is the positive square root of 4 ?" , options: ["2","0","4","8"], answer:"2"},
        { question: "What is 9+10?" , options: ["21","19","90","900"], answer:"19"},
        { question: "What is the derivate of x?" , options: ["1","x","x^2","pi"], answer:"1"},
        { question: "What is 3*6" , options: ["18","0","99","9"], answer:"18"},
        { question: "What are the first 5 digits of pi?" , options: ["3.14157","3.14158","3.14159","3.14167"], answer:"3.14159"},
        { question: "What is 6%3 (modulo)?" , options: ["3","0","18","2"], answer:"0"},
        { question: "What is 9/0" , options: ["undefined","0","9","negative infinity"], answer:"undefined"},
        { question: "What is 3!" , options: ["6","3","2","1"], answer:"6"},
        { question: "What is X if 56=8x?" , options: ["8","7","56","32"], answer:"7"},
    ],

    Science: [
        { question: "What planet is known as the Red Planet?", options: ["Mars", "Earth", "Venus", "Jupiter"], answer: "Mars" },
        { question: "What part of the cell contains DNA?", options: ["Nucleus", "Cytoplasm", "Cell wall", "Membrane"], answer: "Nucleus"},
        { question: "What is H2O commonly known as?", options: ["Water","Oxygen","Hydrogen","Salt"], answer: "Water" },
        { question: "What force keeps us on the ground?", options: ["Gravity","Magnetism","Friction","Pressure"], answer: "Gravity" },
        { question: "What planet is closest to the Sun?", options: ["Mercury","Venus","Earth","Mars"], answer: "Mercury" },
        { question: "What organ pumps blood through your body?", options: ["Heart","Brain","Lungs","Kidney"], answer: "Heart" },
        { question: "What gas do humans breathe in to survive?", options: ["Oxygen","Carbon dioxide","Nitrogen","Helium"], answer: "Oxygen" },
        { question: "What is the chemical symbol for gold?", options: ["Au","Ag","Gd","Go"], answer: "Au" },
        { question: "How many legs does an insect have?", options: ["6","4","8","10"], answer: "6" },
    ],
    

    History: [
        { question: "Who was the first President of the United States?", options: ["George Washington","Abraham Lincoln","John Adams","Thomas Jefferson"], answer: "George Washington" },
        { question: "In what year did World War II end?", options: ["1945","1939","1918","1963"], answer: "1945" },
        { question: "Who discovered America in 1492?", options: ["Christopher Columbus","Marco Polo","Magellan","Vasco da Gama"], answer: "Christopher Columbus" },
        { question: "Which ancient civilization built the pyramids?", options: ["Egyptians","Romans","Greeks","Mayans"], answer: "Egyptians" },
        { question: "What wall divided Berlin during the Cold War?", options: ["Berlin Wall","Great Wall","Iron Curtain","Wall of China"], answer: "Berlin Wall" },
        { question: "Who wrote the Declaration of Independence?", options: ["Thomas Jefferson","Benjamin Franklin","John Adams","James Madison"], answer: "Thomas Jefferson" },
        { question: "What ship sank in 1912 after hitting an iceberg?", options: ["Titanic","Mayflower","Endeavour","Santa Maria"], answer: "Titanic" },
        { question: "Who was known as the 'Maid of OrlÃ©ans'?", options: ["Joan of Arc","Cleopatra","Queen Victoria","Marie Curie"], answer: "Joan of Arc" },
        { question: "Which empire was ruled by Julius Caesar?", options: ["Roman Empire","Greek Empire","Mongol Empire","British Empire"], answer: "Roman Empire" },
        { question: "What country was led by Napoleon Bonaparte?", options: ["France","Germany","Italy","Spain"], answer: "France" },
    ],


    Geography:  [
        { question: "What is the largest ocean on Earth?", options: ["Pacific Ocean","Atlantic Ocean","Indian Ocean","Arctic Ocean"], answer: "Pacific Ocean" },
        { question: "What is the capital of France?", options: ["Paris","London","Berlin","Rome"], answer: "Paris" },
        { question: "Which continent is the Sahara Desert located on?", options: ["Africa","Asia","Australia","North America"], answer: "Africa" },
        { question: "Which is the smallest continent?", options: ["Australia","Europe","Antarctica","South America"], answer: "Australia" },
        { question: "Which U.S. state is known as the 'Sunshine State'?", options: ["Florida","California","Texas","Hawaii"], answer: "Florida" },
        { question: "Mount Everest lies between Nepal and which country?", options: ["China","India","Pakistan","Bhutan"], answer: "China" },
        { question: "What river runs through Egypt?", options: ["Nile","Amazon","Mississippi","Yangtze"], answer: "Nile" },
        { question: "What is the largest country in the world by area?", options: ["Russia","Canada","China","United States"], answer: "Russia" },
        { question: "What is the capital city of Japan?", options: ["Tokyo","Kyoto","Osaka","Seoul"], answer: "Tokyo" },
        { question: "Which ocean borders California?", options: ["Pacific Ocean","Atlantic Ocean","Indian Ocean","Arctic Ocean"], answer: "Pacific Ocean" },
    ],

    English: [
        { question: "Which word is a noun?", options: ["Cat","Run","Quickly","Beautiful"], answer: "Cat" },
        { question: "What is the past tense of 'go'?", options: ["Went","Goed","Gone","Going"], answer: "Went" },
        { question: "Which of these is a synonym for 'happy'?", options: ["Joyful","Angry","Sad","Bored"], answer: "Joyful" },
        { question: "Which punctuation mark ends a question?", options: ["?","!",".",","], answer: "?" },
        { question: "What is the opposite of 'cold'?", options: ["Hot","Cool","Warmish","Freeze"], answer: "Hot" },
        { question: "What part of speech is the word 'quickly'?", options: ["Adverb","Noun","Verb","Adjective"], answer: "Adverb" },
        { question: "What is the plural form of 'child'?", options: ["Children","Childs","Childes","Childer"], answer: "Children" },
        { question: "Complete the sentence: She ___ to the store.", options: ["went","go","gone","going"], answer: "went" },
        { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare","Mark Twain","Charles Dickens","Jane Austen"], answer: "William Shakespeare" },
        { question: "Which word is an adjective?", options: ["Blue","Run","Happily","Fastly"], answer: "Blue" },
    ],

    Art:

    Music: [
        { question: "Which musical symbol indicates silence?", options: ["Rest","Note","Clef","Sharp"], answer: "Rest" },
        { question: "How many strings does a standard guitar have?", options: ["6","4","8","5"], answer: "6" },
        { question: "What is the highest female singing voice?", options: ["Soprano","Alto","Tenor","Bass"], answer: "Soprano" },
        { question: "Which composer became deaf later in life?", options: ["Beethoven","Mozart","Bach","Chopin"], answer: "Beethoven" },
        { question: "What does 'tempo' mean in music?", options: ["Speed","Pitch","Volume","Style"], answer: "Speed" },
        { question: "Which instrument family does the flute belong to?", options: ["Woodwind","Brass","Percussion","String"], answer: "Woodwind" },
        { question: "Which symbol raises a note by a semitone?", options: ["Sharp (#)","Flat (b)","Natural","Rest"], answer: "Sharp (#)" },
        { question: "How many notes are there in a musical octave?", options: ["8","5","12","6"], answer: "8" },
        { question: "Which famous band wrote 'Hey Jude'?", options: ["The Beatles","The Rolling Stones","Queen","Pink Floyd"], answer: "The Beatles" },
        { question: "What is the large drum in an orchestra called?", options: ["Bass Drum","Snare Drum","Tom","Cymbal"], answer: "Bass Drum" },
    ],

    Computer Science:

    PE:

};
