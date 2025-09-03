// Año dinámico en footer
document.addEventListener('DOMContentLoaded', function(){
  var y = document.getElementById('y');
  if(y) y.textContent = new Date().getFullYear();
});

// Toggle menú móvil accesible
(function(){
  const btn = document.querySelector('.nav__toggle');
  const links = document.getElementById('navlinks');
  if(!btn || !links) return;
  btn.addEventListener('click', ()=>{
    const open = links.classList.toggle('nav__open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // Cierra el menú al navegar
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    links.classList.remove('nav__open');
    btn.setAttribute('aria-expanded','false');
  }));
})();
