const kpElement = document.getElementById('scenarioKp');
const plElement = document.getElementById('charaPl');
const cArray = [];
const sArray = [];

//CSVファイルを読み込む
function getCsvData(dataPathC, dataPathS) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvS(response, dataPathS);
    });
    request.open('GET', dataPathC, true);
    request.send();// HTTPリクエストの発行

}
   
function getCsvS(data, dataPathS) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     convertArray(data, response);
    });
    request.open('GET', dataPathS, true);
    request.send();// HTTPリクエストの発行
}

function convertArray(dataC, dataS) {
    const dataStringC = dataC.split('\n');// 改行を区切り文字として行を要素とした配列を生成
    const dataStringS = dataS.split('\n');
    
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (let i = 0; i < dataStringC.length; i++) {
        cArray[i] = dataStringC[i].split(',');
    }
    for (let i = 0; i < dataStringS.length; i++) {
        sArray[i] = dataStringS[i].split(',');
    }
    
    display();
}

function display() {
    let kp = "";
    let htmlPL = "";

    for (let i = 1; i < sArray.length; i++) {
        if ((sArray[i][5]).indexOf("管理人") !== -1) {
            if (sArray[i][0]) {
                kp += '<a href="../scenario/'+sArray[i][12]+'">'+change(sArray[i][1], "#", ",")+'</a><br>';
            }
        }
        if (sArray[i][7]) {
            let sPL = "";
            let cPL = "";
            let j = search(sArray[i][7]);
                        
            sPL = '<a class="sPL" href="../scenario/'+sArray[i][12]+'"><h4>'+change(sArray[i][1], "#", ",")+'</h4></a>';
            cPL = '<a class="cPL" href="../'+cArray[j][1]+'"><img src="../character/manager/'+cArray[j][2]+'"><p>'+sArray[i][7]+'</p></a>';
            htmlPL += '<div class="htmlPL">'+sPL+cPL+'</div>';
        }
    }

    kpElement.innerHTML = kp;
    plElement.innerHTML = htmlPL;
}

function change(text, a, b) {
    let i = 0;
    let length = text.length;
    for (i=0; i < length; i++) {
      text = text.replace(a,b); 
    }
    return text;
}

function search(chara) {

    return cArray[1][2];
}

getCsvData('../website - manager.csv', '../scenario/website - scenario.csv');
