/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
    
    // Assiging Header labels
    document.getElementById("theHeader").innerHTML=mainTitle;
    // Assiging Submit Button labels
    document.getElementById("submitAll").innerHTML=myButton[0];
    document.getElementById("submitOne").innerHTML=myButton[1];
    document.getElementById("submitTwo").innerHTML=myButton[2];
    document.getElementById("submitThree").innerHTML=myButton[3];

    // Assiging Home Page Menu labels
    document.getElementById("m0").innerHTML=m_one[0];
    document.getElementById("m1").innerHTML=m_one[1];
    document.getElementById("m2").innerHTML=m_one[2];
    document.getElementById("m3").innerHTML=m_one[3];
    document.getElementById("m4").innerHTML=m_one[4];
    document.getElementById("m5").innerHTML=m_one[5];
    document.getElementById("all_1").innerHTML=m_one[6];
    // Assiging Biography Menu labels
    document.getElementById("m_0").innerHTML=m_two[0];
    document.getElementById("m_1").innerHTML=m_two[1];
    document.getElementById("m_2").innerHTML=m_two[2];
    document.getElementById("m_3").innerHTML=m_two[3];
    document.getElementById("m_4").innerHTML=m_two[4];
    document.getElementById("m_5").innerHTML=m_two[5];
    document.getElementById("m_6").innerHTML=m_two[6];
    document.getElementById("all_2").innerHTML=m_two[7];
    // Assigning Gallery Menu labels
    document.getElementById("m-0").innerHTML=m_three[0];
    document.getElementById("m-1").innerHTML=m_three[1];
    document.getElementById("all_3").innerHTML=m_three[2];


