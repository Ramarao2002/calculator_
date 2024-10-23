function display(val){
    let d=document.getElementById('result');
    d.value=d.value+val;
}

function ClearAll(){
    window.location="index.html"
}

function del(){
    let del=document.getElementById('result');
    del.value=del.value.slice(0,-1);
}

function result(){
    let inp=document.getElementById('result')
    let result=document.getElementById('result').value
    inp.value=eval(result)


    try{
        
        d.value=eval(d.val);
    }
    catch (error){
        d.result="Error";
    }
}