// Make sure btn-options-menu stays colored as long as the options menu is hovered
$( document ).ready(function() {
  $('.options-wrapper').hover(function(){
    $('.options-menu-button').addClass('btn-active')},
  function(){
      $('.options-menu-button').removeClass('btn-active')
  });
});

// Modal settings
$.modal.defaults = {
  overlay: "#fff",        // Overlay color
  opacity: 0.80,          // Overlay opacity
  zIndex: 3,              // Overlay z-index.
  escapeClose: true,      // Allows the user to close the modal by pressing `ESC`
  clickClose: true,       // Allows the user to close the modal by clicking the overlay
  closeText: '<i class="fa fa-times fa-lg"></i>',     // Text content for the close <a> tag.
  closeClass: '',         // Add additional class(es) to the close <a> tag.
  showClose: true,        // Shows a (X) icon/link in the top-right corner
  modalClass: "modal",    // CSS class added to the element being displayed in the modal.
  spinnerHtml: null,      // HTML appended to the default spinner during AJAX requests.
  showSpinner: true,      // Enable/disable the default spinner during AJAX requests.
  fadeDuration: 200,     // Number of milliseconds the fade transition takes (null means no transition)
  fadeDelay: 1.0          // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
};

// Parallax

// $(function(){
//   $.stellar({
//     horizontalScrolling: false,
//     verticalOffset: 40
//   });
// });