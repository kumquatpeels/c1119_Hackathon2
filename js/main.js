$(document).ready(initializeApp);
this.processGetSadPoems = this.processGetSadPoems.bind(this);
this.getRandomSadPoem = this.getRandomSadPoem.bind(this);
this.processGetHappyPoems = this.processGetHappyPoems.bind(this);
this.getRandomHappyPoem = this.getRandomHappyPoem.bind(this);

function initializeApp() {
  applyClickHandlers();
}

function applyClickHandlers() {
  $('#getSadPoems').on('click', processGetSadPoems);
  $('#getHappyPoems').on('click', processGetHappyPoems);
}

//Sad Poems
function processGetSadPoems() {
  var ajaxConfig = {
    dataType: 'json',
    url: "http://poetrydb.org/lines/sad/author,title,lines,linecount.json",
    method: 'GET',
    success: this.getRandomSadPoem,
    error: function(error) {
      console.log('processGetSadPoems error:', error);
    },
  }
  $.ajax(ajaxConfig);
}

function getRandomSadPoem(success) {
  var sadPoems = [];
  var allSadPoemsArray = success;

  for (var i = 0; i < allSadPoemsArray.length; i++) {
      if (allSadPoemsArray[i].lines.length < 51) {
        sadPoems.push(allSadPoemsArray[i]);
      }
  }
  var randomSadArray = Math.floor(Math.random()*sadPoems.length-1);
  var randomSadPoemObj = sadPoems[randomSadArray];
  // console.log('randomSadPoem', randomSadPoem);

  // poemBox.empty();
  // authorBox.empty();

  displaySadPoem(randomSadPoemObj);
}

function displaySadPoem(randomSadPoemObj) {
  // console.log(randomSadPoemObj);
  // debugger;
  // randomSadPoemObj.lines.forEach(line => console.log(line)); //display poem in console.log

  var randomSadPoemLinesArray = randomSadPoemObj.lines;
  var poemBox = $('#poems');
  var authorBox = $('#author');

  for (var i = 0; i < randomSadPoemLinesArray.length; i++) {
    var newLine = $('<div>').attr('class', 'newLine').text(randomSadPoemLinesArray[i]);
    poemBox.append(newLine);
    // debugger;
  }
  authorBox.append(randomSadPoemObj.author);
}


//Happy Poems
function processGetHappyPoems() {
  var ajaxConfig = {
    dataType: 'json',
    url: "http://poetrydb.org/lines/happy/author,title,lines,linecount.json",
    method: 'GET',
    success: this.getRandomHappyPoem,
    error: function (error) {
      console.log('processGetHappyPoems error:', error);
    },
  }
  $.ajax(ajaxConfig);
}

function getRandomHappyPoem(success) {
  var happyPoems = [];
  var allHappyPoemsArray = success;

  for (var i = 0; i < allHappyPoemsArray.length; i++) {
    if (allHappyPoemsArray[i].lines.length < 51) {
      happyPoems.push(allHappyPoemsArray[i]);
    }
  }
  var randomHappyArray = Math.floor(Math.random() * happyPoems.length - 1);
  var randomHappyPoemObj = happyPoems[randomHappyArray];
  // console.log('randomSadPoem', randomSadPoem);

  // poemBox.empty();
  // authorBox.empty();

  displayHappyPoem(randomHappyPoemObj);
}

function displayHappyPoem(randomHappyPoemObj) {
  // console.log(randomSadPoemObj);
  // debugger;
  // randomSadPoemObj.lines.forEach(line => console.log(line)); //display poem in console.log

  var randomHappyPoemLinesArray = randomHappyPoemObj.lines;
  var poemBox = $('#poems');
  var authorBox = $('#author');

  for (var i = 0; i < randomHappyPoemLinesArray.length; i++) {
    var newLine = $('<div>').attr('class', 'newLine').text(randomHappyPoemLinesArray[i]);
    poemBox.append(newLine);
    // debugger;
  }
  authorBox.append(randomHappyPoemObj.author);
}
