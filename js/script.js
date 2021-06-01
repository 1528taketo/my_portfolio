$(function(){
    const ham = document.getElementById('ham');
    ham.addEventListener('click', function() {
	    ham.classList.toggle('clicked');
    });
});

$(function(){
    const ham = document.getElementById('ham');
    const menu_wrapper = document.getElementById('menu_wrapper');
    ham.addEventListener('click', function() {
        ham.classList.toggle('click');
	    menu_wrapper.classList.toggle('click');
    });
});

$(function(){
    $('#close-1').click(function(){
      $('#ham').toggleClass('clicked');
      $('#menu_wrapper').toggleClass('click');
    });
});

$(function(){
    $('#close-2').click(function(){
      $('#ham').toggleClass('clicked');
      $('#menu_wrapper').toggleClass('click');
    });
});

$(function(){
    $('#close-3').click(function(){
      $('#ham').toggleClass('clicked');
      $('#menu_wrapper').toggleClass('click');
    });
});

$(function(){
    $('#close-4').click(function(){
      $('#ham').toggleClass('clicked');
      $('#menu_wrapper').toggleClass('click');
    });
});

$(function(){
    $('#close-5').click(function(){
      $('#ham').toggleClass('clicked');
      $('#menu_wrapper').toggleClass('click');
    });
});

$(function(){
  new WOW().init();
});

