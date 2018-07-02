//Selecting Body Part Divs
var charParts = document.getElementsByClassName("character");
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
var song = new Audio("../Sounds/xo.mp3");
var enemy = document.getElementsByClassName('enemy');

//Get Bounding Rects to check for overlap
//var enemyRect = enemy.getBoundingClientRect();
var headRect = head.getBoundingClientRect();
var rArmRect = rightArm.getBoundingClientRect();
var lArmRect = leftArm.getBoundingClientRect();
var rLegRect = rightLeg.getBoundingClientRect();
var lLegRect = leftLeg.getBoundingClientRect();

var enemyRects = [];

for (i = 0; i < enemy.length; i++)
{
   enemyRects[i] = enemy[i].getBoundingClientRect();
}

var score = document.getElementById('score');

keepScore(0);
function keepScore(scoreNum)
{
  setTimeout(function()
    {
      if(scoreNum >= 100)
      {
        enemy[1].style.opacity = 1;
      }
      if(scoreNum >= 200)
      {
        enemy[2].style.opacity = 1;
      }
      score.innerHTML = "High Score: " + scoreNum;
      keepScore(scoreNum += 5);
    }, 500)
}

song.addEventListener('ended', function()
{
  this.currentTime = 0;
  this.play();
}, false);

song.play();

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
var ms;

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

//randomizing and repeating enemy spawn
enemyInterval();

function enemyInterval()
{
  setTimeout(function()
{
  for(var i = 0; i < enemy.length; i++)
  {
  randNum = Math.floor(Math.random()*40 + 50)
  enemy[i].style.top = randNum + "vh";
  }
  enemyInterval();
}, 1000)
}

//Moving on click of buttons
x = 0;
left.onclick = function()
{
  if(x <= -540)
  {
    return;
  }
    x -= 10;
    for(var i = 0; i < charParts.length; i++)
    {
      charParts[i].style.transform = "translate(" + x + "px, " + y + "px)";
    }
  };

right.onclick = function()
{
  if(x >= 630)
  {
    return;
  }
  x += 10;
  for(var i = 0; i < charParts.length; i++)
  {
    charParts[i].style.transform = "translate(" + x + "px, " + y + "px)";
  }
};

y = 0;

up.onclick = function()
{
  if(y <= -110)
  {
    return;
  }
  y -= 10;
  for(var i = 0; i < charParts.length; i++)
  {
    charParts[i].style.transform = "translate(" + x + "px, " + y + "px)";
  }
}

down.onclick = function()
{
  if(y >= 180)
  {
    return;
  }
  y += 10;
  for(var i = 0; i < charParts.length; i++)
  {
    charParts[i].style.transform = "translate(" + x + "px, " + y + "px)";
  }
}
