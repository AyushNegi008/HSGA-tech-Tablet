
let z=2;
men = document.querySelector('.men')
menue = document.querySelector('.menue')
garudam = document.querySelector('.garudam')


    
garudam.addEventListener('click',()=>{
        
        menue.classList.toggle('men');

        z+=1;
        document.getElementById("menue").style.zIndex = z;

        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
})










































let tmax=0;
ter = document.querySelector('.ter')
terin = document.querySelector('.terin')
file2 = document.querySelector('.file2')


    
file2.addEventListener('click',()=>{
        
        terin.classList.toggle('ter');

        z+=1;
        document.getElementById("terin").style.zIndex = z;

        if(tmax==1){
                ter.classList.toggle('max');
        }

        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');
})
tpd = document.querySelector('.tpd')
tpd.addEventListener('click',()=>{
        
        ter.classList.toggle('max');
        if (tmax==0){
                tmax=1;
        }
        else{
                tmax=0;
        }
})
trd = document.querySelector('.trd')
trd.addEventListener('click',()=>{
        
        terin.classList.add('ter');
        ter.classList.remove('max');

})
tyd = document.querySelector('.tyd')
tyd.addEventListener('click',()=>{
        
        terin.classList.add('ter');
        ter.classList.remove('max');

})


















































let dimax=0; 
dis = document.querySelector('.dis')
discord = document.querySelector('.discord')
monster = document.querySelector('.monster')

monster.addEventListener('click',()=>{
        
        discord.classList.toggle('dis');

        if(dimax==1){
                dis.classList.toggle('max');
        }
        
        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');
})

dipd = document.querySelector('.dipd')
dipd.addEventListener('click',()=>{

        dis.classList.toggle('max');
        if (dimax==0){
                dimax=1;
        }
        else{
                dimax=0;
        }
})

dird = document.querySelector('.dird')
dird.addEventListener('click',()=>{
        
        discord.classList.add('dis');
        dis.classList.remove('max');

})
diyd = document.querySelector('.diyd')
diyd.addEventListener('click',()=>{
        
        discord.classList.add('dis');
        dis.classList.remove('max');

})



let dix=0;
function direload() {
        document.getElementById('disxi').src = '';
        dix=0;
    }
dird.onclick = direload;

function direload2() {
        if (dix==0){
                document.getElementById('disxi').src = 'https://www.aichatting.net/';
                dix=1;
                
        }
        z+=1;
        document.getElementById("dis").style.zIndex = z;
    }
monster.onclick = direload2;

















































let smax=0;
set = document.querySelector('.set')
sett = document.querySelector('.sett')
setting = document.querySelector('.setting')


    
setting.addEventListener('click',()=>{
        
        sett.classList.toggle('set');

        z+=1;
        document.getElementById("sett").style.zIndex = z;

        if(smax==1){
                set.classList.toggle('max');
        }

        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');
})
spd = document.querySelector('.spd')
spd.addEventListener('click',()=>{
        
        set.classList.toggle('max');
        if (smax==0){
                smax=1;
        }
        else{
                smax=0;
        }
})
srd = document.querySelector('.srd')
srd.addEventListener('click',()=>{
        
        sett.classList.add('set');
        set.classList.remove('max');

})
syd = document.querySelector('.syd')
syd.addEventListener('click',()=>{
        
        sett.classList.add('set');
        set.classList.remove('max');

})




































let temax=0; 
term = document.querySelector('.term')
terminal = document.querySelector('.terminal')
file = document.querySelector('.file')


    
file.addEventListener('click',()=>{
        
        terminal.classList.toggle('term');

        z+=1;
        document.getElementById("terminal").style.zIndex = z;

        if(temax==1){
                term.classList.toggle('max');
        }

        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');
})
tepd = document.querySelector('.tepd')
tepd.addEventListener('click',()=>{
        
        term.classList.toggle('max');
        if (temax==0){
                temax=1;
        }
        else{
                temax=0;
        }
})
terd = document.querySelector('.terd')
terd.addEventListener('click',()=>{
        
        terminal.classList.add('term');
        term.classList.remove('max');

})
teyd = document.querySelector('.teyd')
teyd.addEventListener('click',()=>{
        
        terminal.classList.add('term');
        term.classList.remove('max');

})


