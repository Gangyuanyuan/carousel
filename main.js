var allButtons = $('#button > button')
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function(x) {
    var index = $(x.currentTarget).index()
    var p = index * -300
    $('#images').css({
      transform: 'translateX(' + p + 'px)'
    })
    n = index
    activeButton(allButtons.eq(n))
  })
}

var n = 0; 
var size = allButtons.length
playSlide(n % size)

var timerId = setTimer()

$('.window').on('mouseenter', function() {
  window.clearInterval(timerId)
})
$('.window').on('mouseleave', function() {
  timerId = setTimer()
})


function activeButton($button) { // 激活按钮变为红色
  $button
  .addClass('red')
  .siblings('.red').removeClass('red')
}
function playSlide(index) { // 播放幻灯片
  allButtons.eq(index).trigger('click')
}
function setTimer() { // 设置闹钟
    return setInterval(function() {
      n += 1
      playSlide(n % size)
  }, 3000)
}
