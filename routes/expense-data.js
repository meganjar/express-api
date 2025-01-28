const receipts = require('../data/receipts');
const totals = require('../data/totals');

app.get('/expenses', (req, res) => {
    res.render('expenses', {tr: createTableRow(receipts, totals)});  
  });



  function createTableRow(receipts, totals) {
    return receipts.map(receipt => {
      const matchingTotal = totals.find(total => total.id === receipt.ID);
      return {
        ...receipt,
        total: matchingTotal ? matchingTotal.total : "N/A" // Default to 'N/A' if no match
      };
    });
  }