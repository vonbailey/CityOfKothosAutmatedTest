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

// Test Case Functions
exports.hpButton=function()
{
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('http://ramses/thePages/theChapterHeadings.shtml');
    //var element = driver.findElement(webdriver.By.name('http://'))
    //ERRROR No "name" tag for the home page button
    driver.quit();
};

exports.cHeadings=function()
{
    var driver = new webdriver.Builder().forBrowser('chrome').build();    
    driver.get('http://ramses/index.shtml');
    var element=driver.findElement(webdriver.By.name('Chapter Headings'));
    element.click();
    driver.quit();
    
};


//*****************************************************************



exports.menuPick=function(menuPick,menu0,menu1,menu2,menu3,menu4,menu5,menu6,menu7,
        menu8,menu9,menu10,menu11,menu12,menu13,menu14,menu15){
    var now=new Date();
    var dateStamp=dateFormat(now,"isoDateTime");
    switch(menuPick)
    {   case 4:
            console.log(dateStamp+": Selected all of the Home Page Menu****");
            if(menu0==="true"){exports.hpButton();
                                console.log("Home Page Test case");}
            if(menu1==="true"){exports.cHeadings();
                                console.log("Chapter Headings Test case");}
            if(menu2==="true"){console.log("Prologe Test case");}
            if(menu3==="true"){console.log("Glossary Test case");}
            if(menu4==="true"){console.log("Contact Me Test case");}
            if(menu5==="true"){console.log("Buy the Book Test case");}            
            break;
        case 5:
            console.log(dateStamp+": Selected all of the Biography Menu****");
            if(menu0==="true"){console.log("Creston Test case");}
            if(menu1==="true"){console.log("Bella To Headings Test case");}
            if(menu2==="true"){console.log("Tuppa To Test case");}
            if(menu3==="true"){console.log("Batuma Kan Test case");}
            if(menu4==="true"){console.log("Wen Ta Me Test case");}
            if(menu5==="true"){console.log("Sal Li Test case");}
            if(menu6==="true"){console.log("Cleophi Tan Test case");}
            break;
        case 6:
            console.log(dateStamp+": Selected all of Gallery Menu****");
            if(menu0==="true"){console.log("Black & White Gallary Test case");}
            if(menu1==="true"){console.log("Color Gallary Test case");}
            break;
        case 2:   
        case 3:
            if(menuPick===2){console.log(dateStamp+": Selected multiple selected tests****");}
            if(menuPick===3){console.log(dateStamp+": Selected Everything****");};
            if(menu0==="true"){exports.hpButton();
                                console.log("Home Page Test case");}
            if(menu1==="true"){exports.cHeadings();
                                console.log("Chapter Headings Test case");}
            if(menu2==="true"){console.log("Prologe Test case");}
            if(menu3==="true"){console.log("Glossary Test case");}
            if(menu4==="true"){console.log("Contact Me Test case");}
            if(menu5==="true"){console.log("Buy the Book Test case");}
            if(menu6==="true"){console.log("Creston Test case");}
            if(menu7==="true"){console.log("Bella To Headings Test case");}
            if(menu8==="true"){console.log("Tuppa To Test case");}
            if(menu9==="true"){console.log("Batuma Kan Test case");}
            if(menu10==="true"){console.log("Wen Ta Me Test case");}
            if(menu11==="true"){console.log("Sal Li Test case");}
            if(menu12==="true"){console.log("Batuma Kan Test case");}
            if(menu13==="true"){console.log("Wen Ta Test case");}
            if(menu14==="true"){console.log("Sal Li Test case");}
            if(menu15==="true"){console.log("Black & White Gallary Test case");}
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