var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
var TicketManager = /** @class */ (function () {
    function TicketManager(ticketDescription, sortingCriteria) {
        var _this = this;
        this.tickets = [];
        ticketDescription.forEach(function (line) {
            var _a = line.split('|'), destination = _a[0], pricestr = _a[1], status = _a[2];
            var price = Number(pricestr);
            _this.tickets.push(new Ticket(destination, price, status));
        });
        this.tickets = this.tickets.slice().sort(function (a, b) {
            if (a[sortingCriteria] < b[sortingCriteria])
                return -1;
            if (a[sortingCriteria] > b[sortingCriteria])
                return 1;
            return 0;
        });
    }
    return TicketManager;
}());
var result = new TicketManager([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
console.log(result);
