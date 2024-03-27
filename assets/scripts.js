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

    if ( $("#pricingToggle").prop('checked') == false) {
      $("#pricingToggle + label").text("Monthly");
      $("#pricingToggle").prop('checked',false);
      $("#pricingOption1 + label .display-6").text('$14.99');
      $("#pricingOption1 + label .cc-btn").attr('href','https://api.sexy.ai/initializeEpochSubscription?sessionID=b8916431-fcf6-42b0-bfc1-e06c4d187096&productID=6vcQ421AmlbN&redirectURL=https%3A%2F%2Fsexy.ai%2Fgenerate');
      
      $("#pricingOption2 + label .display-6").text('$29.99');
      $("#pricingOption1 + label .cc-btn").attr('href','https://api.sexy.ai/initializeEpochSubscription?sessionID=b8916431-fcf6-42b0-bfc1-e06c4d187096&productID=lPQ7Okzw2ead&redirectURL=https%3A%2F%2Fsexy.ai%2Fgenerate');

      $(".freq").text('mo');
      $(".text-decoration-line-through, .crypto-btn, .annual").hide();
    } else {
      $("#pricingToggle + label").text("Annual");
      $("#pricingToggle").prop('checked',true);
      $("#pricingOption1 + label .display-6").text('$7.50 ');
      $("#pricingOption1 + label .cc-btn").attr('href','https://api.sexy.ai/initializeEpochSubscription?sessionID=b8916431-fcf6-42b0-bfc1-e06c4d187096&productID=Hbu5RCfvDYFu&redirectURL=https%3A%2F%2Fsexy.ai%2Fgenerate');
      
      $("#pricingOption2 + label .display-6").text('$15.00 ');
      $("#pricingOption1 + label .cc-btn").attr('href','https://api.sexy.ai/initializeEpochSubscription?sessionID=b8916431-fcf6-42b0-bfc1-e06c4d187096&productID=XikPabvBcGjH&redirectURL=https%3A%2F%2Fsexy.ai%2Fgenerate');

      $(".freq").text('mo');
      $(".text-decoration-line-through, .crypto-btn, .annual").show();
    }
  });

  $(".form-check-input").on('change',function(){
    if (this.id == 'pricingOption1') {
      $(".annual-cost").text("90.00");
      $(".tier2").hide();
    } else {
      $(".annual-cost").text("180.00");
      $(".tier2").show();
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