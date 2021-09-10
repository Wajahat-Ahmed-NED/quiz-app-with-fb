function check(){
    var score=0
    var ans1=document.getElementById('q14');
    var ans2=document.getElementById('q22');
    var ans3=document.getElementById('q33');
    if(ans1.checked===true){
        score++;
        alert('Q1 is correct')
    }
    else{
        alert('Q1 is wrong')
    }


    if(ans2.checked===true){
        score++;
        alert('Q2 is correct')
    }
    else{
        alert('Q2 is wrong')
    }


    if(ans3.checked===true){
        score++;
        alert('Q3 is correct')
    }
    else{
        alert('Q3 is wrong')
    }


    alert('Your score is '+score)
    if(score<2){
        alert('You are failed')
    }
    else{
        alert('You are passed')
    }
}