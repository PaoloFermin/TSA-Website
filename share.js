var articletitle = $("#articlehtmltitle");

$(document).ready(function(){
  $('#share').click(function(){
    $('#share-menu-container').fadeIn();
    $( '.mdl-layout__drawer, .mdl-layout__obfuscator' ).removeClass( 'is-visible' );
    $("#articleshare").html(articletitle[0].outerHTML);
  });

  $('#share-menu-container').click(function() {
    $('#share-menu-container').fadeOut();
    $( '.mdl-layout__drawer, .mdl-layout__obfuscator' ).addClass( 'is-visible' );
  })
});
