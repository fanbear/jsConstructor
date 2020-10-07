'use strict';

import model from './model';
import { templates} from './templates';
import './styles/main.css';

const $site = document.querySelector('#site');

model.forEach(block => {
    //передаем название ф-и в templates из model.type
    // toHtml являеться ф-ей title(block)
    const toHtml = templates[block.type];

    if(toHtml) {
        $site.insertAdjacentHTML('beforeend', toHtml(block));
    }
})
