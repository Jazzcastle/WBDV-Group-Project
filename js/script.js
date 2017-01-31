var opened = false;

$('.hamburger-container').click(function(){
  if(opened == false){
  $('.mobile-menu').removeClass('close-menu').addClass('open-menu');
  opened = true;
}else{
    $('.mobile-menu').removeClass('open-menu').addClass('close-menu');
    opened = false;
}
});
