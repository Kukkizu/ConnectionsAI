# ConnectionsAI

c1 = animals
c2 = colors
c3 = fruits
c4 = vegetables

 [cat,dog,bird,mouse,red,blue,green,yellow,apple,pear,banana,orange,broccoli,lettuce,potato,corn]


shuffleArray =
 [cat,dog,red,blue,green,yellow,apple,pear,mouse,banana,orange,broccoli,bird,lettuce,potato,corn]


selectedArray: dog,cat,bird,mouse 
               [0 , 1 , 8 , 12]

//FULL ARRAY [[dog,animal],[blue,color],[cat,animal],[green,color]]

for(i:selectedArray){
    for(j:shuffleArray){
        if(i.category)
    }
}     


/*
$.ajax({
    url: 'https://api.openai.com/v1/completions',
    crossDomain: true,
    method: 'POST',
    headers: {
      'Authorization': 'Bearer KEY'
    },
    contentType: 'application/json',
    // data: '{\n    "model": "text-davinci-003",\n    "prompt": "Say this is a test",\n    "max_tokens": 7,\n    "temperature": 0\n  }',
    data: JSON.stringify({
      'model': 'text-davinci-003',
      'prompt': '4 random words in a random category (format: category, word, word, word, word)',
      'max_tokens': 25,
      'temperature': 0.9,
      "frequency_penalty": 0.5,
      "presence_penalty": 0,
    })
  }).done(function(response) {
    try {
        console.log(response.choices[0].text);

         if(resp1!=[]){
            resp1=(response.choices[0].text).split(",");
        }else if(resp2!=[]){
            resp2=(response.choices[0].text).split(",");
        }else if(resp3!=[]){
            resp3=(response.choices[0].text).split(",");
        }else if(resp0!=[]){
            resp0=(response.choices[0].text).split(",");
        } 


        //$("#test").text(response.choices[0].text);
    } catch (error) {
        console.error(error);
    }
  });
*/
  //categoryArray.push(resp1.shift(),resp2.shift(),resp3.shift(),resp0.shift());
   category1 = resp1.shift(); 
  category2 = resp2.shift();
  category3 = resp3.shift();
  category4 = resp4.shift(); 
  /*
  for(var i=0;i<4;i++){
    fullArray.push([resp0[i],categoryArray[0]]);
  }
  for(var i=0;i<4;i++){
    fullArray.push([resp1[i],categoryArray[1]]);
  }
  for(var i=0;i<4;i++){
    fullArray.push([resp2[i],categoryArray[2]]);
  }
  for(var i=0;i<4;i++){
    fullArray.push([resp3[i],categoryArray[3]]);
  }
  */

   for(var i=0;i<4;i++){
    fullArray.push([resp0[i],categoryArray[0]]);
  }
  for(var i=0;i<4;i++){
    fullArray.push([resp1[i],categoryArray[1]]);
  }
  for(var i=0;i<4;i++){
    fullArray.push([resp2[i],categoryArray[2]]);
  }
  for(var i=0;i<4;i++){
    fullArray.push([resp3[i],categoryArray[3]]);
  }
