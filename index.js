// let $start = document.querySelector("#start")
// let $game = document.querySelector("#game")
// let $time = document.querySelector("#time")
// let $time_header = document.querySelector("#time-header")
// let $result_header = document.querySelector("#result-header")
// let $result = document.querySelector("#result")
// let $game_time = document.querySelector("#game-time")
// let $userName = document.querySelector("#userName")
// let $welcome = document.querySelector('.welcome')
// let $app = document.querySelector('.app')
// let $app_rating = document.querySelector('.app_rating')
      
// let score = 0
// let user = {}
// let list = []

// $start.addEventListener("click", start)

// function start(){
//     $start.classList.add('hide')
//     $game.style.backgroundColor = "white"
//     creatBox()
//     timer()
//     $time_header.classList.remove('hide')
//     $result_header.classList.add('hide')
//     setTime()
//     $game_time.setAttribute('disabled', true)
//     score = 0

// }

// function creatBox(){
//     $game.innerHTML = ""
//     let box = document.createElement("div")
//     box.style.backgroundColor = `rgb(${getRandomArbitrary(0,255)}, ${getRandomArbitrary(0,255)}, ${getRandomArbitrary(0,255)})`
//     box.style.width = box.style.height = getRandomArbitrary(30,100) + 'px'
//     box.style.cursor = "pointer"
//     box.style.position = "absolute"
//     box.style.left = getRandomArbitrary(0,200) + 'px'
//     box.style.top = getRandomArbitrary(0,200) + 'px'
//     box.setAttribute("data-box", "true")
//     $game.insertAdjacentElement("afterbegin", box)
// }

// $game.addEventListener("click", clickedBox)
// function clickedBox(event){
//     if(event.target.dataset.box){
//         creatBox()
//         score++
//     }
// }

// // function gameEnd(){
// //     $start.classList.remove('hide')
// //     $game.style.backgroundColor = "#ccc"
// // }  

// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }


// function timer(){
//     let interval = setInterval(function(){
//         $time.textContent = (Number($time.textContent) - 0.1).toFixed(1)
//         if ($time.textContent <= 0){
//             clearInterval(interval)
//             $start.classList.remove('hide')
//             $game.style.backgroundColor = "#ccc"
//             $game.innerHTML = ""
//             $time_header.classList.add('hide')
//             $result_header.classList.remove('hide')
//             $result.textContent = score
//             $game_time.removeAttribute('disabled')
//             // rating()
//             // gameEnd()
//         }
//     },100)
// }

// $game_time.addEventListener('change', setTime)

// function setTime(){
//     $time.textContent = $game_time.value
// }

// $userName.addEventListener('change', function(){
//     $welcome.classList.add('hide')
//     $app.classList.remove('hide')
//     rating()
// })

// function rating(){
//     let list = JSON.parse(localStorage.getItem('listOfUsers')) 
//     list.push({name: $userName.value, score: score})
//     localStorage.setItem('listOfUsers',  JSON.stringify(list))
//     list.forEach(function(elem){
//             $app_rating.insertAdjacentHTML('beforeend', `
//                     <div class = "user">
//                         ${elem.name}
//                          :
//                         ${elem.score}
//                     </div> 
//             `)
//     })
    
// }
// function setupLocal(){
//     setItem([])
// }


// // function end(){
// //     $start.classList.remove("hide")
// //     $game.style.backgroundColor = "#ccc"
// //     $game.innerHTML = ""
// // }



// ///////No1
// // function showResult(){
// //     $time_header.classList.add('hide')
// //     $result_header.classList.remove('hide')
// // }
// // function showTime(){
// //     $time_header.classList.remove('hide')
// //     $result_header.classList.add('hide')
// // }
// ///////сокращения No1
// // function toogle(first, second){
// //     first.classList.remove('hide')
// //     second.classList.add('hide')
// // }



// /////// отправлять данные

// // let user = {}
// // let list = []

