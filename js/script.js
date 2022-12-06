// canvas要素の取得
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 文字を描画するための配列
const chars = ['パ', 'イ', 'ケ', 'ツ', 'ポ', 'ロ', 'リ'];

// 文字の情報を格納するためのオブジェクト
const charData = {};

// 文字の数
const charNum = 7;

// 文字の大きさ
const charSize = 60;

// 初期化処理
function init() {
    // canvasの大きさを設定
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 文字をランダムに配置する
    for (let i = 0; i < charNum; i++) {
        // 文字の種類をランダムに決定
        //const char = chars[Math.floor(Math.random() * chars.length)];
        // 文字の種類を配列から取り出す
        const char = chars[i % chars.length];

        // 文字の初期位置をランダムに決定
        const x = Math.random() * (canvas.width - charSize);
        const y = Math.random() * (canvas.height - charSize);

        // 文字の初期速度をランダムに決定
        const vx = Math.random() * 2 - 1;
        const vy = Math.random() * 2 - 1;

        // 文字の情報を格納
        charData[i] = { char, x, y, vx, vy };
    }
}

// 描画処理
function draw() {
    // canvasをクリアする
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 文字の情報を取得
    for (const key in charData) {
        const { char, x, y, vx, vy } = charData[key];

        // 文字を描画
        ctx.font = `${charSize}px sans-serif`;
        ctx.fillText(char, x, y);

        // 文字の位置を更新
        charData[key].x += vx;
        charData[key].y += vy;

        // 文字が画面外に出た場合の処理
        if (charData[key].x < 0 || charData[key].x > canvas.width - charSize) {
            charData[key].vx *= -1;
        }
        if (charData[key].y < 0 || charData[key].y > canvas.height - charSize) {
            charData[key].vy *= -1;
        }
    }
}

// ループ処理
function loop() {
    // 描画処理
    draw();
  
    // 一定時間後に再度ループ処理を実行
    setTimeout(loop, 10);
  }
  
  // 初期化処理を実行
  init();
  
  // ループ処理を実行
  loop();
  
