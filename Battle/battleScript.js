//Selecting Body Part Divs
var head = document.getElementById("head");
var body = document.getElementById("body");
var hips = document.getElementById("hips");
var leftLeg = document.getElementById("leftLeg");
var rightLeg = document.getElementById("rightLeg");
var leftShoulder = document.getElementById("leftShoulder");
var rightShoulder = document.getElementById("rightShoulder");
var leftArm = document.getElementById('leftArm');
var rightArm = document.getElementById('rightArm');
//Selecting Button Divs
var left = document.getElementById('leftBut');
var right = document.getElementById('rightBut');
var up = document.getElementById('upBut');
var down = document.getElementById('downBut');

//Selecting Cloud Divs
var cPart1 = document.getElementById('cPart1');
var cPart2 = document.getElementById('cPart2');
var cPart3 = document.getElementById('cPart3');
var cPart4 = document.getElementById('cPart4');
var cPart5 = document.getElementById('cPart5');
var cPart6 = document.getElementById('cPart6');
var cPart7 = document.getElementById('cPart7');
var cPart8 = document.getElementById('cPart8');
var cPart9 = document.getElementById('cPart9');
var cPart10 = document.getElementById('cPart10');
var cPart11 = document.getElementById('cPart11');
var cPart12 = document.getElementById('cPart12');

//Mute/Play Background music
var mute = document.getElementById('muteBut');

var song = new Audio('../Sounds/phoenixEdit.mp3');

song.addEventListener('ended', function()
{
  this.currentTime = 15.5;
  this.play();
}, false);
song.play();
//var music = document.getElementById('music');

//var musicSrc = music.src;

//if(music.src == musicSrc)
//{
  //loopMusic();
//}

//function loopMusic()
//{
  //setTimeout(function()
  //{
    //music.src = musicSrc;
    //loopMusic();
  //}, 187500);
//}

mute.onclick = function()
{
  if(mute.innerHTML == "Mute Music")
  {
    song.pause();
    mute.innerHTML = "Play Music";
  }
  else
  {
    song.play();
    mute.innerHTML = "Mute Music";
  }
}

//Randomizing cloud positions
cloud1Interval();
cloud2Interval(0);
cloud3Interval(0);
cloud4Interval(0);

var randNum;

function cloud1Interval()
{
  setTimeout(function()
{
  randNum = Math.floor(Math.random()*(30));
  cPart1.style.top = randNum + "vh";
  cPart2.style.top = randNum + "vh";
  cPart3.style.top = randNum + "vh";
  cloud1Interval();
}, 10000);
}

function cloud2Interval(count)
{
  var ms;
  if(count == 0)
  {
    ms = 12000;
  }
  else
  {
    ms = 10000;
  }
  setTimeout(function()
{
  randNum = Math.floor(Math.random()*(30));
  cPart4.style.top = randNum + "vh";
  cPart5.style.top = randNum + "vh";
  cPart6.style.top = randNum + "vh";
  cloud2Interval(count+1);
}, ms);
}

function cloud3Interval(count)
{
  var ms;
  if(count == 0)
  {
    ms = 14000;
  }
  else
  {
    ms = 10000;
  }
  setTimeout(function()
{
  randNum = Math.floor(Math.random()*(30));
  cPart7.style.top = randNum + "vh";
  cPart8.style.top = randNum + "vh";
  cPart9.style.top = randNum + "vh";
  cloud3Interval(count+1);
}, ms);
}

function cloud4Interval(count)
{
  var ms;
  if(count == 0)
  {
    ms = 16000;
  }
  else
  {
    ms = 10000;
  }
  setTimeout(function()
{
  randNum = Math.floor(Math.random()*(30));
  cPart10.style.top = randNum + "vh";
  cPart11.style.top = randNum + "vh";
  cPart12.style.top = randNum + "vh";
  cloud4Interval(count+1);
}, ms);
}
