$(document).on("click","#verificar",function(){
  var nome = $("#nome").val();
  var idade = $("#idade").val();

  $("img").css("height","25vh");

  if(idade >= 18){
    $("#imagem").attr("src", "https://st2.depositphotos.com/2654883/6376/v/600/depositphotos_63765695-stock-illustration-man-in-jail-holding-bars.jpg");

    if(nome == ""){
      $("#info").html("<h3>Você já pode ser preso!</h3>");
    }
    else{
      $("#info").html("<h3>"+nome+", já pode ser preso!</h3>");
    }
  }
  
  else{
    $("#imagem").attr("src", "https://i.pinimg.com/736x/8a/dd/a6/8adda66ab18fe2efbf063ed4b7169e27.jpg");

    if(nome == ""){
      $("#info").html("<h3>Você é criança ainda!</h3>");
    }
    else{
      $("#info").html("<h3>"+nome+" é criança ainda!</h3>");
    }
  }
});

