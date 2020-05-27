const tabs = (headerSelector,tabSelector,contentSelector,activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          tabContent = document.querySelectorAll(contentSelector);

    function hideTabContent(){
        tabContent.forEach(item => {
            item.style.display = 'none'
        }) 

        tab.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

    function showTabContent(i = 0){
        tabContent[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', e => {
        if(e.target && (e.target.classList.contains(tabSelector.replace(/\./, '')) || e.target.parentNode.classList.contains(tabSelector.replace(/\./, '')))){
            tab.forEach((item, i) => {
                if(e.target == item || e.target.parentNode == item){
                    hideTabContent();
                    showTabContent(i)
                }
            })
        }
    })
}

export default tabs