// okay there ends some nerd stuff and now there's my code, at least at some point
// function from https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript
function generate_random_string(len) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
const auth_id = generate_random_string(24);
let item_id_to_name = 
{
    1: 'The Sad Onion', 
    2: 'The Inner Eye', 
    3: 'Spoon Bender', 
    4: "Cricket's Head", 

    5: 'My Reflection', 
    6: 'Number One', 
    7: 'Blood of the Martyr', 
    8: 'Brother Bobby', 
    9: 'Skatole', 
    10: 'Halo of Flies', 
    11: '1up!', 
    12: 'Magic Mushroom', 
    13: 'The Virus', 
    14: 'Roid Rage', 
    15: '<3', 
    16: 'Raw Liver', 
    17: 'Skeleton Key', 
    18: 'A Dollar', 
    19: 'Boom!', 
    20: 'Transcendence', 
    21: 'The Compass', 
    22: 'Lunch', 
    23: 'Dinner', 
    24: 'Dessert', 
    25: 'Breakfast', 
    26: 'Rotten Meat', 
    27: 'Wooden Spoon', 
    28: 'The Belt', 
    29: "Mom's Underwear", 

    30: "Mom's Heels", 

    31: "Mom's Lipstick", 

    32: 'Wire Coat Hanger', 
    33: 'The Bible',
    34: 'The Book of Belial', 
    35: 'The Necronomicon', 
    36: 'The Poop', 
    37: 'Mr. Boom', 38: "Tammy's Head", 
39: "Mom's Bra", 
40: 'Kamikaze!', 41: "Mom's Pad", 
42: "Bob's Rotten Head", 
43: '', 44: 'Teleport!', 45: 'Yum Heart', 46: 'Lucky Foot', 47: "Doctor's Remote", 
48: "Cupid's Arrow", 
49: 'Shoop da Whoop!', 50: 'Steven', 51: 'Pentagram', 52: 'Dr. Fetus', 53: 'Magneto', 54: 'Treasure Map', 55: "Mom's Eye", 
56: 'Lemon Mishap', 57: 'Distant Admiration', 58: 'Book of Shadows', 59: '', 60: 'The Ladder', 61: '', 62: 'Charm of the Vampire', 63: 'The Battery', 64: 'Steam Sale', 65: 'Anarchist Cookbook', 66: 'The Hourglass', 67: 'Sister Maggy', 68: 'Technology', 69: 'Chocolate Milk', 70: 'Growth Hormones', 71: 'Mini Mush', 72: 'Rosary', 73: 'Cube of Meat', 74: 'A Quarter', 75: 'PHD', 76: 'X-Ray Vision', 77: 'My Little Unicorn', 78: 'Book of Revelations', 79: 'The Mark', 80: 'The Pact', 81: 'Dead Cat', 82: 'Lord of the Pit', 83: 'The Nail', 84: 'We Need To Go Deeper!', 85: 'Deck of Cards', 86: "Monstro's Tooth", 
87: "Loki's Horns", 
88: 'Little Chubby', 89: 'Spider Bite', 90: 'The Small Rock', 91: 'Spelunker Hat', 92: 'Super Bandage', 93: 'The Gamekid', 94: 'Sack of Pennies', 95: 'Robo-Baby', 96: 'Little C.H.A.D.', 97: 'The Book of Sin', 98: 'The Relic', 99: 'Little Gish', 100: 'Little Steven', 101: 'The Halo', 102: "Mom's Bottle of Pills", 
103: 'The Common Cold', 104: 'The Parasite', 105: 'The D6', 106: 'Mr. Mega', 107: 'The Pinking Shears', 108: 'The Wafer', 109: 'Money = Power', 110: "Mom's Contacts", 
111: 'The Bean', 112: 'Guardian Angel', 113: 'Demon Baby', 114: "Mom's Knife", 
115: 'Ouija Board', 116: '9 Volt', 117: 'Dead Bird', 118: 'Brimstone', 119: 'Blood Bag', 120: 'Odd Mushroom', 121: 'Odd Mushroom', 122: 'Whore of Babylon', 123: 'Monster Manual', 124: 'Dead Sea Scrolls', 125: 'Bobby-Bomb', 126: 'Razor Blade', 127: 'Forget Me Now', 128: 'Forever Alone', 129: 'Bucket of Lard', 130: 'A Pony', 131: 'Bomb Bag', 132: 'A Lump of Coal', 133: "Guppy's Paw", 
134: "Guppy's Tail", 
135: 'IV Bag', 136: 'Best Friend', 137: 'Remote Detonator', 138: 'Stigmata', 139: "Mom's Purse", 
140: "Bob's Curse", 
141: 'Pageant Boy', 142: 'Scapular', 143: 'Speed Ball', 144: 'Bum Friend', 145: "Guppy's Head", 
146: 'Prayer Card', 147: 'Notched Axe', 148: 'Infestation', 149: 'Ipecac', 150: 'Tough Love', 151: 'The Mulligan', 152: 'Technology 2', 153: 'Mutant Spider', 154: 'Chemical Peel', 155: 'The Peeper', 156: 'Habit', 157: 'Bloody Lust', 158: 'Crystal Ball', 159: 'Spirit of the Night', 160: 'Crack the Sky', 161: 'Ankh', 162: 'Celtic Cross', 163: 'Ghost Baby', 164: 'The Candle', 165: 'Cat-o-nine-tails', 166: 'D20', 167: 'Harlequin Baby', 168: 'Epic Fetus', 169: 'Polyphemus', 170: 'Daddy Longlegs', 171: 'Spider Butt', 172: 'Sacrificial Dagger', 173: 'Mitre', 174: 'Rainbow Baby', 175: "Dad's Key", 
176: 'Stem Cells', 177: 'Portable Slot', 178: 'Holy Water', 179: 'Fate', 180: 'The Black Bean', 181: 'White Pony', 182: 'Sacred Heart', 183: 'Tooth Picks', 184: 'Holy Grail', 185: 'Dead Dove', 186: 'Blood Rights', 187: "Guppy's Hairball", 
188: 'Abel', 189: 'SMB Super Fan', 190: 'Pyro', 191: '3 Dollar Bill', 192: 'Telepathy For Dummies', 193: 'MEAT!', 194: 'Magic 8 Ball', 195: "Mom's Coin Purse", 
196: 'Squeezy', 197: 'Jesus Juice', 198: 'Box', 199: "Mom's Key", 
200: "Mom's Eyeshadow", 
201: 'Iron Bar', 202: "Midas' Touch", 
203: 'Humbleing Bundle', 204: 'Fanny Pack', 205: 'Sharp Plug', 206: 'Guillotine', 207: 'Ball of Bandages', 208: 'Champion Belt', 209: 'Butt Bombs', 210: 'Gnawed Leaf', 211: 'Spiderbaby', 212: "Guppy's Collar", 
213: 'Lost Contact', 214: 'Anemic', 215: 'Goat Head', 216: 'Ceremonial Robes', 217: "Mom's Wig", 
218: 'Placenta', 219: 'Old Bandage', 220: 'Sad Bombs', 221: 'Rubber Cement', 222: 'Anti-Gravity', 223: 'Pyromaniac', 224: "Cricket's Body", 
225: 'Gimpy', 226: 'Black Lotus', 227: 'Piggy Bank', 228: "Mom's Perfume", 
229: "Monstro's Lung", 
230: 'Abaddon', 231: 'Ball of Tar', 232: 'Stop Watch', 233: 'Tiny Planet', 234: 'Infestation 2', 235: '', 236: 'E. Coli', 237: "Death's Touch", 
238: 'Key Piece 1', 239: 'Key Piece 2', 240: 'Experimental Treatment', 241: 'Contract from Below', 242: 'Infamy', 243: 'Trinity Shield', 244: 'Tech.5', 245: '20/20', 246: 'Blue Map', 247: 'BFFS!', 248: 'Hive Mind', 249: "There's Options", 
250: 'Bogo Bombs', 251: 'Starter Deck', 252: 'Little Baggy', 253: 'Magic Scab', 254: 'Blood Clot', 255: 'Screw', 256: 'Hot Bombs', 257: 'Fire Mind', 258: 'Missing No.', 259: 'Dark Matter', 260: 'Black Candle', 261: 'Proptosis', 262: 'Missing Page 2', 263: '', 264: 'Smart Fly', 265: 'Dry Baby', 266: 'Juicy Sack', 267: 'Robo-Baby 2.0', 268: 'Rotten Baby', 269: 'Headless Baby', 270: 'Leech', 271: 'Mystery Sack', 272: 'BBF', 273: "Bob's Brain", 
274: 'Best Bud', 275: 'Lil Brimstone', 276: "Isaac's Heart", 
277: 'Lil Haunt', 278: 'Dark Bum', 279: 'Big Fan', 280: 'Sissy Longlegs', 281: 'Punching Bag', 282: 'How to Jump', 283: 'D100', 284: 'D4', 285: 'D10', 286: 'Blank Card', 287: 'Book of Secrets', 288: 'Box of Spiders', 289: 'Red Candle', 290: 'The Jar', 291: 'Flush!', 292: 'Satanic Bible', 293: 'Head of Krampus', 294: 'Butter Bean', 295: 'Magic Fingers', 296: 'Converter', 297: "Pandora's Box", 
298: 'Unicorn Stump', 299: 'Taurus', 300: 'Aries', 301: 'Cancer', 302: 'Leo', 303: 'Virgo', 304: 'Libra', 305: 'Scorpio', 306: 'Sagittarius', 307: 'Capricorn', 308: 'Aquarius', 309: 'Pisces', 310: "Eve's Mascara", 
311: "Judas' Shadow", 
312: "Maggy's Bow", 
313: 'Holy Mantle', 314: 'Thunder Thighs', 315: 'Strange Attractor', 316: 'Cursed Eye', 317: 'Mysterious Liquid', 318: 'Gemini', 319: "Cain's Other Eye", 
320: "???'s Only Friend", 
321: "Samson's Chains", 
322: 'Mongo Baby', 323: "Isaac's Tears", 
324: 'Undefined', 325: 'Scissors', 326: 'Breath of Life', 327: 'The Polaroid', 328: 'The Negative', 329: 'The Ludovico Technique', 330: 'Soy Milk', 331: 'Godhead', 332: "Lazarus' Rags", 
333: 'The Mind', 334: 'The Body', 335: 'The Soul', 336: 'Dead Onion', 337: 'Broken Watch', 338: 'The Boomerang', 339: 'Safety Pin', 340: 'Caffeine Pill', 341: 'Torn Photo', 342: 'Blue Cap', 343: 'Latch Key', 344: 'Match Book', 345: 'Synthoil', 346: 'A Snack', 347: 'Diplopia', 348: 'Placebo', 349: 'Wooden Nickel', 350: 'Toxic Shock', 351: 'Mega Bean', 352: 'Glass Cannon', 353: 'Bomber Boy', 354: 'Crack Jacks', 355: "Mom's Pearls", 
356: 'Car Battery', 357: 'Box of Friends', 358: 'The Wiz', 359: '8 Inch Nails', 360: 'Incubus', 361: "Fate's Reward", 
362: 'Lil Chest', 363: 'Sworn Protector', 364: 'Friend Zone', 365: 'Lost Fly', 366: 'Scatter Bombs', 367: 'Sticky Bombs', 368: 'Epiphora', 369: 'Continuum', 370: 'Mr. Dolly', 371: 'Curse of the Tower', 372: 'Charged Baby', 373: 'Dead Eye', 374: 'Holy Light', 375: 'Host Hat', 376: 'Restock', 377: 'Bursting Sack', 378: 'No. 2', 379: 'Pupula Duplex', 380: 'Pay To Play', 381: "Eden's Blessing", 
382: 'Friendly Ball', 383: 'Tear Detonator', 384: 'Lil Gurdy', 385: 'Bumbo', 386: 'D12', 387: 'Censer', 388: 'Key Bum', 389: 'Rune Bag', 390: 'Seraphim', 391: 'Betrayal', 392: 'Zodiac', 393: "Serpent's Kiss", 
394: 'Marked', 395: 'Tech X', 396: 'Ventricle Razor', 397: 'Tractor Beam', 398: "God's Flesh", 
399: 'Maw of the Void', 400: 'Spear of Destiny', 401: 'Explosivo', 402: 'Chaos', 403: 'Spider Mod', 404: 'Farting Baby', 405: 'GB Bug', 406: 'D8', 407: 'Purity', 408: 'Athame', 409: 'Empty Vessel', 410: 'Evil Eye', 411: 'Lusty Blood', 412: 'Cambion Conception', 413: 'Immaculate Conception', 414: 'More Options', 415: 'Crown Of Light', 416: 'Deep Pockets', 417: 'Succubus', 418: 'Fruit Cake', 419: 'Teleport 2.0', 420: 'Black Powder', 421: 'Kidney Bean', 422: 'Glowing Hour Glass', 423: 'Circle of Protection', 424: 'Sack Head', 425: 'Night Light', 426: 'Obsessed Fan', 427: 'Mine Crafter', 428: 'PJs', 429: 'Head of the Keeper', 430: 'Papa Fly', 431: 'Multidimensional Baby', 432: 'Glitter Bombs', 433: 'My Shadow', 434: 'Jar of Flies', 435: 'Lil Loki', 436: 'Milk!', 437: 'D7', 438: 'Binky', 439: "Mom's Box", 
440: 'Kidney Stone', 441: 'Mega Blast', 442: 'Dark Princes Crown', 443: 'Apple!', 444: 'Lead Pencil', 445: 'Dog Tooth', 446: 'Dead Tooth', 447: 'Linger Bean', 448: 'Shard of Glass', 449: 'Metal Plate', 450: 'Eye of Greed', 451: 'Tarot Cloth', 452: 'Varicose Veins', 453: 'Compound Fracture', 454: 'Polydactyly', 455: "Dad's Lost Coin", 
456: 'Moldy Bread', 457: 'Cone Head', 458: 'Belly Button', 459: 'Sinus Infection', 460: 'Glaucoma', 461: 'Parasitoid', 462: 'Eye of Belial', 463: 'Sulfuric Acid', 464: 'Glyph of Balance', 465: 'Analog Stick', 466: 'Contagion', 467: 'Finger!', 468: 'Shade', 469: 'Depression', 470: 'Hushy', 471: 'Lil Monstro', 472: 'King Baby', 473: 'Big Chubby', 474: 'Tonsil', 475: 'Plan C', 476: 'D1', 477: 'Void', 478: 'Pause', 479: 'Smelter', 480: 'Compost', 481: 'Dataminer', 482: 'Clicker', 483: 'Mama Mega!', 484: 'Wait What?', 485: 'Crooked Penny', 486: 'Dull Razor', 487: 'Potato Peeler', 488: 'Metronome', 489: 'D Infinity', 490: "Eden's Soul", 
491: 'Acid Baby', 492: 'YO LISTEN!', 493: 'Adrenaline', 494: "Jacob's Ladder", 
495: 'Ghost Pepper', 496: 'Euthanasia', 497: 'Camo Undies', 498: 'Duality', 499: 'Eucharist', 500: 'Sack of Sacks', 501: "Greed's Gullet", 
502: 'Large Zit', 503: 'Little Horn', 504: 'Brown Nugget', 505: 'Poke Go', 506: 'Backstabber', 507: 'Sharp Straw', 508: "Mom's Razor", 
509: 'Bloodshot Eye', 510: 'Delirious', 511: 'Angry Fly', 512: 'Black Hole', 513: 'Bozo', 514: 'Broken Modem', 515: 'Mystery Gift', 516: 'Sprinkler', 517: 'Fast Bombs', 518: 'Buddy in a Box', 519: 'Lil Delirium', 520: 'Jumper Cables', 521: 'Coupon', 522: 'Telekinesis', 523: 'Moving Box', 524: 'Technology Zero', 525: 'Leprosy', 526: '7 Seals', 527: 'Mr. ME!', 528: 'Angelic Prism', 529: 'Pop!', 530: "Death's List", 
531: 'Haemolacria', 532: 'Lachryphagy', 533: 'Trisagion', 534: 'Schoolbag', 535: 'Blanket', 536: 'Sacrificial Altar', 537: 'Lil Spewer', 538: 'Marbles', 539: 'Mystery Egg', 540: 'Flat Stone', 541: 'Marrow', 542: 'Slipped Rib', 543: 'Hallowed Ground', 544: 'Pointy Rib', 545: 'Book of the Dead', 546: "Dad's Ring", 
547: 'Divorce Papers', 548: 'Jaw Bone', 549: 'Brittle Bones', 550: 'Broken Shovel', 551: 'Broken Shovel', 
552: 'Mom\'s Shovel',
553: 'Mucormycosis', 
554: '2Spooky', 
555: 'Golden Razor', 
556: 'Sulfur', 
557: 'Fortune Cookie', 
558: 'Eye Sore', 
559: '120 Volt', 
560: 'It Hurts', 
561: 'Almond Milk', 
562: 'Rock Bottom', 
563: 'Nancy Bombs', 
564: 'A Bar of Soap', 
565: 'Blood Puppy', 
566: 'Dream Catcher', 
567: 'Paschal Candle', 
568: 'Divine Intervention', 
569: 'Blood Oath', 
570: 'Playdough Cookie', 
571: 'Orphan Socks', 
572: 'Eye of the Occult', 
573: 'Immaculate Heart', 
574: 'Monstrance', 
575: 'The Intruder', 
576: 'Dirty Mind', 
577: 'Damocles', 
578: 'Free Lemonade', 
579: 'Spirit Sword', 
580: 'Red Key', 
581: 'Psy Fly', 
582: 'Wavy Cap', 
583: 'Rocket in a Jar', 
584: 'Book of Virtues', 
585: 'Alabaster Box', 
586: 'The Stairway', 
587: 'Menorah (Unused but scripted)', 
588: 'Sol', 
589: 'Luna', 
590: 'Mercurius', 
591: 'Venus', 
592: 'Terra', 
593: 'Mars', 
594: 'Jupiter', 
595: 'Saturnus', 
596: 'Uranus', 
597: 'Neptunus', 
598: 'Pluto', 
599: 'Voodoo Head', 
600: 'Eye Drops', 
601: 'Act of Contrition', 
602: 'Member Card', 
603: 'Battery Pack', 
604: "Mom's Bracelet", 
605: 'The Scooper', 
606: 'Ocular Rift', 
607: 'Boiled Baby', 
608: 'Freezer Baby', 
609: 'Eternal D6', 
610: 'Bird Cage', 
611: 'Larynx',
612: 'Lost Soul', 
614: 'Blood Bombs', 
615: 'Lil Dumpy', 
616: "Bird's Eye", 
617: 'Lodestone', 
618: 'Rotten Tomato', 
619: 'Birthright', 
621: 'Red Stew', 
622: 'Genesis',
623: 'Sharp Key', 
624: 'Booster Pack', 
625: 'Mega Mush', 
626: 'Knife Piece 1', 
627: 'Knife Piece 2', 
628: 'Death Certificate', 
629: 'Bot Fly', 
631: 'Meat Cleaver', 
632: 'Evil Charm',
633: 'Dogma', 
634: 'Purgatory', 
635: 'Stitches', 
636: 'R Key', 
637: 'Knockout Drops', 
638: 'Eraser', 
639: 'Yuck Heart', 
640: 'Urn of Souls', 
641: 'Akeldama',
642: 'Magic Skin', 
643: 'Revelation', 
644: 'Consolation Prize', 
645: 'Tinytoma', 
646: 'Brimstone Bombs',
647: '4.5 Volt', 
649: 'Fruity Plum', 
650: 'Plum Flute', 
651: 'Star of Bethlehem', 
652: 'Cube Baby', 
653: 'Vade Retro', 
654: 'False PHD', 
655: 'Spin to Win', 
656: 'Damocles', 
657: 'Vasculitis', 
658: 'Giant Cell', 
659: 'Tropicamide', 
660: 'Card Reading', 
661: 'Quints', 
663: 'Tooth and Nail', 
664: 'Binge Eater', 
665: "Guppy's Eye", 
667: 'Strawman', 
668: "Dad's Note", 
669: 'Sausage', 
670: 'Options?', 
671: 'Candy Heart', 
672: 'A Pound of Flesh', 
673: 'Redemption', 
674: 'Spirit Shackles', 
675: 'Cracked Orb', 
676: 'Empty Heart', 
677: 'Astral Projection', 
678: 'C Section', 
679: 'Lil Abaddon', 
680: "Montezuma's Revenge", 
681: 'Lil Portal', 
682: 'Worm Friend', 
683: 'Bone Spurs', 
684: 'Hungry Soul', 
685: 'Jar of Wisps', 
686: 'Soul Locket', 
687: 'Friend Finder', 
688: 'Inner Child', 
689: 'Glitched Crown', 
690: 'Belly Jelly', 
691: 'Sacred Orb', 
692: 'Sanguine Bond', 
693: 'The Swarm', 
694: 'Heartbreak',
695: 'Bloody Gust', 
696: 'Salvation', 
697: 'Vanishing Twin', 
698: 'Twisted Pair', 
699: "Azazel's Rage", 
700: 'Echo Chamber', 
701: "Isaac's Tomb", 
702: 'Vengeful Spirit', 
703: 'Esau Jr.', 
704: 'Berserk!', 
705: 'Dark Arts', 
706: 'Abyss', 
707: 'Supper', 
708: 'Stapler', 
709: 'Suplex!', 
710: 'Bag of Crafting', 
711: 'Flip', 
712: 'Lemegeton', 
713: 'Sumptorium', 
714: 'Recall', 
715: 'Hold', 
716: "Keeper's Sack", 
717: "Keeper's Kin", 
718: "Keeper's Robe (Cut item)", 
719: "Keeper's Box", 
720: 'Everything Jar', 
721: 'TMTRAINER', 
722: 'Anima Sola', 
723: 'Spindown Dice', 
724: 'Hypercoagulation', 
725: 'IBS', 
726: 'Hemoptysis', 
727: 'Ghost Bombs', // when you see it 727 blue zenith
728: 'Gello', 
729: 'Decap Attack', 
730: 'Glass Eye', 
731: 'Stye', 
732: "Mom's Ring"}
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}
let seed = findGetParameter("data").substring(0, 4) + " " + findGetParameter("data").substring(4, 8)
let iscoop = findGetParameter("data")[8]
console.log(seed)

