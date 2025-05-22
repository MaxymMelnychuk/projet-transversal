document.addEventListener('DOMContentLoaded', () => {    // s'execute si tout est bien charger
    const validation = document.querySelectorAll('.enter_code');  

    const hidden = document.querySelectorAll('.hidden');          
   
   
   

    // a chaque fois quand on click sur enregister, il va afficher une pop-up de confirmation
    validation.forEach(val => {
        val.addEventListener('click', () => {
            hidden.forEach(hid => {
                hid.classList.toggle('pop-up');
            });
        });
    });

});
