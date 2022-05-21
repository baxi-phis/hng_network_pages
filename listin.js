// Serverlistに追加するjs
let sl;

//引数にゲーム名、サーバー名、サーバーホスト、アドレスを入れるとserverlistに追加します。リログすると中身もとに戻るので毎回やってね。あとHTMLのul liを消したほうが良くなるかも
function listin(lgame, lname, lhost, laddress){
	//serverlistを取得
	sl = document.getElementById('slist')
	// li要素を作成
	var li = document.createElement('li');

	// テキスト情報を作成
	var text = document.createTextNode(`${lgame} ： ${lname}\nホスト：${lhost} アドレス：${laddress}`);

	// ul要素に追加
	li.appendChild(text);
	sl.appendChild(li);
}