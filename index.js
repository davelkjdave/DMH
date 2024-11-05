document.getElementById('clock').addEventListener('click', function() {
    document.getElementById('clock_screen').style.display = "block"
    document.getElementById('main_screen').style.display = "none"
    document.getElementById('math_screen').style.display = "none"
    document.getElementById('setting_screen').style.display = "none"
})

document.getElementById('math').addEventListener('click', function() {
    document.getElementById('clock_screen').style.display = "none"
    document.getElementById('main_screen').style.display = "none"
    document.getElementById('math_screen').style.display = "block"
    document.getElementById('setting_screen').style.display = "none"
})
document.getElementById('bg_change').addEventListener('click', function() {
    document.getElementById('clock_screen').style.display = "none"
    document.getElementById('main_screen').style.display = "none"
    document.getElementById('math_screen').style.display = "none"
    document.getElementById('setting_screen').style.display = "block"
})

const clock_side_menu_li_addr = document.getElementsByClassName('clock_side_menu_li')
clock_side_menu_li_addr[0].addEventListener('click', function() {
    document.getElementById('world_map').style.display = "block"
    document.getElementById('timer').style.display = "none"
    document.getElementById('stopwatch').style.display = "none"
    document.getElementById('alram').style.display = "none"
})
clock_side_menu_li_addr[1].addEventListener('click', function() {
    document.getElementById('world_map').style.display = "none"
    document.getElementById('timer').style.display = "block"
    document.getElementById('stopwatch').style.display = "none"
    document.getElementById('alram').style.display = "none"
})
clock_side_menu_li_addr[2].addEventListener('click', function() {
    document.getElementById('world_map').style.display = "none"
    document.getElementById('timer').style.display = "none"
    document.getElementById('stopwatch').style.display = "block"
    document.getElementById('alram').style.display = "none"
})
clock_side_menu_li_addr[3].addEventListener('click', function() {
    document.getElementById('world_map').style.display = "none"
    document.getElementById('timer').style.display = "none"
    document.getElementById('stopwatch').style.display = "none"
    document.getElementById('alram').style.display = "block"
})


document.querySelector('#timer_thirty_sec').addEventListener('click', function() {
    document.querySelector('#clock_sec').innerHTML = Number(document.querySelector('#clock_sec').innerHTML) + 30
    clearInterval(timerId);
    timer()
})
document.querySelector('#timer_one_min').addEventListener('click', function() {
    document.querySelector('#clock_min').innerHTML = Number(document.querySelector('#clock_min').innerHTML) + 1
    clearInterval(timerId);
    timer()
})
document.querySelector('#timer_ten_min').addEventListener('click', function() {
    document.querySelector('#clock_min').innerHTML = Number(document.querySelector('#clock_min').innerHTML) + 10
    clearInterval(timerId);
    timer()
})

function timer() {
    // do {
        // console.log(1)
        if (Number(document.querySelector('#clock_sec').innerHTML)>=60) {
            // console.log(2)
            document.querySelector('#clock_min').innerHTML = Number(document.querySelector('#clock_min').innerHTML)+1
            document.querySelector('#clock_sec').innerHTML = Number(document.querySelector('#clock_sec').innerHTML)-60
        }
        if (Number(document.querySelector('#clock_min').innerHTML)>=60) {
            document.querySelector('#clock_hour').innerHTML = Number(document.querySelector('#clock_hour').innerHTML)+1
            document.querySelector('#clock_min').innerHTML = Number(document.querySelector('#clock_min').innerHTML)-60
        }

        if (document.querySelector('#clock_sec').innerHTML.length<2) {
            document.querySelector('#clock_sec').innerHTML = '0' + document.querySelector('#clock_sec').innerHTML
        }
        if (document.querySelector('#clock_min').innerHTML.length<2) {
            document.querySelector('#clock_min').innerHTML = '0' + document.querySelector('#clock_min').innerHTML
        }
        if (document.querySelector('#clock_hour').innerHTML.length<2) {
            document.querySelector('#clock_hour').innerHTML = '0' + document.querySelector('#clock_hour').innerHTML
        }
    // } while (Number(document.querySelector('#clock_sec').innerHTML)<60 && Number(document.querySelector('#clock_min').innerHTML)<60 && Number(document.querySelector('#clock_hour').innerHTML)<60)
}

document.querySelector('#timer_reset_button').addEventListener('click', function() {
    document.querySelector('#clock_sec').innerHTML = "00"
    document.querySelector('#clock_min').innerHTML = "00"
    document.querySelector('#clock_hour').innerHTML = "00"
    // timer_start(0)
    clearInterval(timerId);
})

document.querySelector('#timer_start_button').addEventListener('click', function() {
    timer_start()
})

