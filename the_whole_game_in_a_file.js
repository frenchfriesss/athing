var size = 75; //kich co mot hinh luc giac
var canvassize = 600; //self-explanatory
var alreadypressed = 0; //kiem tra xem chuot da duoc bam chua
var buttonpressed = 0; //kiem tra xem bat ki cai gi da duoc bam chua
var px = canvassize / 2, //toa do x cua hinh luc giac giua
  py = canvassize / 2; //toa do y cua hinh luc giac giua
var won = 0; // kiem tra xem da thang chua
let myfont; /* Noi that la em cung khong nho em viet cai gi vao day nua */
var hesor = 6 / 8,
  hesog = 4 / 8,
  hesob = 4 / 8; /* Noi that la em cung khong nho em viet cai gi vao day nua */
var bgr = 150,
  bgg = 150,
  bgb = 150,
  offsetr = 20,
  offsetg = 20,
  offsetb = 20; /* Noi that la em cung khong nho em viet cai gi vao day nua */
var giatoc = 99 / 100; /* Noi that la em cung khong nho em viet cai gi vao day nua */
var layers; /* Noi that la em cung khong nho em viet cai gi vao day nua */
var distx, disty; /* Noi that la em cung khong nho em viet cai gi vao day nua */
var startsp = 2.5; /* Noi that la em cung khong nho em viet cai gi vao day nua */
var chosen; /* Noi that la em cung khong nho em viet cai gi vao day nua */
var button = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
var pos = [
  [px = canvassize / 2, py = canvassize / 2],
  [px = canvassize / 2, py = canvassize / 2],
  [px = canvassize / 2, py = canvassize / 2],
  [px = canvassize / 2, py = canvassize / 2],
  [px = canvassize / 2, py = canvassize / 2],
  [px = canvassize / 2, py = canvassize / 2],
  [px = canvassize / 2, py = canvassize / 2]
]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
var last = [
  [px = canvassize / 2, py = canvassize / 2],
  [px = canvassize / 2, py = canvassize / 2],
  [px = canvassize / 2, py = canvassize / 2],
  [px = canvassize / 2, py = canvassize / 2],
  [px = canvassize / 2, py = canvassize / 2],
  [px = canvassize / 2, py = canvassize / 2],
  [px = canvassize / 2, py = canvassize / 2]
]
var playtime = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
var val = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
var speed = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0]
]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
var shadecolor = [
  [+offsetr * 2, +offsetg * 2, +offsetb * 2],
  [+offsetr, +offsetg, +offsetb],
  [-offsetr, -offsetg, -offsetb],
  [-offsetr * 2, -offsetg * 2, -offsetb * 2],
  [-offsetr, -offsetg, -offsetb],
  [+offsetr, +offsetg, +offsetb]
]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
let chose = [0, 0, 0, 0, 0, 0, 0]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
let clipcnt = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
let arr = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
let arr1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]; /* Noi that la em cung khong nho em viet cai gi vao day nua */

var clipped = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
var isclipped = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]; /* Noi that la em cung khong nho em viet cai gi vao day nua */