possible_options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 21, 22, 23] // removed 24, 25, giga items: 17, 20
let added = []
if (iscoop==1) {possible_options.push(29)}
function* getRandomPool(n) {
    while (true) {
        a = new Array()
        for (let i = 0; i < n; i++) {
            a[i] = _.sample(possible_options)
        }
        a = a.sort()
        if (!added.includes(a)){yield a}
    }
}


//I'm getting rid of Poop Nugget, Golden *, excluding g.key and g.bomb, get rid of giga bomb, giga battery, get rid of cracked key and dice shard, rune only if no penny, bomb, key or red heart


let found_recipes = 0;
let crafts = {}
let button = true;
fetch('https://tcain.heyn.live/db?seed='+findGetParameter("data").substring(0, 4)+findGetParameter("data").substring(4, 8)+"&auth_id="+auth_id, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    
}).then(response => response.json()).then(data => {
    crafts = JSON.parse(data["arr"])
    if (!(crafts == {})) {button=false;}
    found_recipes = 0;
    for (const [key, value] of Object.entries(crafts)) {
        for (x of value) {
            found_recipes += 1
        }
    }
    console.log("Imported from web!" + "\n" + "Found " + found_recipes + " recipes")
}).catch(error => {console.log(error)});
for (let i=1;i<733;i++){
    if (crafts[i]==undefined || typeof crafts.length === undefined) {crafts[i] = []}
    
}
// hardcoding hardcoded crafts
crafts[36][0] = [29, 29, 29, 29, 29, 29, 29, 29]
crafts[37][0] = [15, 15, 15, 15, 15, 15, 15, 15]
crafts[45][0] = [1, 1, 1, 1, 1, 1, 1, 1]
crafts[75][0] = [22, 22, 22, 22, 22, 22, 22, 22]
crafts[85][0] = [21, 21, 21, 21, 21, 21, 21, 21]
crafts[175][0] = [13, 13, 12, 12, 12, 12, 12, 12]
crafts[177][0] = [8, 8, 8, 8, 8, 8, 8, 8]
crafts[182][0] = [4, 4, 4, 4, 4, 4, 4, 4]
crafts[331][0] = [5, 2, 1, 4, 4, 4, 4, 4]
crafts[343][0] = [12, 12, 12, 12, 12, 12, 12, 12]
crafts[483][0] = [15, 15, 15, 15, 15, 15, 15, 15]
crafts[483][1] = [16, 16, 15, 15, 15, 15, 15, 15]
crafts[489][0] = [24, 24, 24, 24, 24, 24, 24, 24]
crafts[580][0] = [22, 22, 22, 22, 22, 22, 22, 22]
crafts[628][0] = [6, 6, 6, 6, 6, 6, 6, 6]
crafts[639][0] = [7, 7, 7, 7, 7, 7, 7, 7]
crafts[654][0] = [3, 22, 22, 22, 22, 22, 22, 22]
crafts[686][0] = [2, 2, 2, 2, 2, 2, 2, 2]
//
function done(var1, var2) {
    for (let x in var1) {
        if ([36, 37, 45, 175, 177].includes(parseInt(x))) {continue}
        if (crafts[x].length < var2) {
            //console.log(x)
            return false
        }
    }
    return true
}
// recipes that don't exist or ids are not present in the game
let alltries = 0;
unexisting = [73, 550, 551718, 666, 662, 648, 630, 620, 613, 587, 18, 130, 207, 119, 474, 550, 158, 668, 633, 293, 429, 715, 135, 238, 239, 626, 627, 132, 552, 714, 673, 9, 50, 328, 327, 90, 484, 181]
let default_tries = 250000
for (x of unexisting) {delete crafts[x]}
let additional = 0
//const combs1 = combs(possible_options, 8)