// function timer_start() {
//     while (!(document.querySelector('#clock_sec').innerHTML=="00" && document.querySelector('#clock_min').innerHTML=="00" && document.querySelector('#clock_hour').innerHTML=="00")) {
//         setInterval(document.querySelector('#clock_sec'.innerHTML))
//     }
// }
function timer_during() {
    if (document.querySelector('#clock_sec').innerHTML=="00" && !(document.querySelector('#clock_min').innerHTML=="00")) {
        document.querySelector('#clock_sec').innerHTML = "59"
        document.querySelector('#clock_min').innerHTML = Number(document.querySelector('#clock_min').innerHTML) -1
    }
    else {
        document.querySelector('#clock_sec').innerHTML = Number(document.querySelector('#clock_sec').innerHTML)-1 
    }
    if (document.querySelector('#clock_sec').innerHTML.length<2) {
        document.querySelector('#clock_sec').innerHTML = '0' + document.querySelector('#clock_sec').innerHTML
    }
    if (document.querySelector('#clock_min').innerHTML.length<2) {
        document.querySelector('#clock_min').innerHTML = '0' + document.querySelector('#clock_min').innerHTML
    }
    if (document.querySelector('#clock_hour').innerHTML.length<2) {
        document.querySelector('#clock_hour').innerHTML = '0' + document.querySelector('#clock_hour').innerHTML
    }
}
let timerId = setInterval(() => timer_during(), 3000);
clearInterval(timerId)
function timer_start() {
    // let time = (Number(document.querySelector('#clock_hour').innerHTML)*360 + Number(document.querySelector('#clock_min').innerHTML)*60 + Number(document.querySelector('#clock_sec').innerHTML)) * 1000
    timerId = setInterval(() => timer_during(), 1000);
    setTimeout(() => { clearInterval(timerId); alert('타이머가 끝났습니다.'); }, (Number(document.querySelector('#clock_hour').innerHTML)*360 + Number(document.querySelector('#clock_min').innerHTML)*60 + Number(document.querySelector('#clock_sec').innerHTML)) * 1000);
}

const stopwatch_sec_addr = document.querySelector('#stopwatch_sec')
const stopwatch_min_addr = document.querySelector('#stopwatch_min')
const stopwatch_hour_addr = document.querySelector('#stopwatch_hour')

function stopwatch_start() {
    if (Number(stopwatch_sec_addr.innerHTML)<60) {
        stopwatch_sec_addr.innerHTML = Number(stopwatch_sec_addr.innerHTML) +1
    }
    else {
        stopwatch_sec_addr.innerHTML = "00"
        stopwatch_min_addr.innerHTML = Number(stopwatch_min_addr.innerHTML) + 1
    }
    if (document.querySelector('#stopwatch_sec').innerHTML.length<2) {
        document.querySelector('#stopwatch_sec').innerHTML = '0' + document.querySelector('#stopwatch_sec').innerHTML
    }
    if (document.querySelector('#stopwatch_min').innerHTML.length<2) {
        document.querySelector('#stopwatch_min').innerHTML = '0' + document.querySelector('#stopwatch_min').innerHTML
    }
    if (document.querySelector('#stopwatch_hour').innerHTML.length<2) {
        document.querySelector('#stopwatch_hour').innerHTML = '0' + document.querySelector('#stopwatch_hour').innerHTML
    }
}
var stopwatch = setInterval(() => stopwatch_start(), 3000)
clearInterval(stopwatch);

document.querySelector('#stopwatch_start').addEventListener('click', function() {
    clearInterval(stopwatch);
    clearInterval(stopwatch_start());
    stopwatch = setInterval(() => stopwatch_start(), 1000)
})

document.querySelector('#stopwatch_reset').addEventListener('click', function() {
    clearInterval(stopwatch);
    document.querySelector('#stopwatch_sec').innerHTML = "00"
    document.querySelector('#stopwatch_min').innerHTML = "00"
    document.querySelector('#stopwatch_hour').innerHTML = "00"

    document.querySelector('#stopwatch_record_tr').innerHTML = ""
})

document.querySelector('#stopwatch_record').addEventListener('click', function() {
    document.querySelector('#stopwatch_record_tr').appendChild(document.createElement('td'))
    document.querySelector('#stopwatch_record_tr').lastChild.innerHTML = `${stopwatch_hour_addr.innerHTML}:${stopwatch_min_addr.innerHTML}:${stopwatch_sec_addr.innerHTML}`
    document.querySelector('#stopwatch_record_tr').lastChild.classList.add('stopwatch_record_td')
})