let tex=0;
function tereload() {
        document.getElementById('termxi').src = '';
        tex=0;
    }
terd.onclick = tereload;

function tereload2() {
        if (tex==0){
                document.getElementById('termxi').src = 'https://www.jdoodle.com/test-bash-shell-script-online/?ref=itsfoss.com';
                tex=1;
                
                
        }
        
    }
file.onclick = tereload2;


























let mmax=0; 
mus = document.querySelector('.mus')
musi = document.querySelector('.musi')
music = document.querySelector('.music')

music.addEventListener('click',()=>{
        
        musi.classList.toggle('mus');

        if(mmax==1){
                mus.classList.toggle('max');
        }
        
        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');
})

mpd = document.querySelector('.mpd')
mpd.addEventListener('click',()=>{

        mus.classList.toggle('max');
        if (mmax==0){
                mmax=1;
        }
        else{
                mmax=0;
        }
})

mrd = document.querySelector('.mrd')
mrd.addEventListener('click',()=>{
        
        musi.classList.add('mus');
        mus.classList.remove('max');

})
myd = document.querySelector('.myd')
myd.addEventListener('click',()=>{
        
        musi.classList.add('mus');
        mus.classList.remove('max');

})



let x=0;
function reload() {
        document.getElementById('musxi').src = '';
        x=0;
    }
mrd.onclick = reload;

function reload2() {
        if (x==0){
                document.getElementById('musxi').src = 'https://www.boomplay.com/';
                x=1;
                
        }
        z+=1;
        document.getElementById("musi").style.zIndex = z;
    }
music.onclick = reload2;










































let camax=0;
cam = document.querySelector('.cam')
camer = document.querySelector('.camer')
camera = document.querySelector('.camera')

camera.addEventListener('click',()=>{
        
        camer.classList.toggle('cam');

        z+=1;
        document.getElementById("camer").style.zIndex = z;

        if(camax==1){
                cam.classList.toggle('max');
        }

        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');
})
capd = document.querySelector('.capd')
capd.addEventListener('click',()=>{
        
        cam.classList.toggle('max');
        if (camax==0){
                camax=1;
        }
        else{
                camax=0;
        }
})
card = document.querySelector('.card')
card.addEventListener('click',()=>{
        
        camer.classList.add('cam');
        cam.classList.remove('max');

})
cayd = document.querySelector('.cayd')
cayd.addEventListener('click',()=>{
        
        camer.classList.add('cam');
        cam.classList.remove('max');

})

let cax=0;
function careload() {
        document.getElementById('camxi').src = '';
        cax=0;
    }
card.onclick = careload;

function careload2() {
        if (cax==0){
                
                
                // Set constraints for the video stream
                var constraints = { video: { facingMode: "user" }, audio: false };
                // Define constants
                const cameraView = document.querySelector("#camera--view"),
                cameraOutput = document.querySelector("#camera--output"),
                cameraSensor = document.querySelector("#camera--sensor"),
                cameraTrigger = document.querySelector("#camera--trigger")
                // Access the device camera and stream to cameraView
                function cameraStart() {
                navigator.mediaDevices
                        .getUserMedia(constraints)
                        .then(function(stream) {
                        track = stream.getTracks()[0];
                        cameraView.srcObject = stream;
                })
                .catch(function(error) {
                        console.error("Oops. Something is broken.", error);
                });
                }
                // Take a picture when cameraTrigger is tapped
                cameraTrigger.onclick = function() {
                cameraSensor.width = cameraView.videoWidth;
                cameraSensor.height = cameraView.videoHeight;
                cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
                cameraOutput.src = cameraSensor.toDataURL("image/webp");
                cameraOutput.classList.add("taken");
                };
                // Start the video stream when the window loads
                window.addEventListener("load", cameraStart, false);

                
                cax=1;
                
                
        }
        
    }