// // function showUsers(){
// //     list forEach(function(elem){
// //         $list.insertAdjacentHTML('beforeend',  `
// //         <div class = "user">
// //             ${elem.name} ---- ${elem.score}
// //         </div>
// //         `)
// //     })
// // }

let $start = document.querySelector("#start");
let $game = document.querySelector("#game");
let $time = document.querySelector("#time");
let $game_time = document.querySelector("#game-time")
let $time_header = document.querySelector("#time-header")
let $result_header = document.querySelector("#result-header")
let $result = document.querySelector("#result")
let $login = document.querySelector("#login")
let $appPage = document.querySelector(".app")
let $loginPage = document.querySelector(".login")
let $nameUser = document.querySelector("#nameUser")
let $list = document.querySelector(".list")

let score = 0
let user = {}
let list = []
let check = false
$start.addEventListener("click", start);

function start() {
    if (Object.keys(user).length > 0) {  ///// user != {} user.name == undefined
        check = true
    }
  list = getData("listUsers") /// undefined
  score = 0
  $start.classList.add("hide");
  $game.style.backgroundColor = "white";
  createBox();
  timer();
  setTime()
  $game_time.setAttribute("disabled","true")
  toggle($time_header, $result_header)
}

function createBox() {
  $game.innerHTML = "";
  let box = document.createElement("div");
  let boxColor = `rgb(${getRandom(0, 254)}, ${getRandom(0, 254)}, ${getRandom(
    0,
    254
  )})`;
  let boxSize = getRandom(30, 100); //// 50
  let top = getRandom(0, 300 - boxSize); /// 250 + 50 == 300
  let left = getRandom(0, 300 - boxSize);
  box.style.backgroundColor = boxColor;
  box.style.width = box.style.height = boxSize + "px";
  box.style.cursor = "pointer";
  box.style.top = top + "px";
  box.style.left = left + "px";
  box.style.position = "absolute";
  box.setAttribute("data-box", "true");
  $game.insertAdjacentElement("afterbegin", box);
}

$game.addEventListener("click", clickedBox);
function clickedBox(event) {
  if (event.target.dataset.box) {
    createBox();
    score++
  }
}

function timer() {
  let interval = setInterval(function () {
    $time.textContent = ($time.textContent - 0.1).toFixed(1);
    if ($time.textContent <= 0.0) {
      clearInterval(interval);
      end()
    }
  }, 100);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function end(){
    $start.classList.remove("hide");
    $game.style.backgroundColor = "#ccc";
    $game.innerHTML = "";
    $game_time.removeAttribute("disabled")
    $result.textContent = score
    toggle($result_header, $time_header)
    checkUser()
}

function checkUser(){
    if (check == true) {
        list = getData("listUsers")
        if (list[list.length-1].score < score){
            list.pop()
            login()
            showUsers()
        }
    }else {
        login()
        showUsers()
    }
}

$game_time.addEventListener("change", setTime)

function setTime(){
    $time.textContent = $game_time.value
    toggle($time_header, $result_header)
}

function toggle(first, second){
    first.classList.remove("hide")
    second.classList.add("hide")
}

$login.addEventListener("click", function(){
    toggle($appPage, $loginPage)
    showUsers()
})

function login(){
    user.name = $nameUser.value
    user.score = score
    list.push(user) /// undefinde.push(user)
    sendData(list)
}

function showUsers(){
    $list.innerHTML = ""
    list = getData("listUsers")
    list.sort(compare)
    if (list.length > 10){
      list.splice(10, list.length - 10)
    }
    list.forEach(function(elem){
        $list.insertAdjacentHTML('beforeend', `
            <div class="user">
                ${elem.name}  --- ${elem.score}
            </div>
        `)
    })
}



function sendData(data){
  localStorage.setItem("listUsers", JSON.stringify(data))
}
function getData(key){
   return JSON.parse(localStorage.getItem(key))
}


function setLocal(){
  sendData([])
}

function compare(a,b){
  if (a.score > b.score){
    return -1
  }

  if (b.score > a.score){
    return 1
  }

  return 0
}

