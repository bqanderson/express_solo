$(function(){
  getBalance()

function getBalance(){
  $.get('/balance').then(function(data){
  $('.showBalance').append('<p class="bold">Account Balance: \n' + data + '</p>');

  });
}


  $('.getBalance').on('click', function(){
    $('.showBalance').empty();
    getBalance();
  })

});
