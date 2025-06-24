class KeyValuePair<T, U> {
    private key: T;
    private val: U;

   public setKeyValue(currentKey: T, Value: U): void {
        this.key = currentKey;
        this.val = Value
       
    }

    display() {
        return `key = ${this.key}, value = ${this.val}`
    }
}


let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
const displayedReulst = kvp.display();
console.log(displayedReulst)

