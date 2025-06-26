class Box<T> {
    private _boxes: T[] = []

    constructor(){
    }

    add(element: T){
        this._boxes.push(element)
    }

    remove(){
        this._boxes.pop()
    }

    get count(): number {
        return this._boxes.length
    }

}

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);


