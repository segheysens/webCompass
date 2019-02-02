Compass.watch(function (heading) {
  $('.degrees').text(heading);
  $('.compass').css('transform', 'rotate(' + (-heading) + 'deg)');
});

/*
// Instructions for Android users
Compass.needGPS(function () {
  $('.go-outside-message').show();          // Step 1: we need GPS signal
}).needMove(function () {
  $('.go-outside-message').hide()
  $('.move-and-hold-ahead-message').show(); // Step 2: user must go forward
}).init(function () {
  $('.move-and-hold-ahead-message').hide(); // GPS hack is enabled
});
*/
