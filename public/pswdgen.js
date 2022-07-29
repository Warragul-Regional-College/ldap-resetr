const request = require( "request" )

let dictionary = ["able", "about", "above", "acres", "act", "add", "adult", "after",
    "again", "age", "ago", "agree", "ahead", "aid", "air", "alike", "alive",
    "all", "allow", "alone", "along", "aloud", "also", "among", "angle",
    "angry", "ants", "any", "apart", "apple", "are", "area", "arm", "army",
    "arrow", "art", "aside", "ask", "ate", "atom", "avoid", "aware", "away",
    "baby", "back", "bad", "badly", "bag", "ball", "band", "bank", "bar",
    "bare", "bark", "barn", "base", "basic", "basis", "bat", "bean", "bear",
    "beat", "bee", "been", "began", "begun", "being", "bell", "below",
    "belt", "bend", "bent", "best", "bet", "bill", "birds", "birth", "bit",
    "bite", "black", "blank", "blew", "blind", "block", "blood", "blow",
    "blue", "board", "boat", "body", "bone", "book", "born", "both",
    "bound", "bow", "bowl", "box", "boy", "brain", "brass", "brave",
    "bread", "break", "brick", "brief", "bring", "broad", "broke", "brown",
    "brush", "build", "built", "burn", "burst", "bus", "bush", "busy",
    "but", "buy", "cabin", "cage", "cake", "call", "calm", "came", "camp",
    "can", "canal", "cap", "car", "card", "care", "carry", "case", "cast",
    "cat", "catch", "cause", "cave", "cell", "cent", "chain", "chair",
    "chart", "check", "chest", "chief", "child", "chose", "city", "class",
    "claws", "clay", "clean", "clear", "climb", "clock", "close", "cloth",
    "cloud", "club", "coach", "coal", "coast", "coat", "cold", "color",
    "come", "cook", "cool", "copy", "corn", "cost", "could", "count",
    "court", "cover", "cow", "crack", "cream", "crew", "crop", "cross",
    "crowd", "cry", "cup", "curve", "cut", "daily", "dance", "dark", "date",
    "dawn", "day", "dead", "deal", "dear", "death", "deep", "deer", "depth",
    "desk", "did", "die", "dig", "dirt", "dirty", "dish", "does", "dog",
    "doing", "doll", "done", "door", "dot", "doubt", "down", "dozen",
    "draw", "drawn", "dream", "dress", "drew", "dried", "drink", "drive",
    "drop", "drove", "dry", "duck", "due", "dug", "dull", "dust", "duty",
    "each", "eager", "ear", "early", "earn", "earth", "east", "easy", "eat",
    "eaten", "edge", "egg", "eight", "else", "empty", "end", "enemy",
    "enjoy", "enter", "equal", "even", "event", "ever", "every", "exact",
    "exist", "extra", "eye", "face", "fact", "fair", "fall", "far", "farm",
    "fast", "fat", "fear", "fed", "feed", "feel", "feet", "fell", "felt",
    "fence", "few", "fewer", "field", "fifth", "fifty", "fight", "fill",
    "film", "final", "find", "fine", "fire", "firm", "first", "fish",
    "five", "fix", "flag", "flame", "flat", "flew", "flies", "floor",
    "flow", "fly", "fog", "folks", "food", "foot", "for", "force", "form",
    "fort", "forth", "forty", "found", "four", "fox", "frame", "free",
    "fresh", "frog", "from", "front", "fruit", "fuel", "full", "fully",
    "fun", "funny", "fur", "gain", "game", "gas", "gate", "gave", "get",
    "giant", "gift", "girl", "give", "given", "glad", "glass", "globe",
    "goes", "gold", "gone", "good", "goose", "got", "grade", "grain",
    "graph", "grass", "gray", "great", "green", "grew", "group", "grow",
    "grown", "guard", "guess", "guide", "gulf", "gun", "habit", "had",
    "hair", "half", "hall", "hand", "hang", "happy", "hard", "has", "hat",
    "have", "hay", "heard", "heart", "heat", "heavy", "held", "hello",
    "help", "her", "herd", "here", "hide", "high", "hill", "him", "his",
    "hit", "hold", "hole", "home", "honor", "hope", "horn", "horse", "hot",
    "hour", "house", "how", "huge", "human", "hung", "hunt", "hurry",
    "hurt", "ice", "idea", "ill", "image", "inch", "into", "iron", "its",
    "jack", "jar", "jet", "job", "join", "joy", "judge", "jump", "just",
    "keep", "kept", "key", "kids", "kill", "kind", "knew", "knife", "know",
    "known", "label", "labor", "lack", "lady", "laid", "lake", "lamp",
    "land", "large", "last", "late", "later", "laugh", "law", "lay", "lead",
    "leaf", "learn", "least", "leave", "led", "left", "leg", "let", "level",
    "lie", "life", "lift", "light", "like", "line", "lion", "lips", "list",
    "live", "load", "local", "log", "long", "look", "loose", "lose", "loss",
    "lost", "lot", "loud", "love", "low", "lower", "luck", "lucky", "lunch",
    "lungs", "lying", "mad", "made", "magic", "mail", "main", "major",
    "make", "man", "many", "map", "mark", "mass", "may", "maybe", "meal",
    "mean", "means", "meant", "meat", "meet", "men", "met", "metal", "mice",
    "might", "mile", "milk", "mill", "mind", "mine", "mix", "model",
    "money", "month", "mood", "moon", "more", "most", "motor", "mouse",
    "mouth", "move", "movie", "mud", "music", "must", "nails", "name",
    "near", "neck", "needs", "nest", "never", "new", "news", "next", "nice",
    "night", "nine", "noise", "none", "noon", "nor", "north", "nose", "not",
    "note", "noted", "noun", "now", "nuts", "occur", "ocean", "off",
    "offer", "oil", "old", "older", "once", "one", "only", "onto", "open",
    "orbit", "order", "other", "ought", "our", "out", "outer", "over",
    "own", "owner", "pack", "page", "paid", "pain", "paint", "pair", "pale",
    "pan", "paper", "park", "part", "parts", "party", "pass", "past",
    "path", "pay", "peace", "pen", "per", "pet", "piano", "pick", "pie",
    "piece", "pig", "pile", "pilot", "pine", "pink", "pipe", "pitch",
    "place", "plain", "plan", "plane", "plant", "plate", "play", "plus",
    "poem", "poet", "point", "pole", "pond", "pony", "pool", "poor",
    "porch", "port", "post", "pot", "pound", "pour", "power", "press",
    "price", "pride", "prize", "proud", "prove", "pull", "pupil", "pure",
    "push", "put", "queen", "quick", "quiet", "quite", "race", "radio",
    "rain", "raise", "ran", "ranch", "range", "rate", "raw", "rays",
    "reach", "read", "ready", "real", "rear", "red", "refer", "rest",
    "rhyme", "rice", "rich", "ride", "right", "ring", "rise", "river",
    "road", "roar", "rock", "rocky", "rod", "roll", "roof", "room", "root",
    "rope", "rose", "rough", "round", "route", "row", "rule", "ruler",
    "run", "rush", "sad", "safe", "said", "sail", "sale", "salt", "same",
    "sand", "sang", "sat", "save", "saved", "saw", "say", "scale", "scene",
    "score", "sea", "seat", "see", "seed", "seems", "seen", "sell", "send",
    "sense", "sent", "serve", "sets", "seven", "shade", "shake", "shall",
    "shape", "share", "sharp", "she", "sheep", "sheet", "shelf", "shine",
    "ship", "shirt", "shoe", "shoot", "shop", "shore", "short", "shot",
    "shout", "show", "shown", "shut", "sick", "sides", "sight", "sign",
    "silk", "silly", "since", "sing", "sink", "sit", "six", "size", "skill",
    "skin", "sky", "slabs", "slave", "sleep", "slept", "slide", "slip",
    "slope", "slow", "small", "smell", "smile", "smoke", "snake", "snow",
    "soap", "soft", "soil", "solar", "sold", "solid", "solve", "some",
    "son", "song", "soon", "sort", "sound", "south", "space", "speak",
    "speed", "spell", "spend", "spent", "spin", "spite", "split", "sport",
    "stage", "stand", "star", "start", "state", "stay", "steam", "steel",
    "steep", "stems", "step", "stick", "stiff", "still", "stock", "stone",
    "stood", "stop", "store", "storm", "story", "stove", "straw", "strip",
    "stuck", "such", "sugar", "suit", "sum", "sun", "sure", "swam", "sweet",
    "swept", "swim", "swing", "swung", "table", "tail", "take", "taken",
    "tales", "talk", "tall", "tank", "tape", "task", "taste", "tax", "tea",
    "teach", "team", "tears", "teeth", "tell", "ten", "tent", "term",
    "test", "than", "thank", "that", "thee", "them", "then", "there",
    "these", "they", "thick", "thin", "thing", "think", "third", "this",
    "those", "thou", "three", "threw", "throw", "thumb", "thus", "thy",
    "tide", "tie", "tight", "till", "time", "tin", "tiny", "tip", "tired",
    "title", "today", "told", "tone", "too", "took", "tool", "top", "topic",
    "torn", "total", "touch", "tower", "town", "toy", "trace", "track",
    "trade", "trail", "train", "trap", "tree", "tribe", "trick", "tried",
    "trip", "truck", "trunk", "truth", "try", "tube", "tune", "turn",
    "twice", "two", "type", "uncle", "under", "union", "unit", "until",
    "upon", "upper", "use", "using", "usual", "value", "vapor", "vast",
    "verb", "very", "view", "visit", "voice", "vote", "vowel", "wagon",
    "wait", "walk", "wall", "want", "war", "warm", "warn", "was", "wash",
    "waste", "watch", "water", "wave", "way", "weak", "wear", "week",
    "weigh", "well", "went", "were", "west", "wet", "whale", "what",
    "wheat", "wheel", "when", "where", "which", "while", "white", "who",
    "whole", "whom", "whose", "why", "wide", "wife", "wild", "will", "win",
    "wind", "wing", "wire", "wise", "wish", "with", "wolf", "women", "won",
    "wood", "wool", "word", "wore", "work", "world", "worry", "worse",
    "worth", "would", "write", "wrong", "wrote", "yard", "year", "yes",
    "yet", "you", "young", "your", "youth", "zero", "zoo"
];



