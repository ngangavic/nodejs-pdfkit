const { createPDF } = require('./createPDF.js');

const pdfData = {
    shipping: {
        name: 'John Doe',
        address: 'Downthe Street',
        city: 'The city',
        state: 'State',
        country: 'Country',
        postal_code: 94111,
    },
    items: [
        {
            item: 'TC 100',
            description: 'Toner Cartridge',
            quantity: 2,
            amount: 6000,
        },
        {
            item: 'USB_EXT',
            description: 'USB Cable Extender',
            quantity: 1,
            amount: 2000,
        },
    ],
    subtotal: 8000,
    paid: 0,
    invoice_nr: 1234,
};

createPDF(pdfData, 'invoice.pdf');
