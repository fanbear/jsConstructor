import image from './assets/img.png';

const model = [
    { 
        type: 'title', 
        value: 'Конструктор сайтов на JS',
        options: {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center'
            }
        }
    },
    { 
        type: 'image', 
        value: image, ///импортировано
        options: {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imgStyles: {
                width: '500px',
                height: 'auto'
            },
            alt: 'Это картинка'
        }
    },
    { 
        type: 'columns', 
        value: [
            'Первая строка колонки',
            'Вторая строка колонки',
            'Третая строка колонки'
        ],
        options: {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight' : 'bold'
            }
        }
    },
    { 
        type: 'text', 
        value: 'here we go some text', 
        options: {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        } 
    },


];

export default model;