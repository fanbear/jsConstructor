import image from './assets/img.png';
import { Block, TitleBlock, ImageBlock, ColumnsBlock, TextBlock } from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор сайтов на JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
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
    }),
    new ColumnsBlock([
        'Первая строка колонки',
        'Вторая строка колонки',
        'Третая строка колонки'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight' : 'bold'
        }
    }),
    new TextBlock('here we go some text', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
];