let mySound; /* Noi that la em cung khong nho em viet cai gi vao day nua */
function Init() {
  mySound = loadSound('uwu.mp3'); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  mySound.setVolume(100); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  mySound.play(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  let cnt = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
  for (let j = 0; j <= 5; j++) {
    while (1) {
      arr[0][j] = floor(random(1, 9)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
      if (cnt[0][arr[0][j]] == 0) {
        cnt[0][arr[0][j]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
        break; /* Noi that la em cung khong nho em viet cai gi vao day nua */
      }
    }
  }
  arr[1][1] = arr[0][4]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  arr[2][2] = arr[0][5]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  arr[3][3] = arr[0][0]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  arr[4][4] = arr[0][1]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  arr[5][5] = arr[0][2]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  arr[6][0] = arr[0][3]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  cnt[1][arr[1][1]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  cnt[2][arr[2][1]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  cnt[3][arr[3][1]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  cnt[4][arr[4][1]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  cnt[5][arr[5][1]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  cnt[6][arr[6][0]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  for (let i = 1; i <= 6; i++) {
    while (1) {
      arr[i][i - 1] = floor(random(1, 9)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
      if (cnt[i][arr[i][i - 1]] == 0) {
        cnt[i][arr[i][i - 1]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
        break; /* Noi that la em cung khong nho em viet cai gi vao day nua */
      }
    }
  }
  arr[2][3] = arr[1][0]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  arr[3][4] = arr[2][1]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  arr[4][5] = arr[3][2]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  arr[5][0] = arr[4][3]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  arr[6][1] = arr[5][4]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  arr[1][2] = arr[6][5]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  cnt[2][arr[2][3]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  cnt[3][arr[3][4]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  cnt[4][arr[4][5]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  cnt[5][arr[5][0]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  cnt[6][arr[6][1]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  cnt[1][arr[1][2]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  for (let i = 1; i <= 6; i++) {
    for (let j = i; j <= i + 2; j++) {
      let k = (j + 2) % 6; /* Noi that la em cung khong nho em viet cai gi vao day nua */
      while (1) {
        arr[i][k] = floor(random(1, 9)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
        if (cnt[i][arr[i][k]] == 0) {
          cnt[i][arr[i][k]] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
          break; /* Noi that la em cung khong nho em viet cai gi vao day nua */
        }
      }
    }
  }
}

function initialize() {
  won = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  playtime = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  for (let i = 0; i < 7; i++) {
    let rtt = random(2); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    speed[i][0] = cos(PI * rtt) * startsp; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    pos[i][0] = canvassize / 2; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    last[i][0] = pos[i][0]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    speed[i][1] = sin(PI * rtt) * startsp; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    pos[i][1] = canvassize / 2; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    last[i][1] = pos[i][1]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  }
  clipcnt = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  // bgb=150; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  // bgr=150; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  // bgg=150; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  for (let i = 0; i <= 14; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
    for (let j = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ j <= 9; /* Noi that la em cung khong nho em viet cai gi vao day nua */ j++) {
      arr1[i][j] = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
      arr[i][j] = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    }
  }
  for (let i = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i <= 7; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
    clipped[i] = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    isclipped[i] = 10; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  }
}

function setup() {
  createCanvas(canvassize, canvassize); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  frameRate(60); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  myfont = loadFont('thefont.otf'); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  textFont(myfont); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  initialize(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  Init(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  isclipped[0] = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  button = 250; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  bgg = 220; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  clipcnt = 7; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  won = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
}

function generate_() {
  hexa(px, py); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  for (let i = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i <= 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
    var dist = sqrt(3) / 2 * size + 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    hexa(px + dist * cos(PI / 6 + PI / 3 * i) * 2, px + dist * sin(PI / 6 + PI / 3 * i) * 2); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  }
}

function hexa(tx, ty) {
  push(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  translate(tx, ty); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  for (let i = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i <= 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
    let px1 = size * cos(PI / 3 * i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let py1 = size * sin(PI / 3 * i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let px2 = size * cos(PI / 3 * (i + 1)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let py2 = size * sin(PI / 3 * (i + 1)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    strokeWeight(2); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    stroke(bgr - 20, bgg - 20, bgb - 20); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    line(0, 0, px1, py1); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    strokeWeight(5); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    stroke(shadecolor[i][0] + bgr, bgg + shadecolor[i][1], bgb + shadecolor[i][2]); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    line(px1, py1, px2, py2); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  }
  pop(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
}

function hexanoi(tx, ty, cac, id) {
  push(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  translate(tx, ty); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  let distt = sqrt(3) * size / 3; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  for (let i = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i <= 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
    let px1 = size * cos(PI / 3 * i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let py1 = size * sin(PI / 3 * i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let px2 = size * cos(PI / 3 * (i + 1)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let py2 = size * sin(PI / 3 * (i + 1)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    fill(bgr + cac, bgg + cac, bgb + cac); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    triangle(0, 0, px1, py1, px2, py2); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  }
  for (let i = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i <= 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
    let px1 = size * cos(PI / 3 * i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let py1 = size * sin(PI / 3 * i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let px2 = size * cos(PI / 3 * (i + 1)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let py2 = size * sin(PI / 3 * (i + 1)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    strokeWeight(2); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    stroke(bgr - 20 + cac, bgg - 20 + cac, bgb - 20 + cac); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    line(0, 0, px1, py1); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    strokeWeight(5); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    stroke(bgr + shadecolor[(i + 3) % 6][0] + cac, bgg + shadecolor[(i + 3) % 6][1] + cac, bgb + shadecolor[(i + 3) % 6][2] + cac); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    line(px1, py1, px2, py2); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  }
  textAlign(CENTER); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  textSize(15); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  for (var i = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i <= 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
    let px1 = distt * cos(PI / 3 * i + PI / 6) + 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let py1 = distt * sin(PI / 3 * i + PI / 6) + 10; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    // console.log(id,arr[id]); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    strokeWeight(2); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    fill(bgr + 20 + cac, bgg + 20 + cac, bgb + 20 + cac); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    stroke(bgr + 20 + cac, bgg + 20 + cac, bgb + 20 + cac); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    // console.log(arr[id]); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    text(arr[id][i], px1, py1); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    strokeWeight(5); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  }
  pop(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
}

function getdist(x1, y1, x2, y2) {
  return sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
}

function slowdown(i) {
  speed[i][0] *= giatoc; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  speed[i][1] *= giatoc; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  // speed[i][0]+=trux; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  // speed[i][1]+=truy; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  // if(i==1)
  // console.log(speed[i])
}


function shadow(tx, ty) {
  push(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  strokeWeight(0); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  translate(tx, ty); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  for (let i = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i <= 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
    let px1 = (size - 4) * cos(PI / 3 * i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let py1 = (size - 4) * sin(PI / 3 * i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let px2 = (size - 4) * cos(PI / 3 * (i + 1)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let py2 = (size - 4) * sin(PI / 3 * (i + 1)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    fill(0, 0, 0, 80); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    triangle(0, 0, px1, py1, px2, py2); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  }
  pop(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
}
var totfr = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
var notpressedyet = 1,
  theone = 10,
  ddx, ddy, notchosenyet = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */

function clip(id, des) {
  speed[id] = [0, 0]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  for (let i = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i < 6; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
    arr1[des][i] = arr[id][i]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  }
}

function unclip(des) {
  for (let i = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i < 6; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
    arr1[des][i] = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  }
}

function hexagon_hole() {
  translate(px, py); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  let distt = sqrt(3) * size / 3; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  for (let i = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i <= 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
    let px1 = size * cos(PI / 3 * i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let py1 = size * sin(PI / 3 * i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let px2 = size * cos(PI / 3 * (i + 1)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let py2 = size * sin(PI / 3 * (i + 1)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let fillcol = 60; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    fill(fillcol, fillcol, fillcol); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    stroke(fillcol, fillcol, fillcol); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    triangle(0, 0, px1, py1, px2, py2); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  }
}

function animation(time) {
  push(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  translate(0, 0); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  let time1 = min(time, size); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  hexagon_hole(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
}

function hexathing() {
  push(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  translate(px, py); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  let distt = sqrt(3) * size / 3; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  for (let i = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i <= 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
    let px1 = (size - 3) * cos(PI / 3 * i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let py1 = (size - 3) * sin(PI / 3 * i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let px2 = (size - 3) * cos(PI / 3 * (i + 1)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let py2 = (size - 3) * sin(PI / 3 * (i + 1)); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let fillcol = 60; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    fill(150, 210, 150, button); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    stroke(150, 210, 150, button); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    strokeWeight(1); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    triangle(0, 0, px1, py1, px2, py2); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  }
  fill(150, 190, 150, button); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  stroke(150, 190, 150, button); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  strokeWeight(0); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  let ss = 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  triangle(-3 * ss, -5 * ss, -3 * ss, 5 * ss, 5 * ss, 0 * ss); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  pop(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
}

function check() {
  if (arr1[1][1] != arr1[0][4] && arr1[1][1] != 0 && arr1[0][4] != 0) return 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  if (arr1[2][2] != arr1[0][5] && arr1[2][2] != 0 && arr1[0][5] != 0) return 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  if (arr1[3][3] != arr1[0][0] && arr1[3][3] != 0 && arr1[0][0] != 0) return 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  if (arr1[4][4] != arr1[0][1] && arr1[4][4] != 0 && arr1[0][1] != 0) return 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  if (arr1[5][5] != arr1[0][2] && arr1[5][5] != 0 && arr1[0][2] != 0) return 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  if (arr1[6][0] != arr1[0][3] && arr1[6][0] != 0 && arr1[0][3] != 0) return 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  if (arr1[2][3] != arr1[1][0] && arr1[2][3] != 0 && arr1[1][0] != 0) return 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  if (arr1[3][4] != arr1[2][1] && arr1[3][4] != 0 && arr1[2][1] != 0) return 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  if (arr1[4][5] != arr1[3][2] && arr1[4][5] != 0 && arr1[3][2] != 0) return 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  if (arr1[5][0] != arr1[4][3] && arr1[5][0] != 0 && arr1[4][3] != 0) return 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  if (arr1[6][1] != arr1[5][4] && arr1[6][1] != 0 && arr1[5][4] != 0) return 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  if (arr1[1][2] != arr1[6][5] && arr1[1][2] != 0 && arr1[6][5] != 0) return 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  return 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
}

var jump = 1.5; /* Noi that la em cung khong nho em viet cai gi vao day nua */

function draw() {
  playtime++; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  // console.log(clipcnt,check()); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  if (check() > 0 && clipcnt != 7) {
    if (bgr > 150) {
      bgr -= jump; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    } else if (bgr < 150) {
      bgr += jump; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    }
    if (bgb > 150) {
      bgb -= jump; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    } else if (bgb < 150) {
      bgb += jump; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    }
    if (bgg > 150 + clipcnt * 10) {
      bgg -= jump; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    } else if (bgg < 150 + clipcnt * 10) {
      bgg += jump; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    }
  } else if (check() == 0) {
    if (bgr > 200) {
      bgr -= jump; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    } else if (bgr < 200) {
      bgr += jump; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    }
    if (bgb > 70) {
      bgb -= jump; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    } else if (bgb < 70) {
      bgb += jump; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    }
    if (bgg > 70) {
      bgg -= jump; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    } else if (bgg < 70) {
      bgg += jump; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    }
  }
  // console.log(bgr, bgg, bgb); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  // console.log(check()); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  totfr++; /* Noi that la em cung khong nho em viet cai gi vao day nua */
  background(bgr, bgg, bgb); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  generate_(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  if (button == 0)
    if (mouseIsPressed) {
      if (notpressedyet) {
        notpressedyet = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
        if (notchosenyet) {
          let yolo = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
          for (let i = 6; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i >= 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i--) {
            if (isclipped[i] < 10) continue; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            if (getdist(pos[i][0], pos[i][1], mouseX, mouseY) <= size - 10) {
              if (isclipped[i] != 10) {
                unclip(isclipped[i]); /* Noi that la em cung khong nho em viet cai gi vao day nua */
                clipped[isclipped[i]] = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
                isclipped[i] = 10; /* Noi that la em cung khong nho em viet cai gi vao day nua */
                clipcnt--; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              }
              notchosenyet = false; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              theone = i; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              ddx = mouseX - pos[i][0]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              ddy = mouseY - pos[i][1]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              yolo = true; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              break; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            }
          }
          if (!yolo)
            for (let i = 6; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i >= 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i--) {
              if (getdist(pos[i][0], pos[i][1], mouseX, mouseY) <= size - 10) {
                if (isclipped[i] != 10) {
                  unclip(isclipped[i]); /* Noi that la em cung khong nho em viet cai gi vao day nua */
                  clipped[isclipped[i]] = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
                  isclipped[i] = 10; /* Noi that la em cung khong nho em viet cai gi vao day nua */
                  clipcnt--; /* Noi that la em cung khong nho em viet cai gi vao day nua */
                }
                notchosenyet = false; /* Noi that la em cung khong nho em viet cai gi vao day nua */
                theone = i; /* Noi that la em cung khong nho em viet cai gi vao day nua */
                ddx = mouseX - pos[i][0]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
                ddy = mouseY - pos[i][1]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
                break; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              }
            }
        }
      }
    } else {
      if (!notpressedyet) {
        notpressedyet = true; /* Noi that la em cung khong nho em viet cai gi vao day nua */
        if (!notchosenyet) {
          notchosenyet = true; /* Noi that la em cung khong nho em viet cai gi vao day nua */
          speed[theone][0] = pos[theone][0] - last[theone][0]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
          speed[theone][1] = pos[theone][1] - last[theone][1]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
          speed[theone][0] /= 2; /* Noi that la em cung khong nho em viet cai gi vao day nua */
          speed[theone][1] /= 2; /* Noi that la em cung khong nho em viet cai gi vao day nua */
          if (dist(px, py, pos[theone][0], pos[theone][1]) < 20 && !clipped[0]) {
            clipped[0] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            isclipped[theone] = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            pos[theone][0] = px; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            pos[theone][1] = py; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            clip(theone, 0); /* Noi that la em cung khong nho em viet cai gi vao day nua */
            clipcnt++; /* Noi that la em cung khong nho em viet cai gi vao day nua */
          }
          for (let i = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i <= 6; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
            let abcd = 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            let px1 = px + (size - abcd) * cos(-PI / 2 - PI / 3 + PI / 3 * i) * 2,
              py1 = py + (size - abcd) * sin(-PI / 2 - PI / 3 + PI / 3 * i) * 2; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            if (dist(px1, py1, pos[theone][0], pos[theone][1]) < 20 && !clipped[i]) {
              clipped[i] = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              isclipped[theone] = i; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              pos[theone][0] = px1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              pos[theone][1] = py1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              clip(theone, i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
              clipcnt++; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            }
          }
        }
        theone = 1000; /* Noi that la em cung khong nho em viet cai gi vao day nua */
      }
    } {
      for (let i = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i <= 6; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
        last[i][0] = pos[i][0]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
        last[i][1] = pos[i][1]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
        if (i == theone) {
          pos[i][0] = mouseX - ddx; /* Noi that la em cung khong nho em viet cai gi vao day nua */
          pos[i][1] = mouseY - ddy; /* Noi that la em cung khong nho em viet cai gi vao day nua */
          shadow(mouseX - ddx + 5, mouseY - ddy + 10); /* Noi that la em cung khong nho em viet cai gi vao day nua */
          hexanoi(mouseX - ddx - 3, mouseY - ddy - 3, 20, i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
        } else {
          if (pos[i][0] < size || pos[i][0] > canvassize - size) {
            speed[i][0] *= 3 / 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            speed[i][1] *= 3 / 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            if (pos[i][0] < size) {
              pos[i][0] = size; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              speed[i][0] = -speed[i][0]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            } else {
              pos[i][0] = canvassize - size; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              speed[i][0] = -speed[i][0]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            }
          }
          pos[i][0] += speed[i][0]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
          if (pos[i][1] < size * sqrt(3) / 2 || pos[i][1] > canvassize - size * sqrt(3) / 2) {
            speed[i][0] *= 3 / 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            speed[i][1] *= 3 / 5; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            if (pos[i][1] < size * sqrt(3) / 2) {
              pos[i][1] = size * sqrt(3) / 2; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              speed[i][1] = -speed[i][1]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            } else {
              pos[i][1] = canvassize - size * sqrt(3) / 2; /* Noi that la em cung khong nho em viet cai gi vao day nua */
              speed[i][1] = -speed[i][1]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
            }
          }
          pos[i][1] += speed[i][1]; /* Noi that la em cung khong nho em viet cai gi vao day nua */
          hexanoi(pos[i][0], pos[i][1], 0, i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
          slowdown(i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
        }
      }
      for (let i = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i <= 6; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
        if (i == theone) {
          pos[i][0] = mouseX - ddx; /* Noi that la em cung khong nho em viet cai gi vao day nua */
          pos[i][1] = mouseY - ddy; /* Noi that la em cung khong nho em viet cai gi vao day nua */
          shadow(mouseX - ddx + 5, mouseY - ddy + 10); /* Noi that la em cung khong nho em viet cai gi vao day nua */
          hexanoi(mouseX - ddx - 3, mouseY - ddy - 3, 20, i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
        } else {
          if (isclipped[i] == 10)
            hexanoi(pos[i][0], pos[i][1], 0, i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
        }
      }
    }
  // image(img,0,0,canvassize,canvassize); /* Noi that la em cung khong nho em viet cai gi vao day nua */
  if (check() > 0 && clipcnt == 7) {
    playtime--; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    let totaltime = playtime / 60; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    button += jump * 2; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    if (button >= 250) button = 250; /* Noi that la em cung khong nho em viet cai gi vao day nua */
    fill(150, 220, 150, button); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    rect(-10, -10, 610, 610); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    push(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    fill(150, 200, 150, button); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    stroke(150, 200, 150, button); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    textAlign(CENTER); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    textSize(50); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    strokeWeight(3); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    if (won) text(floor(totaltime / 60) + "m " + floor(totaltime % 60) + "s ", 300, 200); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    pop(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    for (let i = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i <= 6; /* Noi that la em cung khong nho em viet cai gi vao day nua */ i++) {
      if (isclipped[i] == 0) {
        hexanoi(px, py, 0, i); /* Noi that la em cung khong nho em viet cai gi vao day nua */
      }
    }
    hexathing(0); /* Noi that la em cung khong nho em viet cai gi vao day nua */
    if (mouseIsPressed) {
      if (!alreadypressed) {
        alreadypressed = 1; /* Noi that la em cung khong nho em viet cai gi vao day nua */
        if (dist(px, py, mouseX, mouseY) <= size) {
          buttonpressed = true; /* Noi that la em cung khong nho em viet cai gi vao day nua */
        }
      }
      if (buttonpressed) {
        hexa(px, py); /* Noi that la em cung khong nho em viet cai gi vao day nua */
        hexathing(0); /* Noi that la em cung khong nho em viet cai gi vao day nua */
      }
    } else {
      if (alreadypressed) {
        alreadypressed = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
        if (buttonpressed) {
          initialize(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
          Init(); /* Noi that la em cung khong nho em viet cai gi vao day nua */
          button = 0; /* Noi that la em cung khong nho em viet cai gi vao day nua */
        }
        buttonpressed = false; /* Noi that la em cung khong nho em viet cai gi vao day nua */
      }
    }
  }
}