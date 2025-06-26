

type DestinationType = 'destination' | 'price' | 'status'
class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: number, status:string){
        this.destination = destination;
        this.price = price;
        this.status = status
        }
}

class TicketManager {

    private tickets: Ticket[]= []

    constructor(ticketDescription: string[], sortingCriteria:string) {
        ticketDescription.forEach(line => {
            const [destination, pricestr, status] = line.split('|');
            const price = Number(pricestr);
            this.tickets.push(new Ticket(destination, price, status))
        })
        this.tickets =this.tickets.slice().sort((a, b) => {
            if(a[sortingCriteria] < b[sortingCriteria]) return -1
            if(a[sortingCriteria] > b[sortingCriteria]) return 1;
            return 0
        })
      
    }

  
}

const result = new TicketManager(
[
'Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'
],
'status'

)

console.log(result)