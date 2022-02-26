const kpElement = document.getElementById('scenarioKp');
const plElement = document.getElementById('scenarioPl');

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
    let sKP = "";
    let sPL = "";

    for (let i = 1; i <= sArray.length; i++) {
        if (sArray[i][5].indexOf("管理人") !== -1) {
            if (sArray[i][0]) {
                sKP += '<a href="'+sArray[i][12]+'">'+change(sArray[i][1], "#", ",")+'</a><br>';
            }
        }
        if (sArray[i][7]) {
            sPL += '<td><a href="'+sArray[i][12]+'">'+sArray[i][1]+'</a></td><td><a href="'+search(sArray[i][7])+'">'+sArray[i][7]+'</a></td></tr><tr>';
        }
    }

    kpElement.innerHTML = sKP;
    plElement.innerHTML = sPL.slice(0, -9);
}

function search(chara) {
    for (let j=1; j <= cArray.length; j++) {
        if (chara.indexOf(cArray[j][1]) !== -1) {
            return cArray[j][29];
        }
    }
    return "#";
}


getCsvData('character-index - manager.csv', 'website - scenario.csv');
