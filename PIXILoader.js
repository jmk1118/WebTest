import {Queue} from './DataStructure.js';

export class PIXILoader{

    queueURL = new Queue();
    queueCallBack = new Queue();

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
        this.queueURL.Enqueue(url);
        this.queueCallBack.Enqueue(callback);

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
        while(this.queueURL.size() > 0)
        {
            PIXI.loader.add(this.queueURL.Dequeue()).load(this.queueCallBack.Dequeue());
        }
    }
}