new Vue({
    el: '#orders-container',
    data: {
        orders: [
            { id: 1, orderNumber: '001', status: 'В обработке' },
            { id: 2, orderNumber: '002', status: 'Выполнен' },
            // Добавьте здесь больше заказов по вашему усмотрению
        ]
    },
    methods: {
        addNewOrder() {
            const newOrder = {
                id: this.orders.length + 1,
                orderNumber: '00' + (this.orders.length + 1),
                status: 'Новый'
            };
            this.orders.push(newOrder);
        },
        renameOrder(orderId) {
            const newName = prompt('Введите новое имя для заказа:');
            if (newName !== null) {
                const order = this.orders.find(order => order.id === orderId);
                if (order) {
                    order.orderNumber = newName;
                }
            }
        }
    }
});