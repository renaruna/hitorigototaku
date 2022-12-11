const driverElement = document.getElementById('i2d-list');
const managerElement = document.getElementById('i2m-list');
const bossElement = document.getElementById('i2b-list');
const spiritualElement = document.getElementById('i2s-list');
const warcrimElement = document.getElementById('i2w-list');
const creatorElement = document.getElementById('i2c-list');
const scenarioElement = document.getElementById('scenario-list');
const drArray = [];
const mnArray = [];
const bsArray = [];
const spArray = [];
const wcArray = [];
const crArray = [];
const sArray = [];

//CSVファイルを読み込む
function getCsvData(dataPathS, dataPathDr, dataPathMn, dataPathBs, dataPathSp, dataPathWc, dataPathCr) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvDr(response, dataPathDr, dataPathMn, dataPathBs, dataPathSp, dataPathWc, dataPathCr);
    });
    request.open('GET', dataPathS, true);
    request.send();// HTTPリクエストの発行
}
   
function getCsvDr(dataS, dataPathDr, dataPathMn, dataPathBs, dataPathSp, dataPathWc, dataPathCr) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvMn(dataS, response, dataPathMn, dataPathBs, dataPathSp, dataPathWc, dataPathCr);
    });
    request.open('GET', dataPathDr, true);
    request.send();// HTTPリクエストの発行
}

function getCsvMn(dataS, dataDr, dataPathMn, dataPathBs, dataPathSp, dataPathWc, dataPathCr) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvBs(dataS, dataDr, response, dataPathBs, dataPathSp, dataPathWc, dataPathCr);
    });
    request.open('GET', dataPathMn, true);
    request.send();// HTTPリクエストの発行
}

function getCsvBs(dataS, dataDr, dataMn, dataPathBs, dataPathSp, dataPathWc, dataPathCr) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvSp(dataS, dataDr, dataMn, response, dataPathSp, dataPathWc, dataPathCr);
    });
    request.open('GET', dataPathBs, true);
    request.send();// HTTPリクエストの発行
}

function getCsvSp(dataS, dataDr, dataMn, dataBs, dataPathSp, dataPathWc, dataPathCr) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvWc(dataS, dataDr, dataMn, dataBs, response, dataPathWc, dataPathCr);
    });
    request.open('GET', dataPathSp, true);
    request.send();// HTTPリクエストの発行
}

function getCsvWc(dataS, dataDr, dataMn, dataBs, dataSp, dataPathWc, dataPathCr) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     getCsvCr(dataS, dataDr, dataMn, dataBs, dataSp, response, dataPathCr);
    });
    request.open('GET', dataPathWc, true);
    request.send();// HTTPリクエストの発行
}

function getCsvCr(dataS, dataDr, dataMn, dataBs, dataSp, dataWc, dataPathCr) {
    const request = new XMLHttpRequest();// HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    
    // レスポンスが返ってきたらconvertArray()を呼ぶ	
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     convertArray(dataS, dataDr, dataMn, dataBs, dataSp, dataWc, response);
    });
    request.open('GET', dataPathCr, true);
    request.send();// HTTPリクエストの発行
}

function convertArray(dataS, dataDr, dataMn, dataBs, dataSp, dataWc, dataCr) {
    const dataStringS = dataS.split('\n');// 改行を区切り文字として行を要素とした配列を生成
    const dataStringDr = dataDr.split('\n');
    const dataStringMn = dataMn.split('\n');
    const dataStringBs = dataBs.split('\n');
    const dataStringSp = dataSp.split('\n');
    const dataStringWc = dataWc.split('\n');
    const dataStringCr = dataCr.split('\n');
    
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (let i = 0; i < dataStringS.length; i++) {
        sArray[i] = dataStringS[i].split(',');
    }
    for (let i = 0; i < dataStringDr.length; i++) {
        drArray[i] = dataStringDr[i].split(',');
    }
    for (let i = 0; i < dataStringMn.length; i++) {
        mnArray[i] = dataStringMn[i].split(',');
    }
    for (let i = 0; i < dataStringBs.length; i++) {
        bsArray[i] = dataStringBs[i].split(',');
    }
    for (let i = 0; i < dataStringSp.length; i++) {
        spArray[i] = dataStringSp[i].split(',');
    }
    for (let i = 0; i < dataStringWc.length; i++) {
        wcArray[i] = dataStringWc[i].split(',');
    }
    for (let i = 0; i < dataStringCr.length; i++) {
        crArray[i] = dataStringCr[i].split(',');
    }
    
    display();
}

function display() {
    // シナリオ一覧
    
    let scenario = "<ul>";
    for (let i = 1; i < sArray.length; i++) {
        let link = sArray[i][2];
        let name = sArray[i][1];
        scenario +='<li><a href="'+link+'">'+change(name,"#",",")+'</a></li>';
    }
    scenarioElement.innerHTML = scenario + "</ul>";
    
    
    // キャラクター一覧

    let drHtml = "";
    for (let i = 1; i < drArray.length; i++) {
        let link = drArray[i][1];
        let name = drArray[i][2];
        drHtml +='<div class="chara"><a href="'+link+'"><img src="character/driver/'+name+'.png"><p>'+name+'</p></a></div>';
    }
    driverElement.innerHTML = drHtml;
    
    let mnHtml = "";
    for (let i = 1; i < mnArray.length; i++) {
        let link = mnArray[i][1];
        let name = mnArray[i][2];
        mnHtml +='<div class="chara"><a href="'+link+'"><img src="character/manager/'+name+'.png"><p>'+name+'</p></a></div>';
    }
    managerElement.innerHTML = mnHtml;
    
    let bsHtml = "";
    for (let i = 1; i < bsArray.length; i++) {
        let link = bsArray[i][1];
        let name = bsArray[i][2];
        bsHtml +='<div class="chara"><a href="'+link+'"><img src="character/boss/'+name+'.png"><p>'+name+'</p></a></div>';
    }
    bossElement.innerHTML = bsHtml;
    
    let spHtml = "";
    for (let i = 1; i < spArray.length; i++) {
        let link = spArray[i][1];
        let name = spArray[i][2];
        spHtml +='<div class="chara"><a href="'+link+'"><img src="character/spiritual/'+name+'.png"><p>'+name+'</p></a></div>';
    }
    spiritualElement.innerHTML = spHtml;
    
    let wcHtml = "";
    for (let i = 1; i < wcArray.length; i++) {
        let link = wcArray[i][1];
        let name = wcArray[i][2];
        wcHtml +='<div class="chara"><a href="'+link+'"><img src="character/warcrim/'+name+'.png"><p>'+name+'</p></a></div>';
    }
    warcrimElement.innerHTML = wcHtml;
    
    let crHtml = "";
    for (let i = 1; i < crArray.length; i++) {
        let link = crArray[i][1];
        let name = crArray[i][2];
        crHtml +='<div class="chara"><a href="'+link+'"><img src="character/creator/'+name+'.png"><p>'+name+'</p></a></div>';
    }
    creatorElement.innerHTML = crHtml;

}

function search(array, chara) {
    for (let i=0; i < array.length; i++) {
        if (chara.indexOf(array[i][2]) !== -1) {
            return array[i][1];
        }
    }
    return "#";
}

function change(text, a, b) {
  let i = 0;
  let length = text.length;
  for (i=0; i < length; i++) {
    text = text.replace(a,b); 
  }
  return text;
}
   
getCsvData('website - scenario-file.csv', 'website - driver.csv', 'website - manager.csv', 'website - boss.csv', 'website - spiritual.csv', 'website - warcrim.csv', 'website - creator.csv');
