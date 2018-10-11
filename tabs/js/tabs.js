'use strict';

const content = document.querySelector('.tabs-content').children;
const tabs = document.querySelector('.tabs-nav');
const child = tabs.children;
const firstTab = tabs.firstElementChild;

Array.from(content).forEach((elem, index) => {
    const cloneDemo = firstTab.cloneNode(true);
    const tab = tabs.appendChild(cloneDemo);
    tab.firstElementChild.textContent = elem.dataset.tabTitle;
    tab.firstElementChild.classList.add(elem.dataset.tabIcon);
    if (index > 0) {
        elem.classList.add('hidden');
    }
});

tabs.removeChild(firstTab);
tabs.firstElementChild.classList.add('ui-tabs-active');

Array.from(child).forEach(tab => tab.addEventListener('click', activeTab));

function activeTab(event) {
    const currentTab = document.querySelector('.ui-tabs-active');
    currentTab.classList.remove('ui-tabs-active');
    event.currentTarget.classList.add('ui-tabs-active');

    Array.from(content).forEach(elem => {
        elem.classList.add('hidden');
        if (event.currentTarget.children[0].textContent === elem.dataset.tabTitle) {
            elem.classList.remove('hidden');
        }
    });
}
