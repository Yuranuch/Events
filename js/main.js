$(document).ready(function () {
//-----slick-slider  
$(document).on('ready', function() {
  $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        dots: true,
        infinite: true,
        arrows: false,
        //autoplay: true
      });
});
//------stiky-header
 $("#top-menu li a, .single-link a").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top -70;
    $("#top-menu li a").removeClass('active');
    $(this).addClass('active');
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
//-----same-box-height    
$('.l1-bottom').each(function(){
  var highestBox = 0;
  $('.l1-bottom-ins', this).each(function(){
    if($(this).height() > highestBox) {
      highestBox = $(this).height();
    }
  });
  $('.l1-bottom-ins',this).height(highestBox);
});
//--------lada-loader------
/*var buttons = document.querySelectorAll( '.ladda-button' );

Array.prototype.slice.call( buttons ).forEach( function( button ) {

  var resetTimeout;

  button.addEventListener( 'click', function() {

    if( typeof button.getAttribute( 'data-loading' ) === 'string' ) {
      button.removeAttribute( 'data-loading' );
    }
    else {
      button.setAttribute( 'data-loading', '' );
    }

    clearTimeout( resetTimeout );
    resetTimeout = setTimeout( function() {
      button.removeAttribute( 'data-loading' );     
    }, 2000 );

  }, false );

} );
*/
//--------sweet-alert-init
/*
$('.alert1').click(function(){
  swal({
    title: "Good job!",
    text: "You clicked the button!",
    type: "success",
    confirmButtonColor: "#34d2d1",
  });
});

$('.alert2').click(function () {
  swal({
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#34d2d1",
    confirmButtonText: "Yes, delete it!",
    closeOnConfirm: false
  }, function () {
    swal("Deleted!", "Your imaginary file has been deleted.", "success");
  });
});
*/
//.error - розовая рамка (для input[type='text'],textarea)
//-------modal
$(".popup-link").click(function()
{
 $('#mask').fadeIn(300);
 var iddiv = $(this).attr("iddiv");
 $('#'+iddiv).addClass('active');
 $('#mask').attr('opendiv',iddiv);
 return false;
});

$('#mask, .box-close, #top-menu li a').click(function()
{
 var iddiv = $("#mask").attr('opendiv');
 $('#mask').fadeOut(300);
 $('#'+iddiv).removeClass('active');
});
$('.custom-sel').selectize();
});
