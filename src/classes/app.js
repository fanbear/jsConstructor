import {Site} from './site'
import { model } from '../model';
import { Sidebar } from './sitebar'

export class App {
    constructor(model) {
        this.model = model;
    } 

    init() {
        const site = new Site('#site'); //передаем селектор

        site.render(model); //рендер данных из model

        const updateCallback = newBlock => {
            this.model.push(newBlock);
            site.render(this.model);
        }
        new Sidebar('#panel', updateCallback);
    }
}