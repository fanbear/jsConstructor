//сайдбар
import { TextBlock, TitleBlock } from './blocks';
import { block } from '../utils'

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector);
        this.update = updateCallback;

        this.init();
    }

    init () {
        this.$el.insertAdjacentHTML('afterbegin', this.template);
        this.$el.addEventListener('submit', this.addBlock.bind(this)); //теряем контекст в this.addBlock
    }

    //рендер в сайдбар
    get template() {
        return [
            block('title'),
            block('text')
        ].join('');
    }

    addBlock(e) {
        e.preventDefault();

        //данные с формы сайдбара
        const type = e.target.name;
        const value = e.target.value.value;
        const styles = e.target.style.value;

        //пишем в переменную класс с шаблоном
        const newBlock = type === 'text' 
        ? new TextBlock(value, {styles})
        : new TitleBlock(value, {styles})

        this.update(newBlock);

        e.target.value.value = '';
        e.target.style.value = '';
    }
};

