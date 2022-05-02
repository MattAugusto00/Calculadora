function insert(numero){
    var res=document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML=res+numero;
  }
  function clean(){
    document.getElementById('resultado').innerHTML="";
  }
  function back(){
    var resultado=document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML=resultado.substring(0, resultado.length -1);
  }
  function igual(){
    var resultado=document.getElementById('resultado').innerHTML;
    if(resultado){
      document.getElementById('resultado').innerHTML=eval(resultado);
    }else{
      document.getElementById('resultado').innerHTML="";
    }
  }