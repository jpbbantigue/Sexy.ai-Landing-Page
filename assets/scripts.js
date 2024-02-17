var $grid = $("#community-showcase").isotope({
  initLayout: false,
  percentPosition: true,
  filter: ':not(.nsfw)',
  sortBy : 'random',
  hiddenStyle: {
    opacity: '0!important'
  },
  visibleStyle: {
    opacity: '1!important'
  }
});

$(document).ready(function(){
  $grid.isotope();

  var ofAge = false;
  $("#nsfwToggle").click(function(e){
    e.preventDefault();
    var nsfwModal = new bootstrap.Modal(document.getElementById('nsfwModal'), {
      keyboard: false
    });
    nsfwModal.toggle();
  });

  $("#ofAge").click(function(){
    ofAge = true;
    $("#nsfwToggle").prop('checked',true);

    $("#image-gens").attr('src','images/image-gens-a.jpg');
    $("#video-gens").show();
    $("#personal-gallery").attr('src','images/gallery-a.jpg');
    $(".nsfw").css('opacity',1);
    $grid.isotope({ filter: '*' });
  });

  $("#notOfAge").click(function(){
    ofAge = false;
    $("#nsfwToggle").prop('checked',false);

    $("#image-gens").attr('src','images/image-gens-b.jpg');
    $("#video-gens").hide();
    $("#personal-gallery").attr('src','images/gallery-b.jpg');
    $(".nsfw").css('opacity',0);
    $grid.isotope({ filter: ':not(.nsfw)' }); 
  });
});