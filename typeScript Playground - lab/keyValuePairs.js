var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (currentKey, Value) {
        this.key = currentKey;
        this.val = Value;
    };
    KeyValuePair.prototype.display = function () {
        return "key = ".concat(this.key, ", value = ").concat(this.val);
    };
    return KeyValuePair;
}());
var kvp = new KeyValuePair();
kvp.setKeyValue(1, "Steve");
var displayedReulst = kvp.display();
console.log(displayedReulst);
