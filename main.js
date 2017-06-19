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
var dateFormat=require('dateformat');
var sleep = require('system-sleep');

// Test Case Functions
exports.validateButton=function(sP,sCP,lTC,eCP,tN)
{
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    // Verify startup point of test.
    console.log(exports.getDateStamp()+"***"+sP+", "+sCP+", "+lTC+", "+eCP+", "+tN);
    driver.get(sP);
    var ckPoint=exports.validateCheckPoint(sCP,driver);
    if(ckPoint===true)
        {console.log(exports.getDateStamp()+"***Verified Starting Point for: "+tN+" test");}
    else
        {console.log(exports.getDateStamp()+"***Incorrect Starting Pointfor: "+tN+" test. Canceling test.");
        driver.quit();
        return;}
    // Verifying the link and destination
    var element = driver.findElement(webdriver.By.name(lTC));
    element.click();
    sleep(5000);
    ckPoint=exports.validateCheckPoint(eCP,driver);
    if(ckPoint===true)
        {console.log(exports.getDateStamp()+"***Completed successfully the "+tN+" test!");}
    else
        {console.log(exports.getDateStamp()+"***Completed and failed the "+tN+" test!");}
    driver.quit();
};
//*****************************************************************
// Utility functions
exports.validateCheckPoint=function(checkPoint,driver)
{
    x=driver.findElement(webdriver.By.id(checkPoint));
    if(x!=="undefined")
        {return true;}
    else
        {return false;}
};

exports.getDateStamp=function()
{   
    var now=new Date();
    var dateStamp=dateFormat(now,"isoDateTime");
    return dateStamp;
};

