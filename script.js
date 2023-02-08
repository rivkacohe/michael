
const guss = document.getElementById('guss');
guss.addEventListener('input', updateSentence);


function updateSentence(e) {
    const alphabeit = document.querySelectorAll('span')
    let succses = false;

    alphabeit.forEach((a) => {
        if (a.textContent === e.target.value) {
            a.classList.add('show');
            succses = true;
            return;
        } 
    })

    if (succses) {
        guss.className = 'success'
    } else {
        guss.className = 'fail'
    }
    setTimeout(() => {
        e.target.value = "";
    }, 2000)
}

