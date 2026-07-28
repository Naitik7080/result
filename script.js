// ===============================
// BTE Result Generator Pro
// script.js
// ===============================

let selectedSemester = "2";

// Semester Selection
const semesterCards = document.querySelectorAll(".semester");

semesterCards.forEach(card => {

    card.addEventListener("click", () => {

        semesterCards.forEach(c => c.classList.remove("active"));

        card.classList.add("active");

        selectedSemester = card.dataset.sem;

    });

});

// Generate Button
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", generateResult);

function generateResult() {
    generateBtn.disabled = true;
generateBtn.innerHTML = "Generating...";

    const enrollment = document
        .getElementById("enrollment")
        .value
        .trim();

    const dob = document
        .getElementById("dob")
        .value
        .trim();

    if (enrollment.length < 10) {

        alert("Enter Valid Enrollment Number");

        return;

    }

    if (dob == "") {

        alert("Enter Date Of Birth");

        return;

    }

    // Progress Animation

    let progress = 0;

    const progressBar =
        document.getElementById("progressBar");

    progressBar.style.width = "0%";

    const timer = setInterval(() => {

        progress += 10;

        progressBar.style.width = progress + "%";

        if (progress >= 100) {

            clearInterval(timer);

            createLink(enrollment, dob);

        }
        

    }, 80);

}

// Create Link

// ==============================
// SCRIPT PART 1
// Replace only createLink()
// ==============================

function createLink(enrollment, dob){

const birth = dob.replace(/\//g,"");

let semesterName="";
let wishes="";
let popupText="";

if(selectedSemester=="2"){

semesterName="2nd Semester";

wishes=`
🎉 Congratulations!

You have successfully completed
2nd Semester.

📘 Keep Learning
🚀 Keep Growing
🌟 Best Wishes For Your Future
`;

popupText="📘 Your 2nd Semester Result Is Ready.";

}

else if(selectedSemester=="4"){

semesterName="4th Semester";

wishes=`
🎉 Congratulations!

Half Journey Completed.

💪 Keep Working Hard
📚 Stay Focused
🌟 Best Wishes
`;

popupText="📗 Your 4th Semester Result Is Ready.";

}

else{

semesterName="6th Semester";

wishes=`
🎓 Congratulations!

Final Semester Completed.

💼 Best Wishes For Placement

📖 Higher Studies

🏆 Government Job

🚀 Bright Future
`;

popupText="🎓 Your Final Semester Result Is Ready.";

}
let popupTitle = "";

if(selectedSemester=="2"){
    popupTitle="📘 2nd Semester Result Ready";
}
else if(selectedSemester=="4"){
    popupTitle="📗 4th Semester Result Ready";
}
else{
    popupTitle="🎓 Final Semester Result Ready";
}

document.querySelector(".popup-box h1").innerHTML = popupTitle;
generateBtn.disabled = false;
generateBtn.innerHTML = "Generate Result Link";

// -------- YOUR RESULT LINK ----------


// Direct Result URL (Experimental)
const encodedEnrollment = btoa(enrollment);
const encodedDob = btoa(dob);

const resultURL =
"https://result.bteexam.com/even/main/oddresult.aspx?id=";

document.getElementById("resultCard").style.display="block";
document.querySelector(".success-box h2").innerHTML="✅ Result Link Generated";

document.querySelector(".success-box p").innerHTML="Click the button below to view your result.";


document.getElementById("studentCard").style.display="block";

document.getElementById("wishCard").style.display="block";

document.getElementById("resultLink").value=resultURL;

document.getElementById("studentSemester").innerHTML=semesterName;

document.getElementById("studentEnrollment").innerHTML=enrollment;

document.getElementById("studentDob").innerHTML=dob;

document.getElementById("wishMessage").innerHTML=wishes;

document.getElementById("popupMessage").innerHTML=popupText;

saveHistory(resultURL);
setTimeout(() => {
    document.getElementById("popup").style.display = "flex";
}, 500);

}
// Copy Button

document.getElementById("copyBtn").addEventListener("click", () => {

    const link =
        document.getElementById("resultLink")





});

// Open Button

// =============================
// Premium Popup
// =============================

const popup=document.getElementById("popup");

const popupOpen=document.getElementById("popupOpen");

const popupMessage=document.getElementById("popupMessage");

document.getElementById("openBtn").addEventListener("click",()=>{

popup.style.display="flex";

if(selectedSemester=="2"){

popupMessage.innerHTML=`
🎉 2nd Semester Result Ready

📚 Keep Learning

🌟 Best Of Luck

Click Below To Open Result
`;

}

else if(selectedSemester=="4"){

popupMessage.innerHTML=`
🎉 4th Semester Result Ready

💪 Half Journey Completed

🚀 Keep Going

Best Wishes
`;

}

else{

popupMessage.innerHTML=`
🎓 Final Semester Result Ready

💼 Best Wishes For Placement

📖 Higher Studies

🏆 Bright Future
`;

}

});

popupOpen.addEventListener("click",()=>{

    const link = document.getElementById("resultLink").value;

    popupOpen.innerHTML="Opening...";

    setTimeout(()=>{
        window.open(link,"_blank");
        popupOpen.innerHTML="📊 Open Result Now!";
    },800);

});

popup.addEventListener("click",(e)=>{

if(e.target==popup){

popup.style.display="none";

}

});

// Share Button

document.getElementById("shareBtn").addEventListener("click", async () => {

    const url =
        document.getElementById("resultLink").value;

    if (navigator.share) {

        navigator.share({

            title: "BTE Result",

            text: "Check Result",

            url: url

        });

    } 

});

// History

function saveHistory(link) {

    let history =
        JSON.parse(localStorage.getItem("history")) || [];

    history.unshift(link);

    history = history.slice(0, 5);

    localStorage.setItem("history", JSON.stringify(history));

    loadHistory();

}

function loadHistory() {

    const historyList =
        document.getElementById("history");

    historyList.innerHTML = "";

    const history =
        JSON.parse(localStorage.getItem("history")) || [];

    history.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        historyList.appendChild(li);

    });

}