camera.onclick = careload2;




























let cmax=0;
co = document.querySelector('.co')
cod = document.querySelector('.cod')
code = document.querySelector('.code')
  
code.addEventListener('click',()=>{
        
        cod.classList.toggle('co');

        if(cmax==1){
                co.classList.toggle('max');
        }
        
        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');
})
cpd = document.querySelector('.cpd')
cpd.addEventListener('click',()=>{
        
        cod.classList.toggle('max');
        if (cmax==0){
                cmax=1;
        }
        else{
                cmax=0;
        }
})
crd = document.querySelector('.crd')
crd.addEventListener('click',()=>{
        
        cod.classList.add('co');
        co.classList.remove('max');

})
cyd = document.querySelector('.cyd')
cyd.addEventListener('click',()=>{
        
        cod.classList.add('co');
        co.classList.remove('max');

})


let cx=0;
function creload() {
        document.getElementById('codxi').src = '';
        cx=0;
    }
crd.onclick = creload;

function creload2() {
        if (cx==0){
                document.getElementById('codxi').src = 'https://www.programiz.com/c-programming/online-compiler/';
                cx=1;
                
                
        }
        z+=1;
        document.getElementById("cod").style.zIndex = z;
        
    }
code.onclick = creload2;
































let amax=0;
angu = document.querySelector('.angu')
angular = document.querySelector('.angular')
alogo = document.querySelector('.alogo')


    
alogo.addEventListener('click',()=>{
        
        angular.classList.toggle('angu');

        z+=1;
        document.getElementById("angular").style.zIndex = z;

        if(amax==1){
                angu.classList.toggle('max');
        }

        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');
})
apd = document.querySelector('.apd')
apd.addEventListener('click',()=>{
        
        angu.classList.toggle('max');
        if (amax==0){
                amax=1;
        }
        else{
                amax=0;
        }
})
ard = document.querySelector('.ard')
ard.addEventListener('click',()=>{
        
        angular.classList.add('angu');
        angu.classList.remove('max');

})
ayd = document.querySelector('.ayd')
ayd.addEventListener('click',()=>{
        
        angular.classList.add('angu');
        angu.classList.remove('max');

})

let ax=0;
function areload() {
        document.getElementById('anguxi').src = '';
        ax=0;
    }
ard.onclick = areload;

function areload2() {
        if (ax==0){
                document.getElementById('anguxi').src = 'https://ng-run.com/';
                ax=1;
                
                
        }
        
    }
alogo.onclick = areload2;





















calender = document.querySelector('.calender')
calendarcontainer = document.querySelector('.calendarcontainer')
ccc = document.querySelector('.ccc')
calender.addEventListener('click',()=>{
        
        calendarcontainer.classList.toggle('ccc');

        z+=1;
        document.getElementById("ccc").style.zIndex = z;
        
        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');


})



































garuda = document.querySelector('.garuda')
ddmenu = document.querySelector('.ddmenu')
ddm = document.querySelector('.ddm')
m=document.querySelector('.m')


    
garuda.addEventListener('click',()=>{
        
        ddmenu.classList.toggle('ddm');

        ddfile.classList.add('ddf');
     
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        
        ddset.classList.add('dds');
        menue.classList.add('men');
})

m.addEventListener('click',()=>{
        
        ddmenu.classList.toggle('ddm');

        ddfile.classList.add('ddf');
     
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');
})






f = document.querySelector('.f')
ddfile = document.querySelector('.ddfile')
ddf = document.querySelector('.ddf')



    
f.addEventListener('click',()=>{
        
        ddfile.classList.toggle('ddf');

        
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');

})






e = document.querySelector('.e')
ddedit = document.querySelector('.ddedit')
dde = document.querySelector('.dde')



    
e.addEventListener('click',()=>{
        
        ddedit.classList.toggle('dde');

        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
       
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');
})