/*function constant_run() {
let currentPool = []
currentPool = combs1.next().value
if (added.includes(currentPool)) {
    return
}
console.log(currentPool);
let id = get_result(currentPool, str2seed(seed))
alltries += 1 
if (unexisting.includes(id) || crafts[id].length >= 4) {
    added.push(currentPool)
    return
}
if (!crafts[id].includes(currentPool)) {
    if (crafts[id].length >= 4) {
        added.push(currentPool)
        return
    }
    if (tries_limit != default_tries) {additional +=1}
    found_recipes += 1
    crafts[id].push(currentPool)
}
added.push(currentPool)
}*/
var charset = "abcdefghijklmnopqrstuvwxyz123456789"
function swap(json){
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
  }

let first_time = true;
function run(tries_limit, no_popup=false) {
let tries = 0;
let currentPool = []
while (true) {
    currentPool = combs1.next().value
    if (added.includes(currentPool)) {
        continue
    }
    //console.log(currentPool);
    let id = get_result(currentPool, str2seed(seed))
    tries += 1
    alltries += 1 
    if (unexisting.includes(id) || crafts[id].length >= 4) {
        added.push(currentPool)
        continue
    }
    if (!crafts[id].includes(currentPool)) {
        if (crafts[id].length >= 4) {
            added.push(currentPool)
            continue
        }
        if (tries_limit != default_tries) {additional +=1}
        found_recipes += 1
        crafts[id].push(currentPool)
    }
    added.push(currentPool)
    if (tries >= tries_limit || done(crafts, 4)) {
        if (done(crafts, 4)) {
            window.alert("Done!")
        }
        else if (tries_limit != default_tries) {
            //if (no_popup){window.alert("Found " + additional + " additional combinations")}
            additional = 0;
        }
        else if (tries >= tries_limit) {
            let x = document.getElementById("morebutton")
            x.innerHTML = "<button onclick=\"run(10000)\">Check more recipes</button>"
        }
        //console.log(crafts)
        setInterval(constant_run, 5);
        first_time = true;
        flush_ui(false)
        break
    }
}}
function remove(id, arr) {
    console.log(crafts[id])
    crafts[id].splice(arr, 1)
    console.log(crafts[id])
    found_recipes -= 1
}
let all_recipes = []
function flush_ui(refresh=true){
    let divbox = document.getElementById("output")
    output = ""
	srchbar = document.getElementById('search').value
    swapped = swap(item_id_to_name)
    Object.keys(swapped).forEach(function(item) {
        if (item.toLocaleLowerCase().includes(srchbar.toLocaleLowerCase())) {
            x = swapped[item]
            if (unexisting.includes(parseInt(x)) || x == "" || parseInt(x)>733) {return}
            output += "<h1>" + item + "</h1></br>"
            if (crafts[x].length == 0 && refresh) {  
                run(1000, true)
                flush_ui()
                return
            }
            if (crafts[x].length == 0) {
                output += "<h3>No recipes found</h3></br>"
                //let y = document.getElementById("morebutton")
                //y.innerHTML = "<button onclick=\"run(5000, true);flush_ui(true)\">Search for this recipe.</button>"
            }
            else {
                //let y = document.getElementById("morebutton")
                //y.innerHTML = "<button onclick=\"run(10000)\">Check more recipes</button>"
                for (let _ = 0; _<crafts[x].length;_++)
                    {

                        for(let i=0;i<8;i++){
                            output += "<img class=\"bofsym_"+crafts[x][_][i]+"\" height=240 width=240/>"
                        }
                        //output += "<button id=\"remover\" value=\""+x+"%"+all_recipes.indexOf(crafts[x][_])+"\">Remove this recipe</button></br><br><br>"
                        output += "<br><br><br>"
                    }
                }
            }
            
        });
        //let y = document.getElementById("morebutton") // check below
        //y.innerHTML = "<button onclick=\"resume()\").disabled = true;\">Check more recipes</button>" //literally it isn't even used rn
        divbox.innerHTML = output
}
//if (unexisting.includes(parseInt(x)) || x == "" || parseInt(x)>733) {return}




