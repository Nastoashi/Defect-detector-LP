const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const tutorial1 = document.getElementById('tutorial1');
const tutorial2 = document.getElementById('tutorial2');
const tutorial3 = document.getElementById('tutorial3');


tab1.onclick = function () {
    tab1.classList.add('filled');
    tab2.classList.remove('filled');
    tab3.classList.remove('filled');
    tutorial1.style.display = 'block';
    tutorial2.style.display = 'none';
    tutorial3.style.display = 'none';
    
}
tab2.onclick = function () {
    tab2.classList.add('filled');
    tab1.classList.remove('filled');
    tab3.classList.remove('filled');
    tutorial1.style.display = 'none';
    tutorial2.style.display = 'block';
    tutorial3.style.display = 'none';
}
tab3.onclick = function () {
    tab3.classList.add('filled');
    tab2.classList.remove('filled');
    tab1.classList.remove('filled');
    tutorial1.style.display = 'none';
    tutorial2.style.display = 'none';
    tutorial3.style.display = 'block';
}