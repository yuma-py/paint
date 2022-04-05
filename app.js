/*
メモ
関数内でvarやletやconstとつけずに宣言するとグローバル変数扱いになる
abcdefg
*/

/*
document.getElementById(ID名)
特定のID名（HTML内に一つ）を持つ要素を取得
*/
var canvas = document.getElementById('canvas');//canvasというID名がついた要素を取得して、canvasという名のオブジェクト代入する
/*
canvas.getContext('2d')
2Dグラフィックを描くための関数やプロパティをもつオブジェクトを取得する
*/
var ctx = canvas.getContext('2d');//2Dグラフィックを描くための関数やプロパティをもつオブジェクトを取得し、ctxという名のオブジェクトに代入する

/*
window.innerWidth
ブラウザの表示エリアの幅(スクロールバーも含む)
window.innerHeight
ブラウザの表示エリアの高さ(スクロールバーも含む)
*/
canvas.width = window.innerWidth-2;//ブラウザの表示エリアの幅(スクロールバーを消すため-2)をcanvasの幅に設定する
canvas.height = window.innerHeight-2;//ブラウザの表示エリアの高さ(スクロールバーを消すため-2)をcanvasの高さに設定する

/*
target.addEventListener(イベント名,イベントハンドラー(実行する関数))
tagetでイベント(マウスを動かす,マウスをクリック,キーボード入力など)が発生したら指定した関数を実行
*/
canvas.addEventListener('mousemove',mouseMove);//マウスが動いたら指定した関数を実行
canvas.addEventListener('mousedown',mouseDown);//マウスを押したら指定した関数を実行
canvas.addEventListener('mouseup',mouseUp);//マウスを離したら指定した関数を実行

function mouseMove(e){
    if(!state) return; //マウスを離していたらマウスを動かしても下の命令は実行されず関数内から出る
    ctx.beginPath();//現在のパスをリセットする
    ctx.moveTo(mousex,mousey);//マウスを押したときの座標をパスの始点とする
    ctx.lineTo(e.clientX,e.clientY);//指定した座標までのパスまでにラインを引く
    ctx.stroke();//作成したパスを画面上に表示する
    mousex = e.clientX;//イベント(マウスが動いたとき)が発生したX座標を取得(始点を更新)
    mousey = e.clientY;//イベント(マウスが動いたとき)が発生したY座標を取得(始点を更新)
}

function mouseDown(e){
    mousex = e.clientX;//イベント(マウス押す)が発生したX座標を取得
    mousey = e.clientY;//イベント(マウス押す)が発生したY座標を取得
    state = true;//マウスを押している状態をtrueとする
}

function mouseUp(e){
    state = false;//マウスを離している状態をfalseとする
}

