
/////// Navbar Shrink Landing Page///////
window.onscroll= function(){
  if(this.scrollY > 90){
      document.querySelector('.navbar').classList.add('navbar-shrink')
  }else{
      document.querySelector('.navbar').classList.remove('navbar-shrink')
  }
}
////// Navbar Collapse //////

$('.nav-link').on("click" , function(){
  $('.navbar-collapse').collapse("hide");
});