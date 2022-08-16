$('.mobile__toogle').click( e=> {
  showNavList()
})

//function turn visible navbar on mobile
function showNavList () {
  $('.nav__list').css('visibility', 'visible');
  $('#hamb').css('display', 'none');
  $('#close').css('display', 'block');
}

//after open nav any click on link hide navbar and change to hamburguer svg
$('.nav__list li a').click(e => {
  $('.nav__list').css('visibility', 'hidden');
  $('#hamb').css('display', 'block');
  $('#close').css('display', 'none');
})

