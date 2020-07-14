
const $mouth = $('.mouth');
const $sound = $('#sound').get(0);

$mouth.on('mouseover', () => {
  $sound.play();

})