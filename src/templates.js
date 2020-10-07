import { row, col, css } from './utils';

const title = block => {
    const { tag = 'h1', styles} = block.options;
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

const text = block => row(col(`<p>${block.value}</p>`), css(block.options.styles));

const columns = block => {
    const html = block.value.map(col).join(''); //item => col(item)
    return row(html, css(block.options.styles));
}

const image = block => {
    const {imgStyles: img, alt = '', styles} = block.options
    return row(`<img src='${block.value}' style='${css(img)}' alt='${alt}'/>`, css(styles));
}

export const templates = {
    title,
    text,
    columns,
    image
}