import { row, col, css } from '../utils';

export class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован');
    }
}

//шаблон title 
export class TitleBlock extends Block {
    constructor(value, options) {
        // this.value = value;
        // this.options = options;
        super(value, options); //передаем title в родителя где this.type = title
    }
    
    toHTML() {
        const { tag = 'h1', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
    }
}
//шаблон image
export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {imgStyles: img, alt = '', styles} = this.options
        return row(`<img src='${this.value}' style='${css(img)}' alt='${alt}'/>`, css(styles));
        
        
    }
}

//шаблон колонок
export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const html = this.value.map(col).join(''); //item => col(item)
        return row(html, css(this.options.styles));
        
    }
}

//шаблон текста
export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}