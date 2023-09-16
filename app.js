$(document).ready(function(){

    var resp0, resp1, resp2, resp3;
    var category1, category2, category3, category4;
    var fullArray = [];
    var categoryArray = [];
    var selectedArray = [];
    var compareArray = [];
    var indexArray = [];

  resp0 = ["animals","dog","cat","bird","mouse"];
  resp1 = ["colors","red","green","blue","yellow"];
  resp2 = ["fruits","apple","pear","banana","orange"];
  resp3 = ["vegetables","carrot","corn","potato","lettuce"];

  categoryArray.push(resp1.shift(),resp2.shift(),resp3.shift(),resp0.shift());

  compareArray.push(resp0,resp1,resp2,resp3);

  //SHUFFLE!!!

  var dataSelected = $('.block#14').attr('data-selected');
  console.log(dataSelected);
  
  $(".block").click(function(){
    if(selectedArray.length<4&&($(this).attr("data-selected"))=="false"){
      selectedArray.push($(this).text());
      indexArray.push($(this).attr("id"));
      console.log(selectedArray.length+"++");
      $(this).attr("data-selected", "true");
      $(this).css('background-color', 'blue');

      console.log("adding " +$(this).text()+":"+selectedArray);

    }else
    if(($(this).attr("data-selected"))=="true"){
      for(var i=0;i<selectedArray.length;i++){
        if($(this).text() == selectedArray[i]){
          selectedArray.splice(i,1);
          console.log("removing " +$(this).text()+":"+selectedArray);
        }
        if($(this).attr("id") == indexArray[i]){
          indexArray.splice(i,1);
          console.log("removing " +$(this).attr("id")+":"+indexArray);
        }
      }
      console.log(selectedArray.length+"--");
      $(this).attr("data-selected", "false");
      $(this).css('background-color', '');
      var rIndex;
    }      
  });

    $("#submitButton").click(function(){

      console.log(selectedArray+":"+indexArray);
        var correctCount=0;
        var isRowCorrect=false;
        selectedArray.sort();
        //console.log(selectedArray +":"+resp0);
      for(const i in compareArray){
        compareArray[i].sort();
        console.log(compareArray);
        for(const j in compareArray[i]){
          if(selectedArray[j]==compareArray[i][j]){
            correctCount++;
          }
        }
        if(correctCount==4){
          isRowCorrect=true;
          break;
          //console.log("COOL");
        //}else{console.log("NOT COOL");
        }
        correctCount=0;
      }
        
      console.log(isRowCorrect);
      var dHTML = `<td></td>`
      $("#row1").html();
      
    });
 


}); 