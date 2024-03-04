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

  $("#pricingToggle").click(function(e){
    if ( !$("#pricingToggle").prop('checked') ) {
      $("#pricing label").text("Monthly");
      $("#pricingToggle").prop('checked',false);
      $("#tier1 .pricing-card-title span").text('$14.99');
      $("#tier1 a").attr('href','https://api.sexy.ai/initializeEpochSubscription?sessionID=b8916431-fcf6-42b0-bfc1-e06c4d187096&productID=6vcQ421AmlbN&redirectURL=https%3A%2F%2Fsexy.ai%2Fgenerate');
      $("#tier2 a").attr('href','https://api.sexy.ai/initializeEpochSubscription?sessionID=b8916431-fcf6-42b0-bfc1-e06c4d187096&productID=lPQ7Okzw2ead&redirectURL=https%3A%2F%2Fsexy.ai%2Fgenerate');
      $(".pricing-card-title small").text('/mo');
      
    } else {
      $("#pricing label").text("Annual");
      $("#pricingToggle").prop('checked',true);
      $("#tier1 .pricing-card-title span").text('$129.99');
      $("#tier1 a").attr('href','https://api.sexy.ai/initializeEpochSubscription?sessionID=b8916431-fcf6-42b0-bfc1-e06c4d187096&productID=Hbu5RCfvDYFu&redirectURL=https%3A%2F%2Fsexy.ai%2Fgenerate');
      $("#tier2 .pricing-card-title span").text('$279.99');
      $("#tier2 a").attr('href','https://api.sexy.ai/initializeEpochSubscription?sessionID=b8916431-fcf6-42b0-bfc1-e06c4d187096&productID=XikPabvBcGjH&redirectURL=https%3A%2F%2Fsexy.ai%2Fgenerate');
      $(".pricing-card-title small").text('/yr');
      
    }
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