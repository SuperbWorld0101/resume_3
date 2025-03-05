var phone = document.getElementById('phone');
var email = document.getElementById('email');
var phoneinfo = "+86 13280489639";
var emailinfo = "xsun53@hawk.iit.edu;13280489639@163.com;664848796@qq.com";
phone.addEventListener("click",function(){
  alert(phoneinfo);
});

email.addEventListener("click",function(){
  alert(emailinfo);
});

var sub = document.getElementById('submit');
sub.addEventListener('click',function(){
  alert("Thank you again!");
});



$('[data-rating] .star').on('click', function() {
  var selectedCssClass = 'selected';
  var $this = $(this);
  $this.siblings('.' + selectedCssClass).removeClass(selectedCssClass);
  $this
    .addClass(selectedCssClass)
    .parent().addClass('is-voted');
});

