/*==========================================
型定義
==========================================*/
//動作モード
var MODE;
(function (MODE) {
    MODE[MODE["Count"] = 0] = "Count";
    MODE[MODE["Watch"] = 1] = "Watch";
})(MODE || (MODE = {}));
/*============================================================
グローバル変数
============================================================*/
//動作モード
var appMode = MODE.Count;
//スタートからの経過時間(ミリ秒)
var timeCount = 0;
//計測状態(計測中:true、停止中:false)
var isRunning = false;
//タイマーの識別ID
var timerID = 0;
//タイマーの識別ID(時計用)
var timerID2 = 0;
//カウント表示部
var elmCount = document.querySelector('#count');
//スタートボタン
var elmStart = document.querySelector('#start');
//リセットボタン
var elmReset = document.querySelector('#reset');
//日付表示部
var elmDate = document.querySelector('#date');
/*============================================================
イベントハンドラ
============================================================*/
//アプリケーション初期化
var onPageLoad = function () {
    //日付表示部を非表示
    elmDate.style.visibility = 'hidden';
    //描画を更新
    updateView();
};
//スタート処理
var onStart = function () {
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        //停止中の場合
        if (isRunning === false) {
            //タイマーを起動
            startTimer(10);
        }
        //計測中の場合
        else {
            //タイマーを停止
            stopTimer(timerID);
        }
    }
};
//リセット処理
var onReset = function () {
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        //タイマーを停止
        stopTimer(timerID);
        //カウントをリセット
        resetCount();
        //描画を更新
        updateView(timeCount);
    }
};
//動作モード変更処理
var onChangeMode = function () {
    //動作モードを変更
    changeMode();
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        //カウントをリセット
        resetCount();
        //描画を更新
        updateView();
    }
    //時計モードの場合
    else if (appMode === MODE.Watch) {
        //すぐにタイマーを開始
        startTimer(1000);
        //描画を更新
        updateView();
    }
};
/*============================================================
イベントリスナー
============================================================*/
//ページの読み込み完了イベント
window.addEventListener("load", onPageLoad);
//スタートボタンのクリックイベント
elmStart.addEventListener("click", onStart);
//リセットボタンのクリックイベント
elmReset.addEventListener("click", onReset);
//リセットボタンのダブルクリックイベント
elmReset.addEventListener("dblclick", onChangeMode);
/*============================================================
ユーザー定義関数
============================================================*/
//描画更新
function updateView(timeCount) {
    if (timeCount === void 0) { timeCount = 0; }
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        //最大表示時間を超えない制限
        if (timeCount > 60 * 60 * 1000 - 1) {
            timeCount = 60 * 60 * 1000 - 1; //59:59:99にする
        }
        //経過時間の「分」を求める。
        var mm = Math.floor(timeCount / 1000 / 60).toString().padStart(2, "0");
        //経過時間の「秒」を求める。
        var ss = (Math.floor(timeCount / 1000) % 60).toString().padStart(2, "0");
        //経過時間の「ミリ秒」を求める。
        var ms = (timeCount % 1000).toString().padStart(3, "0").slice(0, 2);
        //表示する文字列を編集
        var count = mm + ":" + ss + "<small>" + ms + "</small>";
        //カウントの表示を更新
        elmCount.innerHTML = count;
    }
    //時計モードの場合
    else if (appMode === MODE.Watch) {
        //日付オブジェクト
        var now = new Date();
        //現在の「年」を求める
        var year = now.getFullYear().toString();
        //現在の「月」を求める
        var month = (now.getMonth() + 1).toString().padStart(2, '0');
        //現在の「日」を求める
        var date = now.getDate().toString().padStart(2, '0');
        //曜日の配列
        var dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        //現在の「曜日」を求める
        var day = dayOfWeek[now.getDay()];
        //表示する文字列を編集
        var today = year + '/' + month + '/' + date + '/' + '<small>' + day + '</small>';
        //日付表示部を更新
        elmDate.innerHTML = today;
        //現在の「時間」を求める
        var hh = now.getHours().toString().padStart(2, '0');
        //現在の「分」を求める
        var mm = now.getMinutes().toString().padStart(2, '0');
        //現在の「秒」を求める
        var ss = now.getSeconds().toString().padStart(2, '0');
        //表示する文字列を編集
        var time = hh + ":" + mm + "<small>" + ss + "</small>";
        //時刻の表示を更新
        elmCount.innerHTML = time;
    }
}
//計測スタート
function startTimer(interval) {
    if (interval === void 0) { interval = 1000; }
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        //指定された時間ごとにカウントを更新
        timerID = setInterval(function () {
            //経過時間を加算
            timeCount += interval;
            //描画を更新
            updateView(timeCount);
        }, interval);
        //計測状態を「計測中」に変更
        isRunning = true;
    }
    //時計モードの場合
    else if (appMode === MODE.Watch) {
        //指定された時間ごとに描画を更新
        timerID2 = setInterval(function () {
            //描画を更新
            updateView();
        }, interval);
    }
}
//計測ストップ
function stopTimer(timerID) {
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        //タイマーを停止
        clearInterval(timerID);
        //計測状態を「停止中」に変更
        isRunning = false;
    }
    //時計モードの場合
    else if (appMode === MODE.Watch) {
        //タイマーを停止
        clearInterval(timerID);
        //計測状態を「停止中」に変更
        isRunning = false;
    }
}
//カウントをリセット
function resetCount() {
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        //経過時間を初期化
        timeCount = 0;
    }
}
//動作モード切り替え
function changeMode() {
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        //時計モードに変更
        appMode = MODE.Watch;
        //日付表示部を表示
        elmDate.style.visibility = 'visible';
    }
    //時計モードの場合
    else if (appMode === MODE.Watch) {
        //ストップウォッチモードに変更
        appMode = MODE.Count;
        //日付表示部を非表示
        elmDate.style.visibility = 'hidden';
    }
}
