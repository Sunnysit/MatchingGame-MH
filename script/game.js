/*
 * @Author: Sunny Xue 
 * @Date: 2018-06-18 22:27:39 
 * @Last Modified by: Sunny Xue
 * @Last Modified time: 2018-06-26 23:39:07
 */
class MonsterHunter{

    //Game Constructor
    constructor(){
        
        // Game HTML Elements
        this.cols = 4;
        this.boxes = null;
        this.selectBox1 = null;
        this.selectBox2 = null;
     
        
        // Game Variables
        this.numBoxes = 12;
        this.boxesString = "";
        this.selectBox1 = null;
        this.selectBox2 = null;
        this.selectCount = 1;
        this.getScore = 0;
        this.currentHp = 100;
        this.hpDeduction = 5;
        this.remainBoxes = this.numBoxes;

        this.monsterNest = [];

        this.monsterFamily = [
            {
                mid:"m01",
                name:"Great Jagras",
                imgUrl:"gameimg/monsters/Jagras.jpg",
                info01:"The pack leader of the Jagras, the Great Jagras is known to go out of control when hungry.",
                info02:"It balloons to unbelievable proportions after swallowing prey."
             },
            
             {
                mid:"m02",
                name:"Pukei-Pukei",
                imgUrl:"gameimg/monsters/Pukei-Pukei.jpg",
                info01:"A flying wyvern known to possess poisonous toxins in its body.",
                info02:"It's been spotted storing scatternuts in its mouth or tail, coating them with poison and spitting them out at threats."
             },

             {
                mid:"m03",
                name:"Tobi-Kadachi",
                imgUrl:"gameimg/monsters/Tobi-Kadachi.jpg",
                info01:"A fanged wyvern that flies among the trees of the Ancient Forest.",
                info02:"Its penchant to brush against the ground and the trees as it moves around builds up static electricity within its fur."
             },

             {
                mid:"m04",
                name:"Anjanath",
                imgUrl:"gameimg/monsters/Anjanath.jpg",
                info01:"The Anjanath patrols the Ancient Forest looking for its favorite meal, Aptonoth.",
                info02:"This belligerent monster will attack anything without the slightest provocation."
             },

             {
                mid:"m05",
                name:"Rathalos",
                imgUrl:"gameimg/monsters/Rathalos.jpg",
                info01:"The apex monster of the Ancient Forest.",
                info02:"A fierce wyvern that descends upon invaders, attacking with poisonous claws and fiery breath."
             },

             {
                mid:"m06",
                name:"Tzitzi-Ya-Ku",
                imgUrl:"gameimg/monsters/Tzitzi-Ya-Ku.jpg",
                info01:"This odd monster blinds both prey and enemies with a special pulsing organ near its head.",
                info02:"It then uses its strong legs to deliver finishing blows."
             },

             {
                mid:"m07",
                name:"Paolumu",
                imgUrl:"gameimg/monsters/Paolumu.jpg",
                info01:"Paolumu feast on eggs found in the Coral Highlands.",
                info02:"They are able to propel through the air using unique sacs in their bodies, and attack with their extremely hard tails."
             },

             {
                mid:"m08",
                name:"Legiana",
                imgUrl:"gameimg/monsters/Legiana.jpg",
                info01:"The apex monster of the Coral Highlands, whose diet primarily consists of Raphinos.",
                info02:"It emits a chilling wind from its body, which dulls its prey's ability to escape."
             },

             {
                mid:"m09",
                name:"Great Girros",
                imgUrl:"gameimg/monsters/Great_Girros.jpg",
                info01:"A monster that scavenges for meals dropped from the Coral Highlands.",
                info02:"It acts as the alpha leader of a Girros pack, and sports giant fangs that paralyze its prey."
             },

             {
                mid:"m10",
                name:"Radobaan",
                imgUrl:"gameimg/monsters/Radobaan.jpg",
                info01:"A gigantic brute wyvern that eats the bones of carcasses found in the Rotten Vale, using some of it as armor.",
                info02:"It also rolls into a ball as a form of attack and transportation."
             },

             {
                mid:"m11",
                name:"Odogaron",
                imgUrl:"gameimg/monsters/Odogaron.jpg",
                info01:"A terrifying monster that scours the Rotten Vale for carrion.",
                info02:"Its highly aggressive nature means that anything, be it monster or man, is a potential meal."
             },

             {
                mid:"m12",
                name:"Rathian",
                imgUrl:"gameimg/monsters/Rathian.jpg",
                info01:"A wyvern known as the \"Queen of the Land.\"",
                info02:"Terrestrial predator, it overpowers its prey with a venomous tail and powerful legs."
             },

             {
                mid:"m13",
                name:"Odogaron",
                imgUrl:"gameimg/monsters/Odogaron.jpg",
                info01:"A terrifying monster that scours the Rotten Vale for carrion.",
                info02:"Its highly aggressive nature means that anything, be it monster or man, is a potential meal."
             },


            ]
        
        this.huntingGround = [
            {
                name:"Ancient Forest",
                difficulty: `<i class="level-star fas fa-star"></i>`,
                info:"Ancient Forest (古代樹の森) is a brand new location that has been shown in early gameplay videos. It is a lush and leafy setting full of monsters and resources to harvest. A vast forest that supports a complex ecosystem. A network of trees stretch high into the sky, creating the ancient tree that looms tall over the rest of the forest."

            },

            {
                name:"Coral Highlands",
                difficulty: `<i class="level-star fas fa-star"></i><i class="level-star fas fa-star"></i>`,
                info:"Coral Highlands (陸珊瑚の台地) is a brand new location that has been shown in early gameplay videos. A mysterious ecological highland that mimics the ebb and flow of the ocean itself. Eggs from the corals ride upon the rising currents and spread to the rest of the New World, where they become a part of the natural food chain. The area is a colorful and vibrant dry coral reef site, with high peaks and cannyons as well as mysterious caves."

            },

            {
                name:"Rotten Vale",
                difficulty: `<i class="level-star fas fa-star"></i><i class="level-star fas fa-star"></i><i class="level-star fas fa-star"></i>`,
                info:"Rotten Vale (瘴氣の谷) is a poisonous and hazardous area of The New World. Bones and corpses pile up, generating toxic fumes that are extremely harmful to Hunters and render even docile Monsters aggressive, and an entire ecosystem revolving around decomposition. Venture into the depths of the Rotten Vale in your journey to unravel the mysteries of the Elder Crossing."

            }
        ]
    
    
    
        }

