function levusSpoiler(selector, word = "spoiler"){

    document.querySelectorAll(selector).forEach(item => {
        // основний блок
        item.style.cssText = 'position:relative;overflow:hidden;height:38px';
        // додаємо кнопку
        const el = document.createElement('div');
        el.style.cssText = 'position:absolute;top:0;left:0;width:100%;padding:10px;text-align:center;background:white;color:red;cursor:pointer;';
        el.innerHTML = `<span class="levus-spoiler">${word}</span>`;
        el.className = 'levus-spoiler';
        item.append(el);

        // клік по кнопці
        item.addEventListener('click', e => {
            if(e.target.className == 'levus-spoiler'){
                item.style.cssText = '';
                el.style.display = 'none';
            }
        });
    });
}

levusSpoiler('#example p', 'спойлер');