v = document.querySelector('.v')
ddview = document.querySelector('.ddview')
ddv = document.querySelector('.ddv')



    
v.addEventListener('click',()=>{
        
        ddview.classList.toggle('ddv');

        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');
})





h = document.querySelector('.h')
ddhelp = document.querySelector('.ddhelp')
ddh = document.querySelector('.ddh')



    
h.addEventListener('click',()=>{
        
        ddhelp.classList.toggle('ddh');

        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');
})











b = document.querySelector('.b')
ddbook = document.querySelector('.ddbook')
ddb = document.querySelector('.ddb')



    
b.addEventListener('click',()=>{
        
        ddbook.classList.toggle('ddb');



        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        
        ddset.classList.add('dds');
        menue.classList.add('men');
})









s = document.querySelector('.s')
ddset = document.querySelector('.ddset')
dds = document.querySelector('.dds')



    
s.addEventListener('click',()=>{
        
        ddset.classList.toggle('dds');

        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        menue.classList.add('men');
        
})





p = document.querySelector('.p')
dsp = document.querySelector('.dsp')
ds = document.querySelector('.ds')
dsp01 = document.querySelector('.dsp01')
dspo2 = document.querySelector('.dspo2')



    
p.addEventListener('click',()=>{
        
        dsp.classList.toggle('ds');
        dspo2.classList.toggle('dspo1');




        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        
        
})





dsp01 = document.querySelector('.dsp01')
dspo2 = document.querySelector('.dspo2')



    
dspo2.addEventListener('click',()=>{
        dsp.classList.toggle('ds');
        dspo2.classList.toggle('dspo1');


        menue.classList.add('men');
})















































en = document.querySelector('.en')

    
en.addEventListener('click',()=>{
        

        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');


})


lce = document.querySelector('.lce')

lce.addEventListener('click',()=>{
        

        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');


})


rce = document.querySelector('.rce')
rce.addEventListener('click',()=>{
        

        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');


})



ebg = document.querySelector('.ebg')
ebg.addEventListener('click',()=>{
        

        ddfile.classList.add('ddf');
        ddmenu.classList.add('ddm');
        ddedit.classList.add('dde');
        ddview.classList.add('ddv');
        ddhelp.classList.add('ddh');
        ddbook.classList.add('ddb');
        ddset.classList.add('dds');
        menue.classList.add('men');


})























let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
 
const day = document.querySelector(".calendar-dates");
 
const currdate = document
    .querySelector(".calendar-current-date");
 
const prenexIcons = document
    .querySelectorAll(".calendar-navigation span");
 
// Array of month names
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
 
// Function to generate the calendar
const manipulate = () => {
 
    // Get the first day of the month
    let dayone = new Date(year, month, 1).getDay();
 
    // Get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();
 
    // Get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay();
 
    // Get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();
 
    // Variable to store the generated calendar HTML
    let lit = "";
 
    // Loop to add the last dates of the previous month
    for (let i = dayone; i > 0; i--) {
        lit +=
            `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }
 
    // Loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) {
 
        // Check if the current date is today
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }
 
    // Loop to add the first dates of the next month
    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }
 
    // Update the text of the current date element
    // with the formatted current month and year
    currdate.innerText = `${months[month]} ${year}`;
 
    // update the HTML of the dates element
    // with the generated calendar
    day.innerHTML = lit;
}
 
manipulate();
 
// Attach a click event listener to each icon
prenexIcons.forEach(icon => {
 
    // When an icon is clicked
    icon.addEventListener("click", () => {
 
        // Check if the icon is "calendar-prev"
        // or "calendar-next"
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;
 
        // Check if the month is out of range
        if (month < 0 || month > 11) {
 
            // Set the date to the first day of the
            // month with the new year
            date = new Date(year, month, new Date().getDate());
 
            // Set the year to the new year
            year = date.getFullYear();
 
            // Set the month to the new month
            month = date.getMonth();
        }
 
        else {
 
            // Set the date to the current date
            date = new Date();
        }
 
        // Call the manipulate function to
        // update the calendar display
        manipulate();
    });
});











