let started = false;
let w = undefined
w = new Worker("static/run_worker.js");
w.postMessage([4000, true, seed, crafts])
w.onmessage = function(event) {
    if (event.data == "1") {
        if (found_recipes >= 1999 && !started && button) {
            let y = document.getElementById("send")
            y.innerHTML = "<button onclick=\"send()\">Send recipes to server</button>"
            started = true;
        }   
    }
    /*else if (event.data == "end") {
        let y = document.getElementById("morebutton")
        y.innerHTML = "<button onclick=\"resume()\">Check more recipes</button>"
        y.disabled = false;
    }*/
    else if (typeof(event.data) == "object" && event.data[0] == "all") {
        alltries += 1
    } else if (typeof(event.data) == "object" && event.data[0] == "item" && crafts[event.data[1]].length < 4) {
        crafts[event.data[1]].push(event.data[2])
        all_recipes.push(event.data[2])
        found_recipes += 1
    }
}
function resume() {
    w.postMessage([5000, true, seed, crafts]);
    document.getElementById("morebutton").disabled = true;
}
$("#search").on("change keyup paste", function(){
    flush_ui(false);
})
$('#grid1').scroll(function() { // idk why it isn't working :/
    $('#rb1').animate({top:$(this).scrollTop()},100,"linear");
})
$('#remover').click(function(){
    console.log(this.value)
    let val = this.value.split("%");
    crafts[val[0]].splice(all_recipes[val[1]], 1)
});
function send() {
    fetch('https://tcain.heyn.live/db', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"seed": seed, "auth_id": auth_id, "arr": JSON.stringify(crafts)})
    })
    .then(function() {
        let y = document.getElementById("send")
        y.innerHTML = "<button disabled=\"true\">Send recipes to server</button>"
    });
}
function const_flush() {
    flush_ui(false)
}
var t=setInterval(updateCounter,15);
function updateCounter() {
    let x = document.getElementById("stats")
    x.innerHTML = "Checked " + alltries + " recipes<br>Found " + found_recipes + " correct recipes"

}
//document.addEventListener("DOMContentLoaded", timedRun(2000, default_tries));

//TODO:
// - enable all items, but that's kinda pointless
// - make better algorithm for finding recipes
// - add search remove a recipe button