document.querySelector('#clock_exit_button_one').addEventListener('click', function() {
    document.querySelector('#clock_screen').style.display="none"
    document.querySelector('#main_screen').style.display="block"
    document.querySelector('#math_screen').style.display="none"
})
document.querySelector('#clock_exit_button_two').addEventListener('click', function() {
    document.querySelector('#clock_screen').style.display="none"
    document.querySelector('#main_screen').style.display="block"
    document.querySelector('#math_screen').style.display="none"
})
document.querySelector('#clock_exit_button_three').addEventListener('click', function() {
    document.querySelector('#clock_screen').style.display="none"
    document.querySelector('#main_screen').style.display="block"
    document.querySelector('#math_screen').style.display="none"
})
document.querySelector('#clock_exit_button_four').addEventListener('click', function() {
    document.querySelector('#clock_screen').style.display="none"
    document.querySelector('#math_screen').style.display="none"
    document.querySelector('#main_screen').style.display="block"
})
document.querySelector('#clock_exit_button_five').addEventListener('click', function() {
    document.querySelector('#clock_screen').style.display="none"
    document.querySelector('#math_screen').style.display="none"
    document.querySelector('#main_screen').style.display="block"
})

// function updateClock() {
//     const now = new Date();
//     const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
//     const dayOfWeek = daysOfWeek[now.getDay()];
//     const year = now.getFullYear();
//     const month = (now.getMonth() + 1).toString().padStart(2, '0');
//     const day = now.getDate().toString().padStart(2, '0');
//     let hours = now.getHours();
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
    
//     let ampm = 'AM';
//     let displayHours = hours;
    
//     if (hours >= 12) {
//         ampm = 'PM';
//         displayHours = hours % 12;
//         if (displayHours === 0) {
//         displayHours = 12;
//         }
//     }
    
//     const timeString = `${year}-${month}-${day} (${dayOfWeek}) ${displayHours}:${minutes}:${seconds} ${ampm}`;
//     document.getElementById('clock_world').textContent = timeString;
// }

// // 매 초마다 시계 업데이트
// setInterval(updateClock, 1000);

// // 페이지 로드 시에도 시계 업데이트
// updateClock();

document.querySelector('#clock_world').innerHTML = `KST (한국 표준시):<br />       ${getWorldTime(+9)}<br /><br />`;
var korea_time = `KST (한국 표준시):<br />       ${getWorldTime(+9)}<br /><br />`;
var newyork_time = `EST (뉴욕 시간):<br />         ${getWorldTime(-5)}<br /><br />`;
var paris_time = `CET (파리 시간):<br />         ${getWorldTime(+1)}<br /><br />`;
var china_time = `CST (중국 표준시):<br />       ${getWorldTime(+8)}<br /><br />`;

