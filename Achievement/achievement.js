document.addEventListener('DOMContentLoaded', () => {    // s'execute si tout est bien charger
    const validation = document.querySelectorAll('.enter_code');  
    const form = document.querySelector('.form');
    const currentTaskInput = document.getElementById('current_task');

    const hidden = document.querySelectorAll('.hidden');          
   
   
   

    // a chaque fois quand on click sur enregister, il va afficher une pop-up de confirmation
    validation.forEach(val => {
        val.addEventListener('click', () => {
            if (val.classList.contains('bg')) {
                // Si c'est un bouton "Enter secret code"
                const taskId = val.getAttribute('data-task');
                console.log('Task ID:', taskId); // Debug
                if (currentTaskInput) {
                    currentTaskInput.value = taskId;
                    console.log('Current task value:', currentTaskInput.value); // Debug
                }
                form.classList.add('pop-up');
            } else {
                // Si c'est le bouton "Quitter"
                form.classList.remove('pop-up');
            }
        });
    });

});

