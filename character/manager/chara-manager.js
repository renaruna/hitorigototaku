const nameElement = document.getElementById('name');
const hiranameElement = document.getElementById('hiraname');
const ageElement = document.getElementById('age');
const sexElement = document.getElementById('sex');
const jobElement = document.getElementById('job');
const memberElement = document.getElementById('member');
const colorElement = document.getElementById('color');
const makerElement = document.getElementById('maker');
const hpElement = document.getElementById('hp');
const mpElement = document.getElementById('mp');
const sanElement = document.getElementById('san');
const dbElement = document.getElementById('db');
const strElement = document.getElementById('str');
const conElement = document.getElementById('con');
const powElement = document.getElementById('pow');
const dexElement = document.getElementById('dex');
const appElement = document.getElementById('app');
const sizElement = document.getElementById('siz');
const intElement = document.getElementById('int');
const eduElement = document.getElementById('edu');
const skillElement = document.getElementById('skill');
const settingElement = document.getElementById('setting');
const scenarioElement = document.getElementById('scenario');
const driverElement = document.getElementById('driver');
const managerElement = document.getElementById('manager');
const bossElement = document.getElementById('boss');
const spiritualElement = document.getElementById('spiritual');
const warcrimElement = document.getElementById('warcrim');
const creatorElement = document.getElementById('creator');
const heightElement = document.getElementById('height');
const cArray = [];
const sArray = [];
const dataObject = {};

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
    for (let i = 0; i < dataStringC.length; i++) {
        if(i == charaID) {
            dataObject.name = cArray[i][2];
            dataObject.hiraname = cArray[i][3];
            dataObject.age = cArray[i][4];
            dataObject.sex = cArray[i][5];
            dataObject.job = cArray[i][6];
	    dataObject.height = cArray[i][30];
            dataObject.color = cArray[i][7];
        
            dataObject.hp = cArray[i][8];
            dataObject.mp = cArray[i][9];
            dataObject.san = cArray[i][10];
            dataObject.db = cArray[i][11];
            dataObject.str = cArray[i][12];
            dataObject.con = cArray[i][13];
            dataObject.pow = cArray[i][14];
            dataObject.dex = cArray[i][15];
            dataObject.app = cArray[i][16];
            dataObject.siz = cArray[i][17];
            dataObject.int = cArray[i][18];
            dataObject.edu = cArray[i][19];

            dataObject.skill = cArray[i][20];
            dataObject.setting = cArray[i][21];
            dataObject.scenario = cArray[i][22];
        
            dataObject.driverCom = cArray[i][23];
            dataObject.managerCom = cArray[i][24];
            dataObject.bossCom = cArray[i][25];
            dataObject.spiritualCom = cArray[i][26];
            dataObject.warcrimCom = cArray[i][27];
            dataObject.creatorCom = cArray[i][28];
            
            dataObject.maker = cArray[i][29];
            break;
        }
    }
    
    display();

}

function display() {
    nameElement.textContent = dataObject.name;
    makerElement.textContent = dataObject.maker;
    hiranameElement.textContent = dataObject.hiraname;
    ageElement.textContent = dataObject.age;
    sexElement.textContent = dataObject.sex;
    jobElement.textContent = dataObject.job;
    memberElement.innerHTML = '<a href="manager.html">管理人</a>';
    heightElement.textContent = dataObject.height;
    iconElement.setAttribute('src', dataObject.icon);
    
    let colorBack;//背景色にキャラの色
    let colorMoji;//背景色にあった文字の色（#888か白）
    let colorNum = dataObject.color.indexOf("#");
    if (colorNum !== -1) {
      colorBack = dataObject.color.substr(colorNum,7);
    } else {
      colorBack = "#fffff0";
    }
    colorMoji = blackOrWhite(colorBack);
    colorElement.textContent = dataObject.color;
    colorElement.style.backgroundColor = colorBack;
    colorElement.style.color = colorMoji;
    makerElement.textContent = dataObject.maker;
    
    hpElement.textContent = dataObject.hp;
    mpElement.textContent = dataObject.mp;
    sanElement.textContent = dataObject.san;
    dbElement.textContent = dataObject.db;
    strElement.textContent = dataObject.str;
    conElement.textContent = dataObject.con;
    powElement.textContent = dataObject.pow;
    dexElement.textContent = dataObject.dex;
    appElement.textContent = dataObject.app;
    sizElement.textContent = dataObject.siz;
    intElement.textContent = dataObject.int;
    eduElement.textContent = dataObject.edu;
    
    skillElement.innerHTML = change(dataObject.skill,"$","<br>");
    settingElement.innerHTML = change(dataObject.setting,"$","<br>");

    let text = [];
    var array = {}
    var html = "";
    //参加したシナリオの名前の配列
    array = dataObject.scenario.split('$');
    for (i = 0; i < array.length; i++) {
        text[i] = search(array[i]);
    }
    for (i = 0; i < array.length; i++) {
        html += '<a href="../../'+text[i]+'">'+array[i]+'</a><br>';
    }
    scenarioElement.innerHTML = html;
    
    driverElement.innerHTML = change(dataObject.driverCom,"$","<br>");
    managerElement.innerHTML = change(dataObject.managerCom,"$","<br>");
    bossElement.innerHTML = change(dataObject.bossCom,"$","<br>");
    spiritualElement.innerHTML = change(dataObject.spiritualCom,"$","<br>");
    warcrimElement.innerHTML = change(dataObject.warcrimCom,"$","<br>");
    creatorElement.innerHTML = change(dataObject.creatorCom,"$","<br>");
}

function search(scenario) {
    for (let i=0; i < sArray.length; i++) {
        if (scenario.indexOf(sArray[i][1]) !== -1) {
            return sArray[i][2];
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

function blackOrWhite(hexcolor) {
	var r = parseInt(hexcolor.substr(1, 2), 16) ;
	var g = parseInt(hexcolor.substr(3, 2), 16) ;
	var b = parseInt(hexcolor.substr(5, 2), 16) ;

	return ( ( ( (r * 299) + (g * 587) + (b * 114) ) / 1000 ) < 128 ) ? "white" : "#888" ;
}
   
getCsvData('character-index - manager.csv', '../../website - scenario-file.csv');
