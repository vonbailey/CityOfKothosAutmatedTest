/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//functions
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
    
}

function createURL1(ar,aName)
{
    var url;
    switch(aName.pop())
    {
        case "all_1_Check":
            url="http://localhost:8080/index.html?menu100=4";
            break;
        case "all_2_Check":
            url="http://localhost:8080/index.html?menu100=5";
            break;
        case "all_3_Check":
            url="http://localhost:8080/index.html?menu100=6";
            break;
    }
    
    for(i=0;i<ar;i++)
    {
        n=i.toString();
        url=url+"&menu"+n+"=true";
        console.log(url);
    }
    return url;
}

function createURL2(ar,aName)
{
    switch(aName.pop())
    {
        case "all_1_Check":
            url="http://localhost:8080/index.html?menu100=4";
            break;
        case "all_2_Check":
            url="http://localhost:8080/index.html?menu100=5";
            break;
        case "all_3_Check":
            url="http://localhost:8080/index.html?menu100=6";
            break;
    }
    for(i=0;i<ar;i++)
    {
        n=i.toString();
        if(document.getElementById(aName[i]).checked===true)
        {
            url=url+"&menu"+n+"=true";
        }
        else
        {
            url=url+"&menu"+n+"=false";
        }
        console.log(url);
    }
    return url;
}

function runTestScripts(x)
{
    var gName;
    var iName;
    switch(x)
        {
            case 0: //  Main Menu Selection
                gName=m_one;
                iName=h_array;
                break;
            case 1: // Biography Selection
                gName=m_two;
                iName=b_array;
                ar_Length=7;
                break;                            
            case 2: // Gallery Selection
                gName=m_three;
                iName=g_array;
                break; 
            case 3: // Everything selected
                gName=m_one.concat(m_two);
                gName=gName.concat(m_three);
                iName=h_array.concat(b_array);
                iName=iName.concat(g_array);
                break;
        }

    var lastItem=iName.pop();// Getting last item in Array
    iName.push(lastItem); // Adding item back to array
    ar_Length=iName.length;
    // If the user selection is all tests in section.
    if(document.getElementById(lastItem).checked===true)
        {
            // Discover which menu is selected.
            switch(lastItem){
                case "all_1_Check":
                    console.log("Selected the Home Page Menu");
                    theURL=createURL1(ar_Length-1,iName);
                    break;
                case "all_2_Check":
                    console.log("Selected the Biography Menu");
                    theURL=createURL1(ar_Length-1,iName);
                    break;
                case "all_3_Check":
                    console.log("Selected the Gallery Menu");
                    theURL=createURL1(ar_Length-1,iName);
                    break;
            }
            alert("This is testing everything in a specific group.");
            console.log("SENDING: "+theURL);
            httpGet(theURL,"_self");
            window.open("http://localhost:8080/index.html","_self");
            return;
        }
    // If the user selected at least 1 each selected will run  
    if(x!==3 & document.getElementById(lastItem).checked===false) 
        {   
            // Discover which menu is selected.
            switch(lastItem){
                case "all_1_Check":
                    console.log("Selected the Home Page Menu");
                    theURL=createURL2(ar_Length-1,iName);
                    break;
                case "all_2_Check":
                    console.log("Selected the biography Menu");
                    theURL=createURL2(ar_Length-1,iName);
                    break;
                case "all_3_Check":
                    console.log("Selected the Gallery Menu");
                    theURL=createURL2(ar_Length-1,iName);
                    break;
            }
            var t=theURL.includes("true");
            if(t===false)
            {// This verifies that a test was selected.
                alert("No tests were selected.");
                return;
            }
            alert("This is testing the selected in a specific group.");
            console.log("SENDING: "+theURL);
            httpGet(theURL,"_self");
            window.open("http://localhost:8080/index.html","_self");
            return;
        }
    // If the user selects all, all will run
    if(x===3)
        {
            for(i=0;i<(ar_Length-1);i++)
            {
              console.log("Item being processed: "+gName[i]+" Item#: "
                      +i+" Tag being used: "+iName[i]);
            }
                console.log("Run Everything");
                // If checked, process
                alert("This is testing everything.");
                httpGet("http://localhost:8080/index.html?menu100=3&menu0=true&menu1=true&menu2=true&menu3=true"+
                    "&menu4=true&menu5=true&menu6=true"+
                    "&menu7=true&menu8=true&menu9=true"+
                    "&menu10=true&menu11=true&menu12=true"+
                    "&menu13=true&menu14=true&menu15=true","_self");
                window.open("http://localhost:8080/index.html","_self");                        
        }
    }


