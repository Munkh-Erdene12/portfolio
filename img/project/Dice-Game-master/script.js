/**********************************************************************************
 *** тоглогчийн ээлжийг хадаглах хувьсагч нэгдүүгэр тоглогч 0 хоёрдугаар тоглогч 1.
 *********************************************************************************/

var activePlayer = 0;
var noActivePlayer = 1;
//тоглоом дуусан эсэхийг хадаглах төлвийн хувьсагч
var isnewGame;
/**********************************************************************************
 ***тоглогчидийн тоглосн оноог цуглуулах хувьсагч.
 *********************************************************************************/

var Scorres = [0, 0];

/**********************************************************************************
 ***тоглогчийн ээлжиндээ цуглууах хувьсагч.
 *********************************************************************************/

var roundScore = 0;

//Шооны зурагыг харуулахгүй
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//тоглоом шинээр эхлэх
newGame();
function newGame() {
  //тоглоом эхэллээ гэдэг төлөв.
  isnewGame = true;
  activePlayer = 0;
  Scorres = [0, 0];
  roundScore = 0;
  //дурын тоо өгөх
  diceNumber = Math.floor(Math.random() * 6) + 1;
  //зураг түр зур хаах
  diceDom.style.display = "none";
  //тоглоом бэлтгэх
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  //нэрийг буцаах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

/**********************************************************************************
 ***Дурийн тоо өгөх буюу Roll dice ажиллуулах anonymous функц болон callback функц.
 *********************************************************************************/
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isnewGame) {
    //Шооны дурын тоо өгнө.
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //Шооны зургыг гаргаж өгнө.
    diceDom.style.display = "block";
    //Буусан санамсаргүй зургыг гаргаж ирнэ.
    diceDom.src = "dice-" + diceNumber + ".png";

    /**********************************************************************************
     ***Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог шилжүүлнэ.
     *********************************************************************************/
    if (diceNumber !== 1) {
      //1-ээс ялгаатай тоо буулаа. буусан тоог нэмж өгнө.
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // if(activePlayer === 0){
      //   activePlayer = 1
      // }else{
      //   activePlayer = 0
      // }
      switchToNextPlayer();
    }
  } else {
    alert("New Game товч дарна уу");
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isnewGame) {
    Scorres[activePlayer] = Scorres[activePlayer] + roundScore;
    //Дэлгэц дээр оноог гаргаж өгнө.
    document.getElementById("score-" + activePlayer).textContent =
      Scorres[activePlayer];
    //Уг тоглогч хожсон эсэхийг шалгах
    if (Scorres[activePlayer] >= 20) {
      isnewGame = false;
      //тоглоомыг дуусан төлөвт оруулна.
      //ялагч гэсэн текстийг нэрийх нь оронд гаргана
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      //ээлжийг солих
      switchToNextPlayer();
    }
  } else {
    alert("New Game товч дарна уу");
  }
});

function switchToNextPlayer() {
  // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
  //Энэ тоглогчийн ээлжийн цуглуусан оноог 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = "0";
  //Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тологчийг 1 болго.
  //Үгүй бол идэвхтэй тоглогчийг 1 болго
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //Улаан цэгийг шилжүүлнэ. toggle бүх шилжүүлэх active-ийг.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //Шоог түр алга болгох.
  diceDom.style.display = "none";
}
//new game эхлүүлэх товчийг эвэнт листенер
document.querySelector(".btn-new").addEventListener("click", newGame);

/**********************************************************************************
 ***мэндилчилгээ.
 *********************************************************************************/

// var message =
//   "Cайн байна уу \nэнхүү тоглоом анхны туршилт болхоор та бүхэн минь ойлгоорэй.";
// alert(message);
