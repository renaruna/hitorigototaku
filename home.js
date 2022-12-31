const driverElement = document.getElementById('i2d-list');
const managerElement = document.getElementById('i2m-list');
const bossElement = document.getElementById('i2b-list');
const spiritualElement = document.getElementById('i2s-list');
const warcrimElement = document.getElementById('i2w-list');
const creatorElement = document.getElementById('i2c-list');

const aElement = document.getElementById('i1-a-list');
const kElement = document.getElementById('i1-k-list');
const sElement = document.getElementById('i1-s-list');
const tElement = document.getElementById('i1-t-list');
const nElement = document.getElementById('i1-n-list');
const hElement = document.getElementById('i1-h-list');
const mElement = document.getElementById('i1-m-list');
const yElement = document.getElementById('i1-y-list');
const rElement = document.getElementById('i1-r-list');
const wElement = document.getElementById('i1-w-list');

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
    // 頭文字でシナリオ一覧
    let scenario_a = "<ul>";
    let scenario_k = "<ul>";
    let scenario_s = "<ul>";
    let scenario_t = "<ul>";
    let scenario_n = "<ul>";
    let scenario_h = "<ul>";
    let scenario_m = "<ul>";
    let scenario_y = "<ul>";
    let scenario_r = "<ul>";
    let scenario_w = "<ul>";
    for (let i = 1; i < sArray.length; i++) {
        let name = sArray[i][1];
        let link = sArray[i][2];
        let kasira = sArray[i][3];
        
        if (kasira.indexOf("あ") == 0 || kasira.indexOf("い") == 0 || kasira.indexOf("う") == 0 || kasira.indexOf("え") == 0 || kasira.indexOf("お") == 0) {
            scenario_a += '<li><a href="'+link+'">'+change(name,"#",",")+'</a></li>';
        } else if (kasira.indexOf("か") == 0 || kasira.indexOf("き") == 0 || kasira.indexOf("く") == 0 || kasira.indexOf("け") == 0 || kasira.indexOf("こ") == 0) {
            scenario_k += '<li><a href="'+link+'">'+change(name,"#",",")+'</a></li>';
        } else if (kasira.indexOf("さ") == 0 || kasira.indexOf("し") == 0 || kasira.indexOf("す") == 0 || kasira.indexOf("せ") == 0 || kasira.indexOf("そ") == 0) {
            scenario_s += '<li><a href="'+link+'">'+change(name,"#",",")+'</a></li>';
        } else if (kasira.indexOf("た") == 0 || kasira.indexOf("ち") == 0 || kasira.indexOf("つ") == 0 || kasira.indexOf("て") == 0 || kasira.indexOf("と") == 0) {
            scenario_t += '<li><a href="'+link+'">'+change(name,"#",",")+'</a></li>';
        } else if (kasira.indexOf("な") == 0 || kasira.indexOf("に") == 0 || kasira.indexOf("ぬ") == 0 || kasira.indexOf("ね") == 0 || kasira.indexOf("の") == 0) {
            scenario_n += '<li><a href="'+link+'">'+change(name,"#",",")+'</a></li>';
        } else if (kasira.indexOf("は") == 0 || kasira.indexOf("ひ") == 0 || kasira.indexOf("ふ") == 0 || kasira.indexOf("へ") == 0 || kasira.indexOf("ほ") == 0) {
            scenario_h += '<li><a href="'+link+'">'+change(name,"#",",")+'</a></li>';
        } else if (kasira.indexOf("ま") == 0 || kasira.indexOf("み") == 0 || kasira.indexOf("む") == 0 || kasira.indexOf("め") == 0 || kasira.indexOf("も") == 0) {
            scenario_m += '<li><a href="'+link+'">'+change(name,"#",",")+'</a></li>';
        } else if (kasira.indexOf("や") == 0 || kasira.indexOf("ゆ") == 0 || kasira.indexOf("よ") == 0) {
            scenario_y += '<li><a href="'+link+'">'+change(name,"#",",")+'</a></li>';
        } else if (kasira.indexOf("ら") == 0 || kasira.indexOf("り") == 0 || kasira.indexOf("る") == 0 || kasira.indexOf("れ") == 0 || kasira.indexOf("ろ") == 0) {
            scenario_r += '<li><a href="'+link+'">'+change(name,"#",",")+'</a></li>';
        } else if (kasira.indexOf("わ") == 0 || kasira.indexOf("を") == 0 || kasira.indexOf("ん") == 0) {
            scenario_w += '<li><a href="'+link+'">'+change(name,"#",",")+'</a></li>';
        }
    }
    aElement.innerHTML = scenario_a + "</ul>";
    kElement.innerHTML = scenario_k + "</ul>";
    sElement.innerHTML = scenario_s + "</ul>";
    tElement.innerHTML = scenario_t + "</ul>";
    nElement.innerHTML = scenario_n + "</ul>";
    hElement.innerHTML = scenario_h + "</ul>";
    mElement.innerHTML = scenario_m + "</ul>";
    yElement.innerHTML = scenario_y + "</ul>";
    rElement.innerHTML = scenario_r + "</ul>";
    wElement.innerHTML = scenario_w + "</ul>";   
    
    
       
    
    // キャラクター一覧

    let drHtml = "";
    for (let i = 1; i < drArray.length; i++) {
        let link = drArray[i][1];
        let name = drArray[i][2];
        let icon = drArray[i][3];
        if (icon.indexOf("no") == 0) {
            drHtml +='<div class="chara"><a href="'+link+'"><img src="transparent.png"><p>'+name+'</p></a></div>';
        } else {
            drHtml +='<div class="chara"><a href="'+link+'"><img src="'+icon+'"><p>'+name+'</p></a></div>';
        }        
    }
    driverElement.innerHTML = drHtml;
    
    let mnHtml = "";
    for (let i = 1; i < mnArray.length; i++) {
        let link = mnArray[i][1];
        let name = mnArray[i][2];
        let icon = mnArray[i][3];
        if (icon.indexOf("no") == 0) {
            mnHtml +='<div class="chara"><a href="'+link+'"><img src="transparent.png"><p>'+name+'</p></a></div>';
        } else {
            mnHtml +='<div class="chara"><a href="'+link+'"><img src="'+icon+'"><p>'+name+'</p></a></div>';
        }
    }
    managerElement.innerHTML = mnHtml;
    
    let bsHtml = "";
    for (let i = 1; i < bsArray.length; i++) {
        let link = bsArray[i][1];
        let name = bsArray[i][2];
        let icon = bsArray[i][3];
        if (icon.indexOf("no") == 0) {
            bsHtml +='<div class="chara"><a href="'+link+'"><img src="transparent.png"><p>'+name+'</p></a></div>';
        } else {
            bsHtml +='<div class="chara"><a href="'+link+'"><img src="'+icon+'"><p>'+name+'</p></a></div>';
        }        
    }
    bossElement.innerHTML = bsHtml;
    
    let spHtml = "";
    for (let i = 1; i < spArray.length; i++) {
        let link = spArray[i][1];
        let name = spArray[i][2];
        let icon = spArray[i][3];
        if (icon.indexOf("no") == 0) {
            spHtml +='<div class="chara"><a href="'+link+'"><img src="transparent.png"><p>'+name+'</p></a></div>';
        } else {
            spHtml +='<div class="chara"><a href="'+link+'"><img src="'+icon+'"><p>'+name+'</p></a></div>';
        }
    }
    spiritualElement.innerHTML = spHtml;
    
    let wcHtml = "";
    for (let i = 1; i < wcArray.length; i++) {
        let link = wcArray[i][1];
        let name = wcArray[i][2];
        let icon = wcArray[i][3];
        if (icon.indexOf("no") == 0) {
            wcHtml +='<div class="chara"><a href="'+link+'"><img src="transparent.png"><p>'+name+'</p></a></div>';
        } else {
            wcHtml +='<div class="chara"><a href="'+link+'"><img src="'+icon+'"><p>'+name+'</p></a></div>';
        }
    }
    warcrimElement.innerHTML = wcHtml;
    
    let crHtml = "";
    for (let i = 1; i < crArray.length; i++) {
        let link = crArray[i][1];
        let name = crArray[i][2];
        let icon = crArray[i][3];
        if (icon.indexOf("no") == 0) {
            crHtml +='<div class="chara"><a href="'+link+'"><img src="transparent.png"><p>'+name+'</p></a></div>';
        } else {
            crHtml +='<div class="chara"><a href="'+link+'"><img src="'+icon+'"><p>'+name+'</p></a></div>';
        }
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
