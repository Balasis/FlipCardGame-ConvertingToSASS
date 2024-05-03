
    (function() {

    document.addEventListener("DOMContentLoaded",function(){
        if (document.getElementById('jjjjMiniGameIdentifier') !== null){ 
       function jjjjGameSetUp(){
       let jjjjcardItem=document.getElementsByClassName("jjjjcardItem");
       let jjjjCardclasses=Array(
       "Empusidae","Empusidae","Empusidae",
       "Mantidae","Mantidae","Mantidae",
       "Phyllocranidae","Phyllocranidae","Phyllocranidae",
       "Beauty","Beauty","Beauty",
       "AquaMantis","AquaMantis","AquaMantis",
       "funnySayings","funnySayings","funnySayings"
       );
       for (p=0;p<jjjjcardItem.length;p++){
         let getit=jjjjCardclasses[Math.floor(Math.random() * jjjjCardclasses.length)];       
         jjjjcardItem[p].classList.add(getit);
         jjjjCardclasses.splice(jjjjCardclasses.indexOf(getit),1);
        } 
         let jjjCardsFunnySayingsUrl=Array(
           "bamboo.jpg",
           "getALife.jpg",
           "iAmRightHere.jpg",
           "LetTheStressBegin.jpg",
           "meAlwaysRight.jpg",
           "ReallyFunny.jpg",
       );  
       let jjjjRandomFunny=jjjCardsFunnySayingsUrl[Math.floor(Math.random() * jjjCardsFunnySayingsUrl.length)];
       
       setTimeout(function(){
         let  jjjjQfunnySayings=document.getElementsByClassName('funnySayings');
           for (p=0;p<jjjjQfunnySayings.length;p++){
               jjjjQfunnySayings[p].querySelector('.jjjcardItemFront').style.backgroundImage="url(../images/Balasis/miniGame/funnySayings/"+jjjjRandomFunny;
           }       
       },10); 
       }        
       jjjjGameSetUp();
       let jjjjgameEnded=false;  
               function jjjjSDisplayTopScores() {                       
                   let jjjjSTopScores = JSON.parse(localStorage.getItem('jjjjSTopScores')) || [];
                   let jjjjSTimeTable = document.getElementById('jjjjSTimeTable');
                   jjjjSTimeTable.innerHTML = '<h5>Top 10 Times</h5>';
                   jjjjSTopScores.forEach((jjjjSScore, index) => {
                       let jjjjSScoreElement = document.createElement('p');
                       jjjjSScoreElement.textContent = `${jjjjSScore} seconds`;
                       jjjjSTimeTable.appendChild(jjjjSScoreElement);
                   });
               }   
               function jjjjclearJjjjSTopScores() {
                   if (localStorage.getItem('jjjjSTopScores')) {
                       localStorage.removeItem('jjjjSTopScores');
                   }
                    jjjjSDisplayTopScores();
               }
               jjjjSDisplayTopScores();
               let jjjScoresMiniGame=document.getElementById('jjjScoresMiniGame');
               let  jjjShowMiniGamee=document.getElementById('jjjShowMiniGame');
              jjjScoresMiniGame.addEventListener('click',function(){
               jjjjShowTheScores();
           });       
           function jjjShowMiniGame(){
               if ( jjjjgameEnded==true){
                   jjjjResetMiniGameLet();
               }       
               document.getElementById('jjjShowMiniGame').style.display="none";
               document.getElementById('jjjScoresMiniGame').style.display="flex";        
               document.getElementsByClassName('jjjjcardHolder')[0].style.display="grid";
               document.getElementById('jjjjTableFrame').style.display="none"; 
              document.getElementById('jjjjCardTimer').style.display="flex"; 
           }
               jjjShowMiniGamee.addEventListener('click',function(){
                   jjjShowMiniGame();
               });       
               function jjjjShowTheScores(){
                   if ( jjjjgameEnded==true){
                       jjjjResetMiniGameLet();
                   }
                   jjjjSDisplayTopScores();
                   document.getElementById('jjjjCardTimer').style.display="none";
                   document.getElementById('jjjScoresMiniGame').style.display="none";
                   document.getElementById('jjjShowMiniGame').style.display="flex";           
                   document.getElementsByClassName('jjjjcardHolder')[0].style.display="none";
                   document.getElementById('jjjjTableFrame').style.display="flex"; 
               }  
               document.getElementById('jjjResetMiniGameTable').addEventListener('click',function(){
                   jjjjclearJjjjSTopScores();
               });
           let jjjjcardItems = document.getElementsByClassName('jjjjcardItem');
           let jjjCardiFlipped = [];
           let jjjjloadSafety=false;
           let jjjjtimerIsOn=false;
           let jjjjQuiztimer=0; 
                   let jjjjQuiztimerMinutes=0;
           for (let i = 0; i < jjjjcardItems.length; i++) {
               jjjjcardItems[i].addEventListener('click', function (e) {
                   e.preventDefault();
               if (jjjjloadSafety==false){
                   jjjjloadSafety=true;
                   if (jjjCardiFlipped.length === 0) {
                       jjjCardiFlipped.push(jjjjcardItems[i]);
                       if (jjjjtimerIsOn==false){
                       jjjjStartCardGameTimer();
                   }       
                       for (let j = 0; j < jjjjcardItems.length; j++) {
                           if (jjjCardiFlipped.includes(jjjjcardItems[j])) {
                               jjjjcardItems[j].style.animationPlayState = 'paused';
                               jjjjcardItems[j].style.animationName = 'none';
                           } else {
                               jjjjcardItems[j].style.animationPlayState = '';
                               jjjjcardItems[j].style.animationName = 'jjjhoverAnimation';
                           }
                       }       
                       setTimeout(function(){
                           jjjjcardItems[i].classList.add('jjjcardItemRotated');
                     },50);                        
                     } else if (jjjCardiFlipped.length === 1) {
                       jjjCardiFlipped.push(jjjjcardItems[i]);
       
                       for (let j = 0; j < jjjjcardItems.length; j++) {
                           if (jjjCardiFlipped.includes(jjjjcardItems[j])) {
                               jjjjcardItems[j].style.animationPlayState = 'paused';
                               jjjjcardItems[j].style.animationName = 'none';                               
                           } else {
                               jjjjcardItems[j].style.animationPlayState = '';
                               jjjjcardItems[j].style.animationName = 'jjjhoverAnimation';
                           }
                       }       
                       setTimeout(function(){
                       jjjjcardItems[i].classList.add('jjjcardItemRotated');
                     },50);                       
                       if (jjjCardiFlipped[0].classList[1] === jjjCardiFlipped[1].classList[1]) {
                       }
                     } else if ((jjjCardiFlipped.length === 2)  ) {
                       if (jjjCardiFlipped.length<3){
                       jjjCardiFlipped.push(jjjjcardItems[i]);
                       for (let j = 0; j < jjjjcardItems.length; j++) {
                           if (jjjCardiFlipped.includes(jjjjcardItems[j])) {
                               jjjjcardItems[j].style.animationPlayState = 'paused';
                               jjjjcardItems[j].style.animationName = 'none';
                           } else {
                               jjjjcardItems[j].style.animationPlayState = '';
                               jjjjcardItems[j].style.animationName = 'jjjhoverAnimation';
                           }
                       }       
                       setTimeout(function(){
                       jjjjcardItems[i].classList.add('jjjcardItemRotated');       
                     },50);      
                       if (jjjCardiFlipped[0].classList[1] === jjjCardiFlipped[1].classList[1] &&
                           jjjCardiFlipped[1].classList[1] === jjjCardiFlipped[2].classList[1]) {       
                           setTimeout(function(){        
                           jjjCardiFlipped[0].classList.add('jjjcardItemRotatedRemoved');
                           jjjCardiFlipped[1].classList.add('jjjcardItemRotatedRemoved');                  
                           jjjCardiFlipped[2].classList.add('jjjcardItemRotatedRemoved');
                           let jjjjOnlyOnceCheck=true;
                           for (let j = 0; j < jjjjcardItems.length; j++) {
                               if (!jjjjcardItems[j].classList.contains('jjjcardItemRotatedRemoved')) {
                                   jjjjOnlyOnceCheck=false;                            
                               }
                           }
                           jjjjgameEnded=jjjjOnlyOnceCheck;
                           setTimeout(function () {
                           if( document.getElementsByClassName('jjjjcardHolder')[0].classList.contains('jjjjcardHolderCorrect')){
                          document.getElementsByClassName('jjjjcardHolder')[0].classList.remove('jjjjcardHolderCorrect');
                                }       
                        if( document.getElementsByClassName('jjjjcardHolder')[0].classList.contains('jjjjcardHolderFalse')){
                           document.getElementsByClassName('jjjjcardHolder')[0].classList.remove('jjjjcardHolderFalse');
                        }       
                          document.getElementsByClassName('jjjjcardHolder')[0].classList.add('jjjjcardHolderCorrect');
                          setTimeout(function(){
                           if( document.getElementsByClassName('jjjjcardHolder')[0].classList.contains('jjjjcardHolderCorrect')){
                               document.getElementsByClassName('jjjjcardHolder')[0].classList.remove('jjjjcardHolderCorrect');
                                     }
            
                           },2100);
                       }, 500);
                               setTimeout(function(){
                                   jjjCardiFlipped = [];
                               },10);
                                },1500);
                       } else {
                           setTimeout(function () {
                               if( document.getElementsByClassName('jjjjcardHolder')[0].classList.contains('jjjjcardHolderCorrect')){
                                   document.getElementsByClassName('jjjjcardHolder')[0].classList.remove('jjjjcardHolderCorrect');
                                         }                
                                 if( document.getElementsByClassName('jjjjcardHolder')[0].classList.contains('jjjjcardHolderFalse')){
                                    document.getElementsByClassName('jjjjcardHolder')[0].classList.remove('jjjjcardHolderFalse');
                                 }                
                                   document.getElementsByClassName('jjjjcardHolder')[0].classList.add('jjjjcardHolderFalse');
                                   setTimeout(function(){
                                    if( document.getElementsByClassName('jjjjcardHolder')[0].classList.contains('jjjjcardHolderFalse')){
                                        document.getElementsByClassName('jjjjcardHolder')[0].classList.remove('jjjjcardHolderFalse');
                                              }                     
                                    },2100);           
                                   }, 500);  
                           setTimeout(function () {
                               for (let j = 0; j < jjjjcardItems.length; j++) {
                                   if (jjjCardiFlipped.includes(jjjjcardItems[j])) {
                                       jjjjcardItems[j].style.animationPlayState = 'paused';
                                       jjjjcardItems[j].style.animationName = 'none';
                                   } else {
                                       jjjjcardItems[j].style.animationPlayState = '';
                                       jjjjcardItems[j].style.animationName = 'jjjhoverAnimation';
                                   }
                               }       
                               setTimeout(function(){
                                   for (let j = 0; j < jjjCardiFlipped.length; j++) {
                                       jjjCardiFlipped[j].classList.remove('jjjcardItemRotated');
                                   }
                                   jjjCardiFlipped = [];
                               },50)
                           }, 1500);
                       } 
                   }                 
                   }
                   setTimeout(function(){ 
                       jjjjloadSafety=false;
                   },20)       
                   }       
                   function jjjjSSaveTopScores(jjjjSScore) {              
                       let jjjjSTopScores = JSON.parse(localStorage.getItem('jjjjSTopScores')) || [];   
                       jjjjSTopScores.push(jjjjSScore);
                       jjjjSTopScores.sort((a, b) => b - a);
                       jjjjSTopScores = jjjjSTopScores.slice(0, 10);
                       localStorage.setItem('jjjjSTopScores', JSON.stringify(jjjjSTopScores));
                   }
                   function jjjjStartCardGameTimer(){       
                       jjjjtimerIsOn=true;
                       jjjjCountDownInterval=setInterval(function(){       
                           if (jjjjQuiztimerMinutes == 0){
                               if (jjjjQuiztimer<10){
                                   jjjjQuiztimerShow="0"+jjjjQuiztimer;
                               }else{
                                   jjjjQuiztimerShow=jjjjQuiztimer;
                               }                       
                       }else{
                           if (jjjjQuiztimer<10){
                               jjjjQuiztimerShow="0"+jjjjQuiztimer;
                           }else{
                               jjjjQuiztimerShow=jjjjQuiztimer;
                           }
       
                           jjjjQuiztimerShow=jjjjQuiztimerMinutes + " : " + jjjjQuiztimer;
                       }                       
                           document.getElementById('jjjjCardTimerText').innerText=jjjjQuiztimerShow;
                               if (jjjjgameEnded==true){        
                                 jjjjSSaveTopScores(jjjjQuiztimerShow);
                                 setTimeout(function(){
                                   setTimeout(function(){
                                   jjjjSDisplayTopScores() ; 
                               },20);
                                   jjjScoresMiniGame.click();
                                 },50)
                                 clearInterval(jjjjCountDownInterval);
                              }       
                              jjjjQuiztimer=jjjjQuiztimer+1;       
                              if (jjjjQuiztimer==60){
                                jjjjQuiztimerMinutes=jjjjQuiztimerMinutes+1;
                                jjjjQuiztimer=0;       
                              }       
                           }   ,1000);
                   }
               });
           }                     
                        function jjjjResetMiniGameLet() {                            
                            if (typeof jjjjCountDownInterval !== 'undefined') {
                                clearInterval(jjjjCountDownInterval);
                            }                        
                            jjjCardiFlipped = [];                        
                            let id = window.setTimeout(function() {}, 0);
                            while (id--) {
                                window.clearTimeout(id);
                            }                            
                            for (let i = 0; i < jjjjcardItems.length; i++) {
                                jjjjcardItems[i].removeAttribute('style');
                                jjjjcardItems[i].querySelector('.jjjcardItemFront').removeAttribute('style');
                                while (jjjjcardItems[i].classList.length > 1) {                                    
                                    jjjjcardItems[i].classList.remove(jjjjcardItems[i].classList.item(1));
                                }
                            }
                            jjjjtimerIsOn=false;
                            jjjjQuiztimer=0;
                            jjjjQuiztimerMinutes=0;
                            jjjjQuiztimerShow=0;
                            jjjjgameEnded=false;                    
                            document.getElementById('jjjjCardTimerText').innerText=jjjjQuiztimerShow;
                            jjjjGameSetUp();
                        }
                    document.getElementById('jjjResetMiniGame').addEventListener('click',function(){
                        jjjjResetMiniGameLet();
                    });
       }       
       })})();