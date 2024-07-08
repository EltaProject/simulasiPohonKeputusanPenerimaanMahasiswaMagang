const start = document.getElementById('start');
const quest1 = document.getElementById('quest-1');
const quest2 = document.getElementById('quest-2');
const quest3 = document.getElementById('quest-3');
const quest4 = document.getElementById('quest-4');
const terima = document.getElementById('Terima');
const tolak = document.getElementById('Tolak');

quest1.classList.add('hidden');
quest2.classList.add('hidden');
quest3.classList.add('hidden');
quest4.classList.add('hidden');
tolak.classList.add('hidden');
terima.classList.add('hidden');

const startBtn = document.getElementById('startButton');
startBtn.addEventListener('click', (e) => {
    start.classList.add('hidden');
    quest1.classList.remove('hidden');
    quest1.classList.add('show');
});

const yesButton = document.querySelectorAll('.Button.yes');
for (let i = 0; i < yesButton.length; i++) {
    yesButton[i].addEventListener('click', () => {
        const x = yesButton[i].parentNode.parentNode.parentNode.id;
        if (`${x}` === `${quest1.id}`) {
            console.log('quest 1 disembunyikan');
            quest1.classList.remove('show');
            quest1.classList.add('hidden');
            quest2.classList.remove('hidden');
            quest2.classList.add('show');
        } else if (`${x}` === `${quest2.id}`) {
            console.log('quest 1 disembunyikan');
            quest2.classList.remove('show');
            quest2.classList.add('hidden');
            quest3.classList.remove('hidden');
            quest3.classList.add('show');
        } else if (`${x}` === `${quest3.id}`) {
            console.log('quest 1 disembunyikan');
            quest3.classList.remove('show');
            quest3.classList.add('hidden');
            quest4.classList.remove('hidden');
            quest4.classList.add('show');
        } else if (`${x}` === `${quest4.id}`) {
            console.log('quest 1 disembunyikan');
            quest4.classList.remove('show');
            quest4.classList.add('hidden');
            terima.classList.remove('hidden');
            terima.classList.add('show');
        }
    });
}

const noButton = document.querySelectorAll('.Button.no');
for (let i = 0; i < noButton.length; i++) {
    noButton[i].addEventListener('click', () => {
        const x = noButton[i].parentNode.parentNode.parentNode.id;
        document.getElementById(x).classList.remove('show');
        document.getElementById(x).classList.add('hidden');
        tolak.classList.add('show');
    });
}
const Ok = document.querySelectorAll('.Button.ok');
for (let i = 0; i < Ok.length; i++) {
    Ok[i].addEventListener('click', () => {
        const x = Ok[i].parentNode.parentNode.parentNode.id;
        document.getElementById(x).classList.remove('show');
        document.getElementById(x).classList.add('hidden');
        alert('Sesi Pendaftaran Telah Selesai!!!')
    })
}