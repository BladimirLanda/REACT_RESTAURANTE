//HELPERS

function formatCurrency(quantity: number) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return formatter.format(quantity);
}

export {
    formatCurrency
}