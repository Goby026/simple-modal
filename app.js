const toggleModal = ()=>{
	document.querySelector('.modal')
	.classList.toggle('modal--hidden');
}

document.querySelector('#showModal')
.addEventListener('click', toggleModal);

document.querySelector('#closeModal')
.addEventListener('click', toggleModal);

document.querySelector('#form')
.addEventListener('submit', (e)=>{
	e.preventDefault();
	toggleModal();
	console.log('Evento', e);
});