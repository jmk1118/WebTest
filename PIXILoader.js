import {Queue} from './DataStructure.js';

export class PIXILoader{
    queue = new Queue();

    /**
     * @static
     * @returns {PIXILoader} PIXILoader 싱글턴 인스턴스 
     */
    static getInstance()
    {
        if(!PIXILoader.instance)
            PIXILoader.instance = new PIXILoader();
        
        return PIXILoader.instance;
    }

    /**
     * 
     * @param {*} url load할 리소스 경로 
     * @param {*} callback load가 끝난 후 실행할 콜백 함수
     */
    load(url, callback)
    {
        this.queue.Enqueue({URL: url, CB: callback});

        if (!PIXI.loader.loading)
        {
            this.loadResource();
        }
    }

    /**
     * 실제로 리소스를 로드하는 함수
     */
    loadResource()
    {
        let next;
        while(this.queue.size() > 0)
        {
            next = this.queue.Dequeue();
            PIXI.loader.add(next.URL).load(next.CB);
        }
    }
}