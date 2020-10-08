export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`;
}
export function col(content) {
    return `<div class="col-sm">${content}</div>`
}
//стили в массив
export function css(styles = {}) {
    // const keys = Object.keys(styles);
    // const array = keys.map(key => {
    //     return `${key}: ${styles[key]}`;
    // })
    // console.log(array.join(';'));
    // return array.join(';');
    if (typeof(styles) === 'string') return styles;
    const toString = key => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(';');
}

///форма сайдбара
export function block(type) {
    return `
        <form name='${type}'>
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="value">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="style" placeholder="style">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
        </form>
        <hr />
    `
};