    //Game Functions

    gameLevel(cols,numBoxes){
        this.cols = cols;
        this.numBoxes = numBoxes;
    }

    gameStart(){
        
        this.gameRestart();

        $(window).scrollTop(0)
        this.createImages(this.monsterFamily);
        this.shuffleImages();
        this.addImages();
        this.upDateUI();
        
    }

    gameEnd(key){
        $(".greywall").fadeIn();
        $(".gameover-box").fadeIn();
        $('.lose-group, .win-group').hide();
        const scoreCount = `${this.getScore} × ${this.currentHp/100+1} = `;
        const finalScore = `${this.getScore*(this.currentHp/100+1)}`;
        switch(key)
        {
            default:
            case "lose":
            $('.lose-group').show();
            $(".gameover-box-title-img").attr('src',"gameimg/quest-failed.png")
            $(".gameover-box-info-title").html("Oh,Monsters defeat you. Try again!");
            break;
            case "win":
            if(currentLevel == "l3"){
                $(".nextlevel-btn").hide();
            }
            else{
                $(".nextlevel-btn").show();
            }
            $('.win-group').show();
            $(".gameover-box-title-img").attr('src',"gameimg/quest-clear.png")
            $(".gameover-box-info-title").html("Yeah! You defeat all monsters!!");
            break;
        }
        $('#scoreCount').html(scoreCount);
        $('#finalScore').html(finalScore);
    }

