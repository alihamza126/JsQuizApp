const question=[
    {
        'que':"What does IUB stands for ?",
        'a':"islamia university bhawalpur",
        'b':"Government university",
        'c':" Comsat University",
        'd': "Khawaja fareed university",

        'correct':"a"

    },
    {
        'que':"Pakistan independence day is ?",
        'a':"1957",
        'b':"1948",
        'c':"1941",
        'd': "1947",

        'correct':"d"

    },
    {
        'que':"Who is the founder of pakistan",
        'a':"Alama-iqbal",
        'b':"Laqit Ali Khan",
        'c':"Quaid-e-Azam",
        'd': "Chudary Nawaz",

        'correct':"c"

    },
    {
        'que':"Who is the founder of pakistan",
        'a':"Alama-iqbal",
        'b':"Ali Khan",
        'c':"Quaid",
        'd': "Chudary",

        'correct':"c"

    }
]

    let index=0;
    const length=question.length;
    let  right=0,
    wrong =0;

    const quebox=document.getElementById("heading");
    const inputquestion=document.querySelectorAll(".options");
        console.log(inputquestion[0].nextElementSibling)


        
  function loadquestion(){
      reset();
      let qindex=index;
      if(index==length)
      {
        return endquiz();
      }
        const data=question[index];
        quebox.innerText=`${++qindex}) ${data.que}`;

        inputquestion[0].nextElementSibling.innerText=data.a;
        inputquestion[1].nextElementSibling.innerText=data.b;
        inputquestion[2].nextElementSibling.innerText=data.c;
        inputquestion[3].nextElementSibling.innerText=data.d;
    
}
function submitquiz(){
            const data=question[index];
            let answer=getans();
           // console.log(data.correct,answer)
            if(data.correct==answer)
            {
                right++
            }
            else{
                wrong++
            }
            index++;
            loadquestion();
            return;
}

 function endquiz(){

    
      if(length==right){
        document.getElementById("box").innerHTML=` 
        <h2> Thank you playing Quiz </h2>
        <h2> Very Good Attempt <img src="assets/icon_baba.ico" alt="">
         <br> ${right} Out of ${length} </h3>
        `
      }
      else if (length==wrong){
        document.getElementById("box").innerHTML=` 
        <h2> Thank you playing Quiz </h2>
        <h2> Very Bad <img src="assets/icon_sad.gif" alt="">
         <br> ${right} Out of ${length} </h3>
        `
      }
      else if(right>= Math.floor(length/2))
            {
                document.getElementById("box").innerHTML=` 
                <h2> Thank you playing Quiz </h2>
                <h2> Satisfied  <br> ${right} Out of ${length} </h3>
                `    
            }
            else if(right<Math.floor(length/2))
                {
                    document.getElementById("box").innerHTML=` 
                    <h2> Thank you playing Quiz </h2>
                    <h2> Satisfied <img src="assets/icon_baba.ico" alt=""> <br> ${right} Out of ${length} </h3>
                    `;
                        
                }


 }

 const getans =()=>{
        let anss;
        inputquestion.forEach(input => {
            if(input.checked){
                anss=input.value;
            }

        })
        return anss;
 }

 let reset =()=>{
    inputquestion.forEach(input => {
        input.checked=false;
        
    });
 }
 
loadquestion();