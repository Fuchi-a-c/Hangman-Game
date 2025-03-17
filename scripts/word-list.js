const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
    // Words with 11-13 letters
    {
        word: "unbelievable",
        hint: "Too extraordinary to be believed."
    },
    {
        word: "extraordinary",
        hint: "Very unusual or remarkable."
    },
    {
        word: "catastrophe",
        hint: "A sudden and widespread disaster."
    },
    {
        word: "exhilarating",
        hint: "Making one feel very happy, animated, or elated."
    },
    {
        word: "magnificent",
        hint: "Extremely beautiful, elaborate, or impressive."
    },
    {
        word: "irresistible",
        hint: "Too attractive or tempting to be resisted."
    },
    {
        word: "spectacular",
        hint: "Beautiful in a dramatic and eye-catching way."
    },
    {
        word: "courageous",
        hint: "Not deterred by danger or pain; brave."
    },
    {
        word: "exhilaration",
        hint: "A feeling of excitement, happiness, or elation."
    },
    {
        word: "illumination",
        hint: "Lighting or light."
    },
    {
        word: "sensational",
        hint: "Extremely impressive or thrilling."
    },
    {
        word: "exquisite",
        hint: "Extremely beautiful and, typically, delicate."
    },
    // Words with 4 letters
    {
        word: "moon",
        hint: "The natural satellite of the Earth."
    },
    {
        word: "star",
        hint: "A fixed luminous point in the night sky that is a large, remote incandescent body."
    },
    {
        word: "wind",
        hint: "The perceptible natural movement of the air, especially in the form of a current of air blowing from a particular direction."
    },
    {
        word: "tree",
        hint: "A woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground."
    },
    {
        word: "bird",
        hint: "A warm-blooded egg-laying vertebrate distinguished by the possession of feathers, wings, and a beak and (typically) by being able to fly."
    },
    {
        word: "fish",
        hint: "A limbless cold-blooded vertebrate animal with gills and fins living wholly in water."
    },
    {
        word: "book",
        hint: "A written or printed work consisting of pages glued or sewn together along one side and bound in covers."
    },
    {
        word: "time",
        hint: "The indefinite continued progress of existence and events in the past, present, and future regarded as a whole."
    },
    {
        word: "road",
        hint: "A wide way leading from one place to another, especially one with a specially prepared surface that vehicles can use."
    },
    {
        word: "fire",
        hint: "Combustion or burning, in which substances combine chemically with oxygen from the air and typically give out bright light, heat, and smoke."
    },
    {
        word: "love",
        hint: "An intense feeling of deep affection."
    },
    {
        word: "life",
        hint: "The condition that distinguishes animals and plants from inorganic matter, including the capacity for growth, reproduction, functional activity, and continual change preceding death."
    },
    {
        word: "serendipity",
        hint: "The occurrence and development of events by chance in a happy or beneficial way."
    },
    {
        word: "mysteriousness",
        hint: "The quality or state of being difficult to understand or explain."
    },
    {
        word: "fascinating",
        hint: "Extremely interesting or attractive; captivating."
    },
    {
        word: "adventureous",
        hint: "Full of excitement, exploration, and daring."
    },
    {
        word: "discovery",
        hint: "The act of finding or learning something for the first time."
    },
    {
        word: "inspiration",
        hint: "The process of being mentally stimulated to do or feel something, especially to do something creative."
    },
    {
        word: "wanderlust",
        hint: "A strong desire to travel and explore the world."
    },
    {
        word: "wonderful",
        hint: "Extremely pleasing or satisfying."
    },
    {
        word: "imagination",
        hint: "The faculty or action of forming new ideas, images, or concepts of external objects not present to the senses."
    },
    {
        word: "harmony",
        hint: "The combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect."
    },{
        word: "exploration",
        hint: "The action of traveling in or through an unfamiliar area in order to learn about it."
    },
    {
        word: "celebration",
        hint: "The action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity."
    },
    {
        word: "reflection",
        hint: "The throwing back by a body or surface of light, heat, or sound without absorbing it."
    },
    {
        word: "improvisation",
        hint: "The action of improvising, or of making something up on the spot."
    },
    {
        word: "tranquility",
        hint: "The quality or state of being tranquil; calmness; peacefulness; quiet; serenity."
    },
    {
        word: "resilience",
        hint: "The capacity to recover quickly from difficulties; toughness."
    },
    {
        word: "talk",
        hint: "The exchange of words or ideas between people."
    },
    {
        word: "creativity",
        hint: "The use of the imagination or original ideas, especially in the production of an artistic work."
    },
    {
        word: "inspiration",
        hint: "The process of being mentally stimulated to do or feel something, especially to do something creative."
    },
    {
        word: "collaboration",
        hint: "The action of working with someone to produce or create something."
    },
    {
        word: "spark",
        hint: "A small fiery particle thrown off from a fire, alight in ashes, or produced by striking together two hard surfaces such as stone or metal."
    },
    {
        word: "echo",
        hint: "A sound or sounds caused by the reflection of sound waves from a surface back to the listener."
    },
    {
        word: "dusk",
        hint: "The darker stage of twilight, especially in the evening."
    },
    {
        word: "dawn",
        hint: "The first appearance of light in the sky before sunrise."
    },
    {
        word: "hope",
        hint: "A feeling of expectation and desire for a certain thing to happen."
    },
    {
        word: "glimpse",
        hint: "A momentary or partial view."
    },
    {
        word: "dream",
        hint: "A series of thoughts, images, and sensations occurring in a person's mind during sleep."
    },
    {
        word: "muse",
        hint: "A person or personified force who is the source of inspiration for a creative artist."
    },
    {
        word: "joy",
        hint: "A feeling of great pleasure and happiness."
    },
    {
        word: "charm",
        hint: "The power or quality of giving delight or arousing admiration."
    },
    {
        word: "individuality",
        hint: "The quality or character of a particular person or thing that distinguishes them from others of the same kind, especially when strongly marked."
    },
    {
        word: "amazingly",
        hint: "In a manner that astonishes or impresses greatly."
    },
    {
        word: "independence",
        hint: "The fact or state of being independent."
    },
    {
        word: "entertainment",
        hint: "The action of providing or being provided with amusement or enjoyment."
    }
    
];