//As explained at top : 1)immediately-invoked function, 2)listener for on load ,3)check body's id enable javascript code and avoid conflicts between pages

    (function() {

    document.addEventListener("DOMContentLoaded",function(){

        if (document.getElementById('jjjjMiniGameIdentifier') !== null){         
       
       
       function jjjjGameSetUp(){
       
       
       
       
       // here I just declare a variable for all the cards and also set a starting array that holds the elements that I want to dispaly in them...
       // as you see its 3 times the same ....
       let jjjjcardItem=document.getElementsByClassName("jjjjcardItem");
       let jjjjCardclasses=Array(
       "Empusidae","Empusidae","Empusidae",
       "Mantidae","Mantidae","Mantidae",
       "Phyllocranidae","Phyllocranidae","Phyllocranidae",
       "Beauty","Beauty","Beauty",
       "AquaMantis","AquaMantis","AquaMantis",
       "funnySayings","funnySayings","funnySayings"
       );
       
       //here I get all the cards, pick a random value from the array and add it as a class to each card, then i remove the value from array.
       //this way I create sets of 3 ...so there will be the same class 3 times.
       //the jjjjCardclasses.length ensures that the random number exists in the array...
       for (p=0;p<jjjjcardItem.length;p++){
         let getit=jjjjCardclasses[Math.floor(Math.random() * jjjjCardclasses.length)];
       
         jjjjcardItem[p].classList.add(getit);
         jjjjCardclasses.splice(jjjjCardclasses.indexOf(getit),1);
       
       
       
        }
       
        //Also I have added a set that its a random funny saying...
       let jjjCardsFunnySayingsUrl=Array(
           "bamboo.jpg",
           "getALife.jpg",
           "iAmRightHere.jpg",
           "LetTheStressBegin.jpg",
           "meAlwaysRight.jpg",
           "ReallyFunny.jpg",
       );
       
       
       //... and in order to achieve it heres another random picker to pick an image and add it to the class funnySayings! (so there will be 3 funnySayings
       //with this image)
       let jjjjRandomFunny=jjjCardsFunnySayingsUrl[Math.floor(Math.random() * jjjCardsFunnySayingsUrl.length)];
       
       setTimeout(function(){
         let  jjjjQfunnySayings=document.getElementsByClassName('funnySayings');
           for (p=0;p<jjjjQfunnySayings.length;p++){
               jjjjQfunnySayings[p].querySelector('.jjjcardItemFront').style.backgroundImage="url(../images/Balasis/miniGame/funnySayings/"+jjjjRandomFunny;
           }
       
       },10);
       
       
       
       
       
       }
           
       
       //triggering the game set up
       jjjjGameSetUp();
       
       
       let jjjjgameEnded=false;
       
                
                //not much to explain here..same as the quiz I simple create localStorage items and keep the top 10...
       
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
       
       
       
       
       
               //I wanted to have a hover animation. Proble was that when using transform property in to the animation
                // and you change it later with javascript it doesnt react well..(delays e.t.c) so:

               //..this is a tricky one 
               //in each one of these I need to first add the clicked element to an array (jjjcardiflipped) then
               //disactivate his animation..then add the rotation...then check if matches or it has to be flipped again
               //and in case it doesnt match add back the animation with a delay though to have time for the flip to take place..again..
               //so setTimeout = animation time of flip...
       



           for (let i = 0; i < jjjjcardItems.length; i++) {
               jjjjcardItems[i].addEventListener('click', function (e) {
                   e.preventDefault();
               if (jjjjloadSafety==false){
                   jjjjloadSafety=true;
                   
       
                    //I checkhow many cards are flipped each time ..
                   if (jjjCardiFlipped.length === 0) {
       
                     
                    // at each flip I push the class item to an array and then compare the array items between them...
                    //if items are the same they remain open ..else they flip back..the flip back is getting triggered
                    //only when 3 cards are flipped..
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
       
                           // Code to execute when cards match (for 3 cards)
                         //I add delay so the flip animation end first and then activate the commands for the 3 flipped cards that match...
       
                          
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
       
                   //this gets triggered in the end of the game if you won....
                   function jjjjSSaveTopScores(jjjjSScore) {              
                       let jjjjSTopScores = JSON.parse(localStorage.getItem('jjjjSTopScores')) || [];   
                       jjjjSTopScores.push(jjjjSScore);
                       jjjjSTopScores.sort((a, b) => b - a);
                       jjjjSTopScores = jjjjSTopScores.slice(0, 10);
                       localStorage.setItem('jjjjSTopScores', JSON.stringify(jjjjSTopScores));
                   }
       
                  
               
       
       
       
       
       
       
       
                    //a timer which I get the value in the end of the game ...
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
       
       
       
       
       
       
       
       
       
                        //just resetting all values to start..also the timer..
                        
                        function jjjjResetMiniGameLet() {
                            
                            if (typeof jjjjCountDownInterval !== 'undefined') {
                                clearInterval(jjjjCountDownInterval);
                            }
                        
                            //reset the array that I push the sets...
                            jjjCardiFlipped = [];
                        
                        //I remove all the setTimeouts delays...(in case there is a delay on so I can reset instantly);
                        //the command is just getting its windowSetTimeout one after another and 0 it..
                            let id = window.setTimeout(function() {}, 0);
                            while (id--) {
                                window.clearTimeout(id);
                            }
                            
                            //rest of commands is to reset timers and recalling the set classes to cards e.t.c
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