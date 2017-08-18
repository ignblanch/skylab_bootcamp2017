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
  let selectedTasks = []

  $('input:checkbox[name=selectTask]:checked').each(function () {
    selectedTasks.push($(this).val())
  })
  var tasks = selectedTasks.join(',')

  $.ajax({
    url: '/tasks/' + tasks,
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

// $('#selectAll').on('click', function () {
//   console.log('click')
//   $('.selectTask').attr('checked', true)
// })

// $('#selectAll').change(function () {  // "select all" change
//   var status = this.checked // "select all" checked status
//   $('.selectTask').each(function () { // iterate all listed checkbox items
//     this.checked = status // change ".checkbox" checked status
//   })
// })

// $('.selectTask').change(function () { // ".checkbox" change
//     // uncheck "select all", if one of the listed checkbox item is unchecked
//   if (this.checked === false) { // if this item is unchecked
//     $('#selectAll')[0].checked = false // change "select all" checked status to false
//   }

//     // check "select all" if all checkbox items are checked
//   if ($('.selectAll:checked').length === $('.selectTask').length) {
//     $('#selectAll')[0].checked = true // change "select all" checked status to true
//   }
// })