const specials = "!?$%&=";
function randomSpecialChar() { return specials.substr(Math.floor(specials.length*Math.random()), 1); }
function capitalize(s) { return s[0].toUpperCase() + s.slice(1); }
function validString(str) { return str != null && typeof str === "string" && str.length > 0; }

module.exports = {
    generatePassword : (words = 2, camelCase = true, requireNumbers = true, prependSpecial = false, appendSpecial = true) => {
        let parts = [];
        if (prependSpecial) parts.push( randomSpecialChar() );
        for (let i = 0; i < words; i++) {
            let randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
            if (camelCase && i>0) randomWord = capitalize(randomWord);
            parts.push(randomWord);
            if (requireNumbers){
                const randomNumber = Math.floor(Math.random() * 8) + 2;
                parts.push(randomNumber);
            }
        }
        if (appendSpecial) parts.push( randomSpecialChar() );
        return String(parts.join(""));
    },
    fetchDino : (strong = true, proxy = '') => {
        return new Promise(function(resolve, reject) {
            const options = {
                url: 'https://www.dinopass.com/password/' + (strong ? 'strong' : 'simple'),
                timeout : 8000
            }
            if (validString(proxy)) options.proxy = proxy;
            request.get(options, function (error, response, body) {
                if (error) reject(error);
                if (!body || body==="") reject("Fetch Error");
                resolve(body);
            });
        });
    }
};