exports.menuPick=function(menuPick,menu0,menu1,menu2,menu3,menu4,menu5,menu6,menu7,
        menu8,menu9,menu10,menu11,menu12,menu13,menu14){
    switch(menuPick)
    {   case 4:
            console.log(exports.getDateStamp()+": Selected all of the Home Page Menu****");
            if(menu0==="true"){console.log(exports.getDateStamp()+"***Home Page Test case");
                              exports.validateButton('http://ramses/thePages/theChapterHeadings.shtml'
                              ,'cHckPoint','homepageicon','hPckPoint',"Home Page");}
            if(menu1==="true"){console.log(exports.getDateStamp()+"***Chapter Headings Test case");
                               exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Chapter Headings','cHckPoint','Chapter Headings');}
            if(menu2==="true"){console.log(exports.getDateStamp()+"***Prologe Test case");
                               exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Prologue','pLckPoint','Prologue');}
            if(menu3==="true"){console.log(exports.getDateStamp()+"***Glossary Test case");
                               exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Glossary','g1ckPoint','Glossary');}
            if(menu4==="true"){console.log(exports.getDateStamp()+"***Contact Me Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Contact Me!','cMckPoint','Contact Me');}
            if(menu5==="true"){console.log(exports.getDateStamp()+"***Buy the Book Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','BuyBook','bBckPoint','Buy the Book');}            
            break;
        case 5:
            console.log(exports.getDateStamp()+": Selected all of the Biography Menu****");
            if(menu0==="true"){console.log(exports.getDateStamp()+"***Creston Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Creston','cRckPoint','Creston');}
            if(menu1==="true"){console.log(exports.getDateStamp()+"***Bella To Headings Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Bella Tu','bTckPoint','Bella Tu');}
            if(menu2==="true"){console.log(exports.getDateStamp()+"***Tuppa To Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Tuppa Tu','tTckPoint','Tuppa Tu');}
            if(menu3==="true"){console.log(exports.getDateStamp()+"***Batuma Kan Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Batuma Kan','bKckPoint','Batuma Kan');}
            if(menu4==="true"){console.log(exports.getDateStamp()+"***Wen Ta Me Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Wen Ta','wTckPoint','Wen Ta');}
            if(menu5==="true"){console.log(exports.getDateStamp()+"***Sal Li Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Sal Li','sLckPoint','Sal Li');}
            if(menu6==="true"){console.log(exports.getDateStamp()+"***Cleophi Tan Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Cleophi Tan','cTckPoint','Cleophi Tan');}
            break;
        case 6:
            console.log(exports.getDateStamp()+": Selected all of Gallery Menu****");
            if(menu0==="true"){console.log(exports.getDateStamp()+"***Black & White Gallery Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','BWG','bWckPoint','B&W Gallery');}
            if(menu1==="true"){console.log(exports.getDateStamp()+"***Color Gallery Test case");
                               exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','ColorG','cLckPoint','Color Gallery');}
            break;
        case 2:   
        case 3:
            if(menuPick===2){console.log(exports.getDateStamp()+": Selected multiple selected tests****");}
            if(menuPick===3){console.log(exports.getDateStamp()+": Selected Everything****");};
            if(menu0==="true"){console.log(exports.getDateStamp()+"***Home Page Test case");
                              exports.validateButton('http://ramses/thePages/theChapterHeadings.shtml'
                              ,'cHckPoint','homepageicon','hPckPoint',"Home Page");}
            if(menu1==="true"){console.log(exports.getDateStamp()+"***Chapter Headings Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Chapter Headings','cHckPoint','Chapter Headings');}
            if(menu2==="true"){console.log(exports.getDateStamp()+"***Prologe Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Prologue','pLckPoint','Prologue');}
            if(menu3==="true"){console.log(exports.getDateStamp()+"***Glossary Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Glossary','g1ckPoint','Glossary');}
            if(menu4==="true"){console.log(exports.getDateStamp()+"***Contact Me Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Contact Me!','cMckPoint','Contact Me');}
            if(menu5==="true"){console.log(exports.getDateStamp()+"***Buy the Book Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','BuyBook','bBckPoint','Buy the Book');}
            if(menu6==="true"){console.log(exports.getDateStamp()+"***Creston Test case");
                               exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Creston','cRckPoint','Creston');}
            if(menu7==="true"){console.log(exports.getDateStamp()+"***Bella To Headings Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Bella Tu','bTckPoint','Bella To');}
            if(menu8==="true"){console.log(exports.getDateStamp()+"***Tuppa To Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Tuppa Tu','tTckPoint','Tuppa Tu');}
            if(menu9==="true"){console.log(exports.getDateStamp()+"***Batuma Kan Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Batuma Kan','bKckPoint','Batuma Kan');}
            if(menu10==="true"){console.log(exports.getDateStamp()+"***Wen Ta Me Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Wen Ta','wTckPoint','Wen Ta');}
            if(menu11==="true"){console.log(exports.getDateStamp()+"***Sal Li Test case");
                               exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Sal Li','sLckPoint','Sal Li');}
            if(menu12==="true"){console.log(exports.getDateStamp()+"***Cleophi Tan Test case");
                               exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','Cleophi Tan','cTckPoint','Cleophi Tan');}
            if(menu13==="true"){console.log(exports.getDateStamp()+"***Color Gallery Test case");
                               exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','ColorG','cLckPoint','Color Gallery');}
            if(menu14==="true"){console.log(exports.getDateStamp()+"***Black & White Gallery Test case");
                              exports.validateButton('http://ramses/index.shtml'
                              ,'hPckPoint','BWG','bWckPoint','B&W Gallery');}
            break;
    }
};

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  var qdata=q.query;  
  var mSelect=parseInt(qdata.menu100);
    // If there is a menu selection made do the following
    if((mSelect>0) && (mSelect<7))
        {
        console.log(exports.getDateStamp()+": Menu Selection: "+mSelect);
        exports.menuPick(mSelect,qdata.menu0,qdata.menu1,qdata.menu2,qdata.menu3
                ,qdata.menu4,qdata.menu5,qdata.menu6
                ,qdata.menu7,qdata.menu8,qdata.menu9
                ,qdata.menu10,qdata.menu11,qdata.menu12
                ,qdata.menu13,qdata.menu14,qdata.menu15);
        return res.end();
        }
    else{ // If no menu selection made, simply display the screen
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