    gameRestart(){
            //init game values
            this.boxesString = "";
            $('.monster-box-container').html(this.boxesString);
            this.selectBox1 = null;
            this.selectBox2 = null;
            this.selectCount = 1;
            this.getScore = 0;
            this.currentHp = 100;
            $('.hp-bar').removeClass('hp-yellow hp-red');
            this.monsterNest = [];
            this.remainBoxes = this.numBoxes;
         

            //reset monster-info-box
            $('.monster-name').html('Hunter!!');
            $('.monster-info-text01').html('Try your best to defeat all monsters!!');
            $('.monster-info-text02').html('');
            $('.monster-info-img').attr("src",`gameimg/cat.png`);
    }


    createImages(monsterFamily)
    {   

        for(let i= 0;i < (this.numBoxes/2);i++){

            this.monsterNest.push(monsterFamily[i]);
            this.monsterNest.push(monsterFamily[i]);
        }
       
    }

    shuffleImages(){

		let counter = this.monsterNest.length;
		let temp; 
        let i;
        // While there are elements in the array
		while (counter > 0) {

			// Pick a random index
			i = Math.floor(Math.random() * counter);

			// Decrease counter by 1
			counter--;

			// And swap the last element with it
			temp = this.monsterNest[counter];
			this.monsterNest[counter] = this.monsterNest[i];
			this.monsterNest[i] = temp;

		} // end while
     
        
    }

 

    addImages(){
        
        const repeat1 =this.numBoxes/this.cols;
        let imgNum = 0;
        for(let n = 0;n<repeat1;n++)
        {
            this.boxesString += `<div class="row justify-content-center">`;
        
       
        for(let i = 0;i <this.cols;i++)
        {
            this.boxesString += `
            <div class="col-2">
            <div class="monster-box text-center" data-mid="${this.monsterNest[imgNum].mid}" >
                    <img src="${this.monsterNest[imgNum].imgUrl}" alt="${this.monsterNest[imgNum].name}"  class="monsterimg img-fluid">
                    <div class="monster-cover"></div>
            </div></div>`;
            imgNum++;
        }
        
        this.boxesString +=`</div>`;
        }
        $('.monster-box-container').html(this.boxesString);

        this.boxes = $('.monster-box');
   
    


    }

    gameTurn(box){
        //make sure 1 box cannot be selected twice
        box.addClass('selected-box');
        const that = this;
        switch(this.selectCount)
        {
            default:
            case 1:
            box.addClass('monster-rotate');
            box.find('.monster-cover').fadeOut();
            this.selectBox1 = box;
            this.selectCount++;
            break;

            case 2:
            let match = false;
            box.addClass('monster-rotate');
            box.find('.monster-cover').fadeOut();
            this.selectBox2 = box;
            $('.monster-box').addClass('selected-box');
            setTimeout(function(){
                if(that.selectBox1.data('mid') === that.selectBox2.data('mid'))
                {   
                    that.showMonsterInfo(that.selectBox1.data('mid'));
                    that.selectBox1.addClass('matched');
                    that.selectBox2.addClass('matched'); 

                    that.getScore += 100;
                    that.remainBoxes -= 2;
                    // that.currentHp += this.hpDeduction;
                    match = true;
                }
                
                $('.monster-box').removeClass('monster-rotate');
                that.checkStatus(match);
                

			}, 750);
    
            break;
        }
       
    }
   
    resetTurn(){
        $(".monster-box").each(function(i){
                
            if(!$(this).hasClass('matched'))
            {
                $(this).find('.monster-cover').fadeIn();
                 $(this).removeClass('monster-rotate');
            }
           
          });

          $('.selected-box').removeClass('selected-box');
          this.selectBox1 = null;
          this.selectBox2 = null;
          this.selectCount = 1;
         
    }

    checkStatus(match){
        if(!match)
        {
        this.currentHp -= this.hpDeduction; 
        }
        //player still alive
        if(this.currentHp>0) 
            {
            this.upDateUI();
            if(this.remainBoxes <= 0)
            {
                this.gameEnd("win"); //gameover--win
                console.log("Win!");
            }
            else{
                
                this.resetTurn();
            }

        }
        //player died
        else 
        {
            this.currentHp = 0;
            this.upDateUI();
            this.gameEnd("lose"); //gameover--lose
            console.log("Lose!");
        }


    }

