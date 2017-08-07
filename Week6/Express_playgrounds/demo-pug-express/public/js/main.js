/* global $ */
console.log('Javascript ready to go...')

$('.remove').on('click', function (e) {
  var $input = $(this).siblings('input')
  var positionCountry = $input.val()

  $.ajax({
    url: '/countries/' + positionCountry,
    method: 'DELETE'
  })
  .then(data => {
    console.log(data)
    window.location.reload()
  })
})
