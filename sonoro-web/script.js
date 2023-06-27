


//carga al iniciar la pagina.
document.addEventListener('DOMContentLoaded', function() {
    var changeLanguageLink = document.getElementById('changeLanguage');
    var navHomeLink = document.getElementById('navHome');
    var navSearchLink = document.getElementById('navSearch');
    var navAboutMeLink = document.getElementById('navAboutMe');
  
    changeLanguageLink.addEventListener('click', function(e) {
      e.preventDefault();
      var currentLanguage = changeLanguageLink.textContent.trim();
      if (currentLanguage === 'Español') {
        changeLanguageLink.innerHTML = '<i class="fa-solid fa-globe"></i> English';
        navHomeLink.textContent = 'Home';
        navSearchLink.textContent = 'Search';
        navAboutMeLink.textContent = 'About Us';
      } else if (currentLanguage === 'English') {
        changeLanguageLink.innerHTML = '<i class="fa-solid fa-globe"></i> Español';
        navHomeLink.textContent = 'Inicio';
        navSearchLink.textContent = 'Buscar';
        navAboutMeLink.textContent = 'Conócenos';
      }
    });
  });
  