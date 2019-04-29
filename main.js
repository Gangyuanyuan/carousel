var allButtons = $('#button > button') // 获取所有buttons
for (let i = 0; i < allButtons.length; i++) { // 监听所有buttons的点击事件
  $(allButtons[i]).on('click', function(x) {
    var index = $(x.currentTarget).index()
    var p = index * -300
    $('#images').css({ // 点击按钮时图片左移
      transform: 'translateX(' + p + 'px)'
    })
    n = index
    allButtons.eq(n) // 点击按钮时按钮变为红色
      .addClass('red')
      .siblings('.red').removeClass('red')
  })
}

// 自动播放功能
var n = 0; 
var size = allButtons.length // 图片张数
allButtons.eq(n % size).trigger('click') // 播放图片
  .addClass('red')
  .siblings('.red').removeClass('red')
var timerId = setInterval(function() { // 设置闹钟
  n += 1
  allButtons.eq(n % size).trigger('click') // 触发按钮点击事件
    .addClass('red')
    .siblings('.red').removeClass('red')
}, 3000)


$('.window').on('mouseenter', function() { // 鼠标移入窗口停止播放
  window.clearInterval(timerId)
})
$('.window').on('mouseleave', function() { // 鼠标离开窗口继续播放
  timerId = setInterval(function() {
    n += 1
    allButtons.eq(n % size).trigger('click')
      .addClass('red')
      .siblings('.red').removeClass('red')
  }, 3000)
})