loadHistory();

// Dark Mode

document.getElementById("themeBtn").addEventListener("click", () => {

    document.body.classList.toggle("dark");

});
// ===============================
// SCRIPT PART 2
// Paste at the END of script.js
// ===============================

// Show Popup Button

document.getElementById("showPopup").addEventListener("click", () => {

    document.getElementById("popup").style.display = "flex";

});

// Close Popup

document.getElementById("popupClose").addEventListener("click", () => {

    document.getElementById("popup").style.display = "none";

});

// Open Result From Popup

document.getElementById("popupOpen").addEventListener("click", () => {

    const link =
        document.getElementById("resultLink").value;

    if(link==""){

        alert("Generate Result Link First");

        return;

    }

    window.open(link,"_blank");

});

// Open Button

document.getElementById("openBtn").addEventListener("click",()=>{

    document.getElementById("popup").style.display="flex";

});

// Copy Link


    const link=document.getElementById("resultLink");


// Share Link

document.getElementById("shareBtn").addEventListener("click",async()=>{

    const url=document.getElementById("resultLink").value;

    if(url==""){

        alert("Generate Link First");

        return;

    }

    if(navigator.share){

        navigator.share({

            title:"BTEUP Result",

            text:"Check Your Result",

            url:url

        });

    }

    else{

        navigator.clipboard.writeText(url);

        alert("Link Copied");

    }

});

// Progress Reset

document.getElementById("generateBtn").addEventListener("click",()=>{

    document.getElementById("progressBar").style.width="100%";

    setTimeout(()=>{

        document.getElementById("progressBar").style.width="0%";

    },1200);

});

// Dark Mode Save

const theme=localStorage.getItem("theme");

if(theme=="dark"){

    document.body.classList.add("dark");

}

document.getElementById("themeBtn").addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }

    else{

        localStorage.setItem("theme","light");

    }

});

// Auto DOB Format

const dob=document.getElementById("dob");

dob.addEventListener("input",e=>{

    let x=e.target.value.replace(/\D/g,"");

    if(x.length>2)x=x.slice(0,2)+"/"+x.slice(2);

    if(x.length>5)x=x.slice(0,5)+"/"+x.slice(5,9);

    e.target.value=x;

});
