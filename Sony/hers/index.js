$('.btn-binding').click(function(){
  $('section').toggleClass('show');
  $('.btn-binding').html($('.btn-binding').html() == '+ follow' ? '< follow': '+ follow');
  return false;
});


  $('.triger')
    // tile mouse actions
    .on('mouseover', function(){
      var r = $( window ).height() / $( window ).width() * -8;
      $('.tile').children('.photo').css({'transform': 'skewY(' + r + 'deg)'});
            // $(this).children('.photo').css({'transform': 'skewY('+ $(this).attr('data-skewY') +'deg)'});
      $('.tile').children('.photo').css({'transform-origin': '-10% 90%'});
      // $('.shadow').css({'animation-name': 'shadow_move'});

      $('.env').children('.photo').css({'transform': 'scale('+ $('.env').attr('data-scale') +')'});


    })
    .on('mouseout', function(){
      $('.tile').children('.photo').css({'transform': 'skewY(0deg)'});
      $('.env').children('.photo').css({'transform': 'scale(1)'});

    })
    .on('mousemove', function(e){
      // $(this).children('.photo').css({'transform': 'skewY('+ e.pageX / 50 - 20 + 'deg)'});
        $('.env').children('.photo').css({'transform-origin': ((e.pageX - $('.env').offset().left) / $('.env').width()) * 100 + '% ' + ((e.pageY - $('.env').offset().top) / $('.env').height()) * 100 +'%'});
    })

  $('.tile')
    .on('touchstart', function(){
            var m = $( window ).height() / $( window ).width() * -8;

      $(this).children('.photo').css({'transform': 'skewY(' + m + 'deg)'});
      $(this).children('.photo').css({'transform-origin': '10% 90%'});
      $('.env').children('.photo').css({'transform': 'scale('+ $('.env').attr('data-scale') +')'});
    }) 
    .on('touchend', function(){
      $(this).children('.photo').css({'transform': 'skewY(0deg)'});
      $('.env').children('.photo').css({'transform': 'scale(1)'});
    })

    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});

      $('.env')
        // add a photo container
        .append('<div class="photo"></div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $('.env').attr('data-image') +')'});
    })


  // $('.env')
  //   // tile mouse actions
  //   .on('mouseover', function(){
  //     $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
  //   })
  //   .on('mouseout', function(){
  //     $(this).children('.photo').css({'transform': 'scale(1)'});
  //   })
  //   .on('mousemove', function(e){
  //     $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
  //   })
  //   // tiles set up
  //   .each(function(){
  //     $(this)
  //       // add a photo container
  //       .append('<div class="photo"></div>')
  //       // set up a background image for each tile based on data-image attribute
  //       .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
  //   })