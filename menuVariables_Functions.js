/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Defining variables
var mainTitle="The City of Kothos Automatic Testing Page";
var myButton=["All Menu Items",
    "Submit Home Page Tests",
    "Submit Biography Page Tests",
    "Submit Gallery Page Tests"];

//First Menu labels
var m_one=["Home Page Button",
    "Chapter Headings",
    "Prologue",
    "Glossary",
    "Contact Me",
    "Buy The Book",
    "All Menu Items in Home Page Section"];


//Second Menu labels
var m_two=["Creston",
    "Bella To",
    "Tuppa To",
    "Batuma Kan",
    "Wen Ta",
    "Sal Li",
    "Cleophi Tan",
    "All Menu Items in Biography Section"];


//Third Menu labels
var m_three=["Black & White Gallery",
    "Color Gallery",
    "Both Galleries"];

//Checkbox Names for each menu
var h_array=["m0_Check",
    "m1_Check",
    "m2_Check",
    "m3_Check",
    "m4_Check",
    "m5_Check",
    "all_1_Check"];
var b_array=["b0_Check",
    "b1_Check",
    "b2_Check",
    "b3_Check",
    "b4_Check",
    "b5_Check",
    "b6_Check",
    "all_2_Check"];
var g_array=["g0_Check",
    "g1_Check",
    "all_3_Check"];

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
    
}

//functions
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
            case 1: // Biograph Selection
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
    console.log("The Name Array= "+gName);
    console.log("The Input Tag Array= "+iName+" The arraylength is: "+ar_Length);
    // If the user selection is all tests in section.
    if(document.getElementById(lastItem).checked===true)
        {
            {
                for(i=0;i<(ar_Length-1);i++)
                {
                  console.log("Item being processed: "+lastItem+" Item#: "
                          +i+" Tag being used: "+lastItem);
                  y=document.getElementById(lastItem).checked;
                  console.log("Run Everything checked in a section: "+y);
                  if(y===true)
                    {// If checked, process
                        alert("Testing everything in a specific menu: "+lastItem);
                        httpGet("http://localhost:8080/index.html?menu100=1&menu1=true&menu2=false&menu3=false","_self"); 
                        window.open("http://localhost:8080/index.html","_self");
                    }
                }                        
            }
            document.getElementById(lastItem).checked=false;
            return;
        }
    // If the user selected at least 1 each selected will run  
    if(x!==3 & document.getElementById(lastItem).checked===false) 
        {
            for(i=0;i<(ar_Length-1);i++)
            {
              console.log("Item being processed: "+gName[i]);
              y=document.getElementById(iName[i]).checked;
              console.log("Run Selected Items is checked: "+y);
            }
            if(y===true)
              {// If checked, process
                  alert("This is the Multiple Selection Menu");
                  httpGet("http://localhost:8080/index.html?menu100=2&menu1=false&menu2=true&menu3=false","_self"); 
                  window.open("http://localhost:8080/index.html","_self"); 
              }
            console.log("Item being cleared: "+gName[i]);
            document.getElementById(iName[i]).checked===false;
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
                httpGet("http://localhost:8080/index.html?menu100=3&menu1=false&menu2=false&menu3=true","_self");
                window.open("http://localhost:8080/index.html","_self");                        
        }
    }


