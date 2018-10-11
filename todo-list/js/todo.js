'use strict';
const todoList = document.querySelectorAll('.todo-list');
const done = document.querySelector('.done');
const undone = document.querySelector('.undone');
const works = document.querySelectorAll('input');

function checkedLabel(){
    
    if (this.hasAttribute('checked')) {
			undone.appendChild(this.parentElement);
			this.removeAttribute('checked');
		} else {
			done.appendChild(this.parentElement);
			this.setAttribute('checked', true);
		}
}

Array.from(works).forEach(work => work.addEventListener('click', checkedLabel));

