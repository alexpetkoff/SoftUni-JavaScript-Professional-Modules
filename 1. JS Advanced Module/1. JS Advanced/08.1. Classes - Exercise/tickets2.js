//This is a different solution of the task provided by SoftUni, which will not give the desired output,
//but i wrote it as a solution for a similar task from another source... ;)

class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
}
  
  function sortTickets(ticketDescriptions, sortingCriterion) {
    const tickets = [];
  
    // Parse the ticket descriptions and create Ticket instances
    for (let description of ticketDescriptions) {
      const [destination, price, status] = description.split('|');
      const ticket = new Ticket(destination, parseFloat(price), status);
      tickets.push(ticket);
    }
  
    // Define the comparison function based on the sorting criterion
    let comparisonFunction;
    switch (sortingCriterion) {
      case 'destination':
        comparisonFunction = (a, b) => a.destination.localeCompare(b.destination);
        break;
      case 'price':
        comparisonFunction = (a, b) => a.price - b.price;
        break;
      case 'status':
        comparisonFunction = (a, b) => a.status.localeCompare(b.status);
        break;
      default:
        throw new Error('Invalid sorting criterion');
    }
  
    // Sort the tickets based on the comparison function
    tickets.sort(comparisonFunction);
  
    // Return the sorted summary of all tickets
    return tickets.map(ticket => `${ticket.destination}|${ticket.price}|${ticket.status}`);
  }
  
  // Example usage
  const ticketDescriptions = [
    'London|200|available',
    'Paris|350|sold',
    'Rome|150|available',
    'Berlin|300|available',
    'Tokyo|500|sold',
  ];
  
  const sortingCriterion = 'price';
  const sortedTickets = sortTickets(ticketDescriptions, sortingCriterion);
  console.log(sortedTickets);
  