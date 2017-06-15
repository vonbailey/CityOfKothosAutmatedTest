/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Creating variable for driver
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());


var http = require('http');
var url = require('url');
var fs = require('fs');

exports.openbrowser=function()
    {var driver = new webdriver.Builder().forBrowser('chrome').build();
     var homepage="http://ramses/index.shtml";
     driver.get(homepage);};

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');

exports.menuPick=function(menuPick,menu1,menu2,menu3){
    exports.openbrowser();
    console.log("****menu1:"+menu1+" menu2:"+menu2+" menu3:"+menu3);
    switch(menuPick)
    {   case 1:
            console.log("****Selected all of a specific group****");
            break;
        case 2:
            console.log("****Selected multiple selected tests****");
            break;
        case 3:
            console.log("****Selected Everything****");
            break;
    }
};

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  var qdata=q.query;
  var s=q.search;
  var mSelect=parseInt(qdata.menu100);
  
    console.log("Menu Option1: "+qdata.menu1+", Menu Option2:"+qdata.menu2+
            ", Menu Option3:"+qdata.menu3+", Menu Option Choice:"+qdata.menu100);
    console.log("Filename: "+filename+" Search Criteria:"+s);
    
    if(mSelect>0 && mSelect<4)
        {
        exports.menuPick(mSelect,qdata.menu1,qdata.menu2,qdata.menu3);
        return res.end();
        }
    else{
        fs.readFile(filename, function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        }  
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();});
    }
  }).listen(8080);