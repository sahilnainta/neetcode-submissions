class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.arr = new Array(capacity);
        this.size = capacity;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        let index = this.lastValueIndex();
        let size = this.size;

        if(index == null) {
            this.arr[0] = n;        
        } else if (index == size-1) {
            this.resize();
            this.arr[size] = n;
        } else {
            this.arr[index+1] = n;
        }
    }

    /**
     * @returns {number}
     */
    popback() {
        let index = this.lastValueIndex();
        let pop = this.arr[index];
        this.arr[index] = null;
        return pop;
    }

    /**
     * @returns {void}
     */
    resize() {
        let newArr = new DynamicArray(this.size * 2);
        newArr = this.arr;
        this.arr = newArr;
        this.size = this.size * 2;
    }

    /**
     * @returns {number}
     */
    getSize() {
        let size = 0;
        for(let i=0; i< this.size; i++) {
            if(this.arr[i] != null) {
                size++;
            }
        }
        return size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.size;
    }

    lastValueIndex() {
        for(let i=this.size-1; i>=0; i--) {
            if(this.arr[i] != null) {
                return i;
            }
        }
        return null;
    }
}
