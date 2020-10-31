function removeOrderItem(orderInfo, position){
    
        // 1. validitate proprietate items
        if (Array.isArray(orderInfo.items)) {

            // 2. propritatile price si quantity
            for (let i=0; i< orderInfo.items.length ; i++) {
                if (!orderInfo.items[i].hasOwnProperty('price') && !orderInfo.items[i].hasOwnProperty('quantity')) {
                    throw 'Malformed item';
                }
            }

            // 3. validitate position
            if (position < 0 || position >= orderInfo.items.length) {
                throw 'Invalid position'
            } 

            // 4. eliminarea elem de pe pozitia data si refacerea totalului in urma eliminarii
            else{
                orderInfo.total = orderInfo.total - orderInfo.items[position].price * orderInfo.items[position].quantity;
                orderInfo.items.splice(position, 1); 
            }

        } else {
            throw 'Items should be an array';
        }

    // 5. returnarea totalului 
    return orderInfo;
}

const app = {
    removeOrderItem
};

module.exports = app;