function getWorldTime(tzOffset) { // 24시간제
  var now = new Date();
  var tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
  now.setTime(tz);

  var s =
    leadingZeros(now.getFullYear(), 4) + '-' +
    leadingZeros(now.getMonth() + 1, 2) + '-' +
    leadingZeros(now.getDate(), 2) + ' ' +
    leadingZeros(now.getHours(), 2) + ':' +
    leadingZeros(now.getMinutes(), 2) + ':' +
    leadingZeros(now.getSeconds(), 2);
  return s;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();
  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

var now_country = "korea"

document.querySelector('#korea').addEventListener('click', function() {
    document.querySelector('#clock_world').innerHTML = korea_time
    now_country='korea'
})
document.querySelector('#newyork').addEventListener('click', function() {
    document.querySelector('#clock_world').innerHTML = newyork_time
    now_country='newyork'
})
document.querySelector('#paris').addEventListener('click', function() {
    document.querySelector('#clock_world').innerHTML = paris_time
    now_country='paris'
})
document.querySelector('#china').addEventListener('click', function() {
    document.querySelector('#clock_world').innerHTML = china_time
    now_country='china'
})

document.querySelector('#change_country').addEventListener('change', (e)=>{
    console.log(e.target.value)
    now_country = e.target.value
})

function update_world_clock() {
    const clock_world_addr = document.querySelector('#clock_world')
    // console.log(1)
    if (now_country=="korea") {
        clock_world_addr.innerHTML = `KST (한국 표준시):<br />       ${getWorldTime(+9)}<br /><br />`
    }
    else if (now_country=="newyork") {
        clock_world_addr.innerHTML = `EST (뉴욕 시간):<br />         ${getWorldTime(-5)}<br /><br />`;
    }
    else if (now_country=="paris") {
        clock_world_addr.innerHTML = `CET (파리 시간):<br />         ${getWorldTime(+1)}<br /><br />`;
    }
    else {
        clock_world_addr.innerHTML = `CST (중국 표준시):<br />       ${getWorldTime(+8)}<br /><br />`;
    }
}
setInterval(update_world_clock, 1000)



const add = (char) => {
    const display = document.querySelector('#display');
    display.value = display.value + char;
    // let result = eval(display.value);
    // document.querySelector('#result').value = result;
}

const calculate = () => {
    const display = document.querySelector('#display');
    let result = eval(display.value);

    document.querySelector('#calculator_record_td').appendChild(document.createElement('tr'))
    document.querySelector('#calculator_record_td').lastChild.classList.add('calculator_record_tr')
    document.querySelector('#calculator_record_td').lastChild.innerHTML = `${display.value} = ${result}`

    display.value = "";
    document.querySelector('#result').value = result;
}

const reset = () => {
    document.querySelector('#display').value = "";
    document.querySelector('#result').value = "";
}

// const math_side_menu_li_addr = document.getElementsByClassName('math_side_menu_li')
document.getElementsByClassName('math_side_menu_li')[0].addEventListener('click', function() {
    document.getElementById('calculator').style.display = "block"
    document.getElementById('calculator_record').style.display = "none"
    // alert(1)
})
document.getElementsByClassName('math_side_menu_li')[1].addEventListener('click', function() {
    console.log(1)
    document.getElementById('calculator').style.display = "none"
})
document.getElementsByClassName('math_side_menu_li')[2].addEventListener('click', function() {
    console.log(1)
    document.getElementById('calculator').style.display = "none"
    document.getElementById('calculator_record').style.display = "block"
})
// document.querySelector('.math_side_menu_li').addEventListener('click', function() {
//     console.log(1)
// })


document.querySelector('#alram_add').addEventListener('click', function() {
  document.querySelector('#alram_custom').style.display = "block"  
})
document.querySelector('#alram_exit').addEventListener('click', function() {
    document.querySelector('#alram_custom').style.display = "none"
})

let alram_hour = false
let alram_min = false
document.querySelector('#alram_hour').addEventListener('click', function() {
    alram_hour = true
    alram_min = false
})
document.querySelector('#alram_min').addEventListener('click', function() {
    alram_hour = false
    alram_min = true
})

function alram_AMPM_change() {
    if (Number(document.querySelector('#alram_hour').innerHTML)<13) {
        document.querySelector('#alram_AMPM').value = "am"
    }
    else {
        document.querySelector('#alram_AMPM').value = "pm"
    }
}

window.addEventListener('keydown', function(e) {
    if (alram_hour==true) {
        if (Number(e.key)>-1) {
            this.document.querySelector('#alram_hour').innerHTML = this.document.querySelector('#alram_hour').innerHTML.substring(1)
            this.document.querySelector('#alram_hour').innerHTML += e.key
            alram_AMPM_change()
        }
    }
    if (alram_min==true) {
        if (Number(e.key)>-1) {
            this.document.querySelector('#alram_min').innerHTML = this.document.querySelector('#alram_min').innerHTML.substring(1)
            this.document.querySelector('#alram_min').innerHTML += e.key
            alram_AMPM_change()
        }    
    }
})

function alram_exit_click_event(Num) {
    document.getElementsByClassName('alram_tr_exit')[Num].addEventListener('click', function() {
        this.parentElement.remove()
    })
}

document.querySelector('#alram_finish').addEventListener('click', function() {
    document.querySelector('#alram_td').appendChild(document.createElement('tr'))
    document.querySelector('#alram_td').lastChild.innerHTML = `${document.querySelector('#alram_hour').innerHTML} : ${document.querySelector('#alram_min').innerHTML}`
    document.querySelector('#alram_td').lastChild.classList.add('alram_tr')
    
    document.querySelector('#alram_td').lastChild.appendChild(document.createElement('div'))
    document.querySelector('#alram_td').lastChild.lastChild.classList.add('alram_tr_exit')
    document.querySelector('#alram_td').lastChild.lastChild.innerHTML = "X"
    


    document.querySelector('#alram_custom').style.display = "none"
    document.querySelector('#alram_hour').innerHTML = "00"
    document.querySelector('#alram_min').innerHTML = "00"
  
    alram_exit_click_event(document.getElementsByClassName('alram_tr_exit').length-1)
    
})

// function alram_ring() {
//     for (let i=0; i<document.getElementsByClassName('alram_tr').length; i++) {
        
//     }
// }

document.querySelector('#setting_exit').addEventListener('click', function() {
    document.getElementById('clock_screen').style.display = "none"
    document.getElementById('main_screen').style.display = "block"
    document.getElementById('math_screen').style.display = "none"
    document.getElementById('setting_screen').style.display = "none"
})

for (let i=0; i<6; i++) {
    document.getElementsByClassName('setting_bg_change_td')[i].addEventListener('click', function() {
        document.querySelector('#main_screen').style.backgroundImage = `url(/img/bg${i}.png)`
        document.getElementById('clock_screen').style.display = "none"
        document.getElementById('main_screen').style.display = "block"
        document.getElementById('math_screen').style.display = "none"
        document.getElementById('setting_screen').style.display = "none"

    })
}
