// https://10fastfingers.com/widgets/typingtest
var wordList = `hi    
hill  
hilly  
hilum  
him  
hip  
hippo  
ho  
hokum  
holly  
holmium  
holy  
homily  
hominy  
homo  
homonym  
hon  
honk  
honky  
honolulu  
hook  
hookup  
hooky  
hoop  
hop  
hopi  
huh  
hulk  
hull  
hum  
humin  
hump  
humph  
hun  
hunk  
hymn  
hypo  
hypopyon  
ilium  
ilk  
ill  
illinium `;
var extra= `
illy  
imino  
imp  
imply  
in  
inion  
ink  
inky  
inn  
inulin  
ion  
ionium  
jill  
jim  
jimmy  
jinn  
john  
johnin  
johnny  
join  
jollily  
jolly  
joy  
joypop  
jul  
july  
jump  
jumpily  
jumpy  
jun  
junk  
junky  
juno  
kill  
killjoy  
kiln  
kilo  
kimono  
kin  
kinin  
kink  
kinky  
kino  
kip  
knoll  
knoop  
kook  
kooky  
koplik  
lily  
limn  
limo  
limon  
limp  
limply  
limy  
linin  
link  
linkup  
liny  
lion  
lip  
lipophil  
lippy  
lo  
loin  
loll  
lollipop  
lollypop  
look  
loom  
loon  
loony  
loop  
lop  
lull  
lump  
lumpily  
lumpy  
lupin  
lymph  
lyon  
lyophil  
mil  
milium  
milk  
milky  
mill  
million  
millon  
mini  
minim  
minimum  
minion  
mink  
minn  
moi  
moil  
moll  
mom  
mommy  
mon  
monk  
mono  
monopoly  
moo  
moon  
mop  
mopy  
mu  
mukluk  
mull  
mullion  
mum  
mummy  
muumuu  
my  
nihil  
nil  
ninny  
ninon  
nip  
nippon  
nippy  
no  
nol  
noli  
nolo  
nomoi  
nonunion  
nook  
noon  
noun  
null  
nullo  
nun  
nylon  
nymph  
oh  
ohio  
ohm  
oil  
oily  
oink  
olio  
omnium  
on  
onion  
onium  
only  
oomph  
opinion  
opium  
oui  
phi  
phil  
philip  
phono  
phony  
phylum  
pi  
pili  
pill  
pillion  
pimp  
pimply  
pin  
pinion  
pink  
pinko  
pinky  
pinon  
pinup  
pion  
pip  
pippin  
plop  
ploy  
plum  
plump  
plumply  
plumy  
plunk  
ply  
po  
poi  
poilu  
pokily  
poky  
polio  
polk  
poll  
polloi  
polo  
polonium  
poly  
polyp  
polyphony  
polypi  
pomp  
pompon  
pony  
pooh  
pool  
poop  
pop  
poplin  
poppy  
populi  
populo  
pull  
pulp  
pulpy  
pump  
pumpkin  
pun  
punily  
punk  
puny  
pup  
pupil  
puppy  
pylon  
uh  
ump  
unholy  
unhook  
union  
unpin  
unum  
up  
uphill  
upon  
yip  
yolk  
yon  
you  
yukon  
yummy`;

var singleChar = [
  '0p;/',  
  '9ol.',
  '8ik,',
  '7ujm',
    "-['",
    '=]',
    'uj',
    'ik',
    'ol',
    'p;',
    '7j',
    '8k',
    '9l',
    '0;',
    '-;',
    '=;',
    'jm',
    'k,',
    'l.',
    ';/',
    '"/',
    '[]|'
  ];

var result = '';

const organize = (input)=>{

  for(var i=0; i<singleChar.length; i++){
    for(var n=0; n < 8; n++){
      result += singleChar[i]+ " " + singleChar[i].split("").reverse().join("")+ " ";
    }
  }
  
  
  var allWords = input.replace(/\s\s+/g,' ').trim().split(" ");

  

  let firstLetterArr =[];
  allWords.forEach(e => {
    
    const wordArr = [];
    

    firstLetter = e[0].toUpperCase();

    if(firstLetterArr.indexOf(firstLetter) < 0){
      firstLetterArr.push(firstLetter);
      console.log(firstLetterArr);
    }
    
    


    var foundWord = firstLetterArr.find(w => w.key === firstLetter);
  
    
    
  
    
    
    
    
  })
  console.log('1st letter arr:', firstLetterArr);
  firstLetterArr.forEach(e=>{

  })
  

  console.log(" \n \n ========================== NEW WORDLIST ==================== \ ");
  console.log(result);
  console.log(" \n")
}

organize(wordList);

 
