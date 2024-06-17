$('.glitch').hover(function(){
    var eLtext = $(this).text(),
        eLchild = $(this).find('.glitch-link');
    console.log(eLchild);
    eLchild.attr('data-content', eLtext);
    eLchild.toggleClass('blur');
    $(this).toggleClass('active');
  });