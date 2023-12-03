new Vue({
    el: '#orders-container',
    data: {
        orders: []
    },
    mounted() {
        // При загрузке страницы пытаемся получить заказы из localStorage
        const storedOrders = localStorage.getItem('orders');
        if (storedOrders) {
            this.orders = JSON.parse(storedOrders);
        } else {
            // Если в localStorage нет данных, добавляем начальные заказы
            this.orders = [
                { id: 1, orderNumber: '001', status: 'В обработке', amount: 12 ,district:0,gun:""},
                { id: 2, orderNumber: '002', status: 'Выполнен', amount: 13 ,district:0,gun:""},
            ];
            this.saveOrders(); // Сохраняем начальные заказы в localStorage
        }
    },
    methods: {
        generateRandomGun() {
            // Массив возможных значений для свойства gun
            const statu = ['Новый','Ожидание','Выполнен'];
            // Выбираем случайный элемент из массива guns
            return statu[Math.floor(Math.random() * statu.length)];
        },
        generateRandomGun() {
            // Массив возможных значений для свойства gun
            const guns = ['лук', 'голые(но сильные) руки', 'арбалет', 'мачеты', 'нож', 'копьё', 'трезубец'];
            // Выбираем случайный элемент из массива guns
            return guns[Math.floor(Math.random() * guns.length)];
        },
        deleteAllOrders() {
            const confirmed = confirm('Вы уверены, что хотите удалить все заказы?');
            if (confirmed) {
                this.orders = [];
                this.saveOrders(); // Сохраняем заказы после удаления
            }
        },
        generateRandomAmount() {
            // Генерируем случайное число от 1 до 100 для суммы заказа
            return Math.floor(Math.random() * 100) + 1;
        },
        generateRandomAmount2() {
            // Генерируем случайное число от 1 до 100 для суммы заказа
            return Math.floor(Math.random() * 13) + 1;
        },
        addNewOrder() {
            const generateRandomOrder = confirm('Хотите сгенерировать заказ случайно?');
            
            if (generateRandomOrder) {
                const newOrder = {
                    id: this.orders.length + 1,
                    orderNumber: '00' + (this.orders.length + 1),
                    status: 'Новый',
                    amount: this.generateRandomAmount(),
                    district: this.generateRandomAmount2(),
                    gun: this.generateRandomGun()
                };
                this.orders.push(newOrder);
            } else {
                const newOrder = {
                    id: this.orders.length + 1,
                    orderNumber: '00' + (this.orders.length + 1),
                    status: 'Новый',
                    amount: prompt('Введите сумму денег:'),
                    district: prompt('Введите район:'),
                    gun: prompt('Введите оружие:')
                };
                this.orders.push(newOrder);
            }
            
            this.saveOrders(); // Сохраняем заказы после добавления нового
        },
        renameOrder(orderId) {
            const newName = prompt('Введите новое имя для заказа:');
            if (newName !== null) {
                const order = this.orders.find(order => order.id === orderId);
                if (order) {
                    order.orderNumber = newName;
                    this.saveOrders(); // Сохраняем заказы после переименования
                }
            }
            const newamount=prompt('Введите сумму денег:');
            if (newamount !== null) {
                const order = this.orders.find(order => order.id === orderId);
                if (order) {
                    order.amount = newamount;
                    this.saveOrders(); // Сохраняем заказы после переименования
                }
            }
            const newdistrict=prompt('Введите район:');
            if (newdistrict !== null) {
                const order = this.orders.find(order => order.id === orderId);
                if (order) {
                    order.district = newamount;
                    this.saveOrders(); // Сохраняем заказы после переименования
                }
            }
            const newgun=prompt('Введите оружие:');
            if (newgun !== null) {
                const order = this.orders.find(order => order.id === orderId);
                if (order) {
                    order.gun = newamount;
                    this.saveOrders(); // Сохраняем заказы после переименования
                }
            }
        },
        deleteLastOrder() {
            if (this.orders.length > 0) {
                const confirmed = confirm('Вы уверены, что хотите удалить последний заказ?');
                if (confirmed) {
                    this.orders.pop();
                    this.saveOrders(); // Сохраняем заказы после удаления
                }
            } else {
                alert('Нет заказов для удаления.');
            }
        },
        saveOrders() {
            // Сохраняем заказы в localStorage в виде строки
            localStorage.setItem('orders', JSON.stringify(this.orders));
        }
    }
});