/* global $ */
console.log('Javascript ready to go...')

$('.complete').on('click', function (e) {
  var $input = $(this).siblings('.hide')
  var positionTodo = $input.val()

  $.ajax({
    url: '/todos/' + positionTodo,
    method: 'POST'
  })
  .then(data => {
    window.location.reload()
  })
})

$('.remove').on('click', function (e) {
  var $input = $(this).siblings('.hide')
  var positionTodo = $input.val()
  $.ajax({
    url: '/todos/' + positionTodo,
    method: 'DELETE'
  })
  .then(data => {
    window.location.reload()
  })
})

$('.alldone').on('click', function (e) {
  $.ajax({
    url: '/completed/',
    method: 'POST'
  })
  .then(data => {
    window.location.reload()
  })
})

$('.list-item').on('click', function (e) {
  console.log('item click')
  $(this).hide().siblings('.edit').show().focus()
})

$('.list-item').mouseenter(function (e) {
  $(this).append('<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>')
}).mouseleave(function (e) {
  $('.glyphicon-pencil').remove()
})

$('.edit').keypress(function (e) {
  if (e.which === 13) {
    var $input = $(this).siblings('.hide')
    var positionTodo = $input.val()
    var data = {title: $(this).val()}
    $.ajax({
      url: '/todos/' + positionTodo,
      method: 'PUT',
      data
    })
    .then(data => {
      window.location.reload()
    })
  }
})

$('.removeComp').on('click', function (e) {
  var $input = $(this).siblings('.hide')
  var positionTodo = $input.val()
  $.ajax({
    url: '/completed/' + positionTodo,
    method: 'DELETE'
  })
  .then(data => {
    window.location.reload()
  })
})
