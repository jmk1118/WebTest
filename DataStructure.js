export class Queue{
    constructor()
    {
        this.storage = {}; // 큐를 구현할 key-value 해시 테이블 객체
        this.front = 0; // 
        this.rear = 0;
    }

    /**
     * 
     * @returns Queue의 길이
     */
    size()
    {
        if (this.storage[this.rear] === undefined)
        {
            return 0;
        }
        else
        {
            return this.rear - this.front + 1;
        }
    }

    /**
     * 
     * @param {*} value Queue에 넣을 원소
     */
    Enqueue(value)
    {
        if (this.size() === 0)
        {
            this.storage['0'] = value;
        }
        else
        {
            this.rear += 1;
            this.storage[this.rear] = value;
        }
    }

    /**
     * 
     * @returns Queue의 가장 앞에 있는 원소
     */
    Dequeue() 
    {
        let temp;

        if (this.front === this.rear) 
        {
          temp = this.storage[this.front];
          delete this.storage[this.front];
          this.front = 0;
          this.rear = 0;
        } 
        else 
        {
          temp = this.storage[this.front];
          delete this.storage[this.front];
          this.front += 1;
        }

        return temp;
    }
}