//  Far apparire il menu al click 

$(document).ready( function () {

  var dropLink = $('.with-dropdown > a');
  var dropMenu = $('.with-dropdown > .menu-dropdown')

  dropLink.click(function () {

    var activeMenu = $(this).next('.menu-dropdown');

    dropMenu.not(activeMenu).hide();
    activeMenu.toggle();

  })

});
