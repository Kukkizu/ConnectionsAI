$(document).ready(function(){

    var resp0, resp1, resp2, resp3;
    var category1, category2, category3, category4;
    var fullArray = [];
    var randomIndexArray = [];
    var shuffledArray = [];
    var categoryArray = [];
    var selectedArray = [];
    var compareArray = [];
    var isRowCorrect=false;
    var currrentRow=0;
    var mistakesLeft=4;


  resp0 = ["animals","dog","cat","bird","mouse"];
  resp1 = ["colors","red","green","blue","yellow"];
  resp2 = ["fruits","apple","pear","banana","orange"];
  resp3 = ["vegetables","broccoli","corn","potato","lettuce"];

  for(const i in resp0){
    fullArray.push(resp0[i]);
  }
  for(const i in resp1){
    fullArray.push(resp1[i]);
  }
  for(const i in resp2){
    fullArray.push(resp2[i]);
  }
  for(const i in resp3){
    fullArray.push(resp3[i]);
  }

  //console.log("fullArray: "+fullArray);

  //SHUFFLE LIKE A PUFFLE!!!
/*
  fullArray=["a","b","c"];

  for(var i=0;i<fullArray.length;i++){
    while(true){
      var iFound = false;
      var random = Math.floor(Math.random() * fullArray.length);
      if(randomIndexArray.length==0){
        randomIndexArray.push(random);
        break;
      }else{
         for(var ri=0;ri<randomIndexArray.length;ri++){
            if(randomIndexArray[ri]==random){
                iFound = true;
                break;
            }
        }
        if(!iFound){
          randomIndexArray.push(random);
          break;
        }
      }
    }
  }

  console.log(randomIndexArray.toString());
*/
  var random = Math.floor(Math.random() * fullArray.length); //rand 0-15

  if(randomIndexArray.length==0){
      randomIndexArray.push(random);
  }
  for(const i in fullArray){ //runs from  0 => 15  (16 Times)
    while(randomIndexArray.includes(random)){
      random = Math.floor(Math.random() * fullArray.length);
    }
      randomIndexArray.push(random);
    //shuffledArray.push(fullArray[randomIndexArray[i]]);

  }

  console.log(randomIndexArray);
  console.log("PUFFLES: "+fullArray+"\n"+randomIndexArray+"\n"+shuffledArray);

/*

 fullArray = [red,green,monkey,hippo]

 randomIndexArray = [2,1,3,0]

 shuffledArray = [monkey,green,hippo,red]

*/


  categoryArray.push(resp1.shift(),resp2.shift(),resp3.shift(),resp0.shift());

  compareArray.push(resp0,resp1,resp2,resp3);


  var dataSelected = $('.block#14').attr('data-selected');
  console.log(dataSelected);
  
  $(".block").click(function(){
    if(selectedArray.length<4&&($(this).attr("data-selected"))=="false"){
      selectedArray.push($(this).text());
      console.log(selectedArray.length+"++");
      $(this).attr("data-selected", "true");
      $(this).css('background-color', '#93F6FA');

      console.log("adding " +$(this).text()+":"+selectedArray);

    }else
    if(($(this).attr("data-selected"))=="true"){
      for(var i=0;i<selectedArray.length;i++){
        if($(this).text() == selectedArray[i]){
          selectedArray.splice(i,1);
          console.log("removing " +$(this).text()+":"+selectedArray);
        }
      }
      console.log(selectedArray.length+"--");
      $(this).attr("data-selected", "false");
      $(this).css('background-color', '');
      var rIndex;
    }      
  });

    $("#submitButton").click(function(){

        var correctCount=0;
        selectedArray.sort();
        //console.log(selectedArray +":"+resp0);
      for(const i in compareArray){
        compareArray[i].sort();
        console.log(compareArray[i]+"\n"+selectedArray);
        for(const j in compareArray[i]){
          if(selectedArray[j]==compareArray[i][j]){
            correctCount++;
          }
        }
        if(correctCount==4){
          isRowCorrect=true;
          console.log("COOL");
          break;
        }//else{console.log("LOSERKYS");}
        correctCount=0;
      }
        
      if(isRowCorrect){

       /* const temp = [];
        for(var u = currrentRow*4 ; u < currrentRow*4+4; u++ ){
          const thisTempCell="#"+u;
          temp.push($(thisTempCell).text());
        }*/




           currrentRow++;
      }
      if(!isRowCorrect){
        
        //alert("YOU SUCK");
        function wrongSelection(myCallBack){
         // alert("inside");
          const hiddenCircle = "#c"+mistakesLeft;
          $(hiddenCircle).fadeOut(function(){
            mistakesLeft--;
            myCallBack();
          });
        }
        function gameOverCheck(){
          if(mistakesLeft==0){
            alert("Game Over! You are Trash!");
          }
        }

        wrongSelection(function(){
          gameOverCheck();
        });
       
      }
    });
 





}); 