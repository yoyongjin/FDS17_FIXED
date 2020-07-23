// Find DOM Node           Dom 노드 찾기.
var items = $('.menu-item');
var btn = $('.btn-menu');
var panel = $('.board section');
var tab = $('.tab');

// 기능 구현
btn.click(function(event){
  event.preventDefault();
  items.removeClass('menu-act');
  $(this).parent().addClass('menu-act');
})
tab.click(function(event){
  event.preventDefault();
  // $(this).parent().parent().siblings().removeClass('tab-act'); 밑에꺼랑 같은말
  panel.removeClass('tab-act');
  $(this).parent().parent().addClass('tab-act');
  // parents()라고 하면 계속 위의 부모를 찾음
  
});