    upDateUI()
    {
        this.hp = this.currentHp;
        if(this.hp <= 55)
        {
            $('.hp-bar').addClass('hp-yellow');

            if(this.hp <= 25)
            {
                $('.hp-bar').addClass('hp-red');
            }
        }
        
        $('.hp-bar').css("width",`${this.currentHp}%`);
        $('#hp-show').html(`${this.currentHp}%`);
        $('#score').html(this.getScore);
    }

  
    showMonsterInfo(mid)
    {   
        for(let i=0;i<this.monsterFamily.length;i++)
        {
            if(mid == this.monsterFamily[i].mid)
            {
                $('.monster-name').html(this.monsterFamily[i].name);
                $('.monster-info-text01').html(this.monsterFamily[i].info01);
                $('.monster-info-text02').html(this.monsterFamily[i].info02);
                $('.monster-info-img').attr("src",`${this.monsterFamily[i].imgUrl}`);
            }
        }
     
    }
 
}


    const mg = new MonsterHunter();


    $('#banner-start-btn').on('click',function(){
        
        $('header').css('opacity','0');
        $('.main-window').css('opacity','0');
        $('.game-banner').fadeOut(function(){
            $('.greywall').slideDown();
            $('.game-level-select').fadeIn();
        });
     
    });

    $('.nextlevel-btn').on('click',function(){
        
        let levelBgUrl = "gameimg/Coral-Highlands.jpg";
        switch(currentLevel)
        {    
            default:
            case "l1": mg.gameLevel(5,20);
            currentLevel= "l2";
            levelBgUrl = "gameimg/Coral-Highlands.jpg";
            break;
            case "l2": mg.gameLevel(6,24);
            currentLevel= "l3";
            levelBgUrl = "gameimg/rotten-vale.jpg";
            break;
            case "l3": 
            console.log('win');
            break;
            
        }
  
        setTimeout(()=>{
            $('.hunt-ground').css("background-image",`url("${levelBgUrl}")`);
            },10);
            $('.greywall').slideUp();
             mg.gameStart();
             mg.boxes.click(function(){
     
                 mg.gameTurn( $(this) );
                 
             });
     
     
    });

    //Level select functions -------------------------------start
    let currentLevel; //Record user current select level 
    $('.level').on('click',function(){
    
       const level = $(this).data("level");
       currentLevel = level;
       let levelBgUrl = "gameimg/forest1280.jpg";
       
       $('body').addClass('hunt-ground');
       $('header').css('opacity','1');
       $('.main-window').css('opacity','1');
       $('.game-level-select').hide();
       $('.greywall').slideUp();
       
      
       
        switch(level)
       {    
           default:
           case "l1": mg.gameLevel(4,12);
           levelBgUrl = "gameimg/forest1280.jpg";
           break;
           case "l2": mg.gameLevel(5,20);
           levelBgUrl = "gameimg/Coral-Highlands.jpg";
           break;
           case "l3": mg.gameLevel(6,24);
           levelBgUrl = "gameimg/rotten-vale.jpg";
           break;
           
       }
       setTimeout(()=>{
       $('.hunt-ground').css("background-image",`url("${levelBgUrl}")`);
       },10);

        mg.gameStart();
        mg.boxes.click(function(){

            mg.gameTurn( $(this) );
            
        });

    });

    $('.level').hover(function(){
        const level = $(this).data("level");
        let levelIndex = 0;
        let levelName,stars,levelInfo;
        switch(level)
        {
            default:
            case "l1": levelIndex = 0;break;
            case "l2": levelIndex = 1;break;
            case "l3": levelIndex = 2;break;
        }

        levelName = mg.huntingGround[levelIndex].name;
        stars = mg.huntingGround[levelIndex].difficulty;
        levelInfo = mg.huntingGround[levelIndex].info;
        

        $('.level-name, .level-info, .level-dif').fadeOut(300,function(){
            $('.level-name').html(levelName);
            $('.level-dif').html(`Difficulty:<span class="star-group">${stars}</span>`);
            $('.level-info').html(levelInfo);
            $('.level-name, .level-info, .level-dif').fadeIn(300);
           
        });
        

    },function(){
    });


     //Level select functions -------------------------------end

