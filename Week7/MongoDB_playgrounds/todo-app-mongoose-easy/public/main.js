/* global $ */
console.log('Javascript ready to go...')

$('.complete').on('click', function (e) {
  var $input = $(this).siblings('.todoId')
  var todoId = $input.val()
  $.ajax({
    url: '/task/' + todoId,
    method: 'PUT'
  })
  .then(data => {
    window.location.reload()
  })
})

$('.remove').on('click', function (e) {
  var $input = $(this).siblings('.todoId')
  var todoId = $input.val()
  console.log(todoId)
  $.ajax({
    url: `/task/${todoId}`,
    method: 'DELETE'
  })
  .then(window.location.reload())
})

$('.alldone').on('click', function (e) {
  $.ajax({
    url: '/tasks/',
    method: 'PUT'
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
    var $input = $(this).siblings('.todoId')
    var todoId = $input.val()
    var newTitle = $(this).val()
    $.ajax({
      url: `/task/${todoId}/${newTitle}`,
      method: 'POST'
    })
    .then(data => {
      window.location.reload()
    })
  }
})
