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
    for (let i = 1; i < sArray.length; i++) {
        let kpName = sArray[i][5];
        if (kpName && sArray[i][0]) { // kp欄になにかしら入ってる　かつ　IDがある。
            if (kpName.indexOf("管理人") !== -1) {
                kp += '<a href="../scenario/'+sArray[i][12]+'">'+change(sArray[i][1], "#", ",")+'</a><br>';
            }
        }
    }
    kpElement.innerHTML = kp;

    let htmlPL = "";
    for (let i = 1; i < sArray.length; i++) {
        if (sArray[i][7]) {
            let sPL = "";
            let cPL = "";
            let j = search(sArray[i][7]);
            let icon = cArray[j][3];
                        
            sPL = '<a class="sPL" href="../scenario/'+sArray[i][12]+'"><h4>'+change(sArray[i][1], "#", ",")+'</h4></a>';
            if (icon.indexOf("no") == 0) {
                cPL = '<a href="../'+cArray[j][1]+'"><div class="cPL no-image"><p>'+sArray[i][7]+'</p></div></a>';
            } else {
                cPL = '<a href="../'+cArray[j][1]+'"><div class="cPL"><img src="'+icon+'"><p>'+sArray[i][7]+'</p></div></a>';
            }
            htmlPL += '<div class="htmlPL">'+sPL+cPL+'</div>';
        }
    }

    
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
    for (let j=0; j < cArray.length; j++) {
        if (chara.indexOf(cArray[j][2]) !== -1) {
            return j;
        }
    }
    return 0;
}

getCsvData('../website - manager.csv', '../scenario/website - scenario.csv');
