const characters = document.querySelectorAll(".character");
const container = document.querySelector("#container");

// キャラクターの初期位置と移動方向を設定する
const characterPositions = [];
const characterDirections = [];
for (let i = 0; i < characters.length; i++) {
  characterPositions.push({
    x: Math.random() * container.offsetWidth,
    y: Math.random() * container.offsetHeight,
  });
  characterDirections.push({
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
  });
}

// 1フレームごとにキャラクターを移動させる
function updateCharacters() {
  for (let i = 0; i < characters.length; i++) {
    // キャラクターを移動させる
    characterPositions[i].x += characterDirections[i].x;
    characterPositions[i].y += characterDirections[i].y;

    // 画面の端に達した場合は方向を反転させる
    if (characterPositions[i].x < 0 || characterPositions[i].x > container.offsetWidth) {
      characterDirections[i].x *= -1;
    }
    if (characterPositions[i].y < 0 || characterPositions[i].y > container.offsetHeight) {
      characterDirections[i].y *= -1;
    }

    // キャラクターを移動させた位置に配置する
    characters[i].style.left = characterPositions[i].x + "px";
    characters[i].style.top = characterPositions[i].y + "px";
  }
}

setInterval(updateCharacters, 1000 / 60); // 60fpsで更新する