new Vue({
    el: '#orders-container',
    data: {
        orders: [],
        deletedOrders: [],
        searchDistrict: '', 
        isSearching: false,
        showDeletedOrders: false
        
    },
    mounted() {
        // При загрузке страницы пытаемся получить заказы из localStorage
        const storedOrders = localStorage.getItem('orders');
        const storedDeletedOrders = localStorage.getItem('deletedOrders');
        if (storedOrders) {
            this.orders = JSON.parse(storedOrders);
        } else {
            // Если в localStorage нет данных, добавляем начальные заказы
            
            this.saveOrders(); // Сохраняем начальные заказы в localStorage
        }
        if (storedDeletedOrders) {
            this.deletedOrders = JSON.parse(storedDeletedOrders);
        } else {
            
            this.saveDeletedOrders(); // Сохраняем начальные удалённые заказы в localStorage
        }
    },
    computed: {
        filteredOrders() {
            if (this.isSearching) {
                return this.orders.filter(order => {
                    return Number(order.district) === Number(this.searchDistrict);
                });
            } else {
                return this.orders;
            }
        }
    },
    methods: {
        clearDeletedOrdersHistory() {
            const confirmed = confirm('Вы уверены, что хотите очистить историю удалённых заказов?');
            if (confirmed) {
                this.deletedOrders = [];
                this.saveDeletedOrders(); // Сохраняем изменения в localStorage
            }
        },
        toggleDeletedOrdersVisibility() {
            // Метод для переключения видимости истории удалённых заказов
            this.showDeletedOrders = !this.showDeletedOrders;
        },
        deletePermanently(orderId) {
            const confirmed = confirm('Вы уверены, что хотите удалить заказ окончательно?');
            if (confirmed) {
                const orderIndex = this.deletedOrders.findIndex(order => order.id === orderId);
                if (orderIndex !== -1) {
                    this.deletedOrders.splice(orderIndex, 1);
                    this.saveDeletedOrders(); // Обновляем удалённые заказы в localStorage
                } else {
                    alert('Удалённый заказ не найден.');
                }
            }
        },
    
        restoreOrder(orderId) {
            const orderIndex = this.deletedOrders.findIndex(order => order.id === orderId);
            if (orderIndex !== -1) {
                const restoredOrder = this.deletedOrders.splice(orderIndex, 1)[0];
                this.orders.push(restoredOrder);
                this.saveOrders(); // Обновляем заказы в localStorage
                this.saveDeletedOrders(); // Обновляем удалённые заказы в localStorage
            } else {
                alert('Удалённый заказ не найден.');
            }
        },
        showDeletedOrdersHistory() {
            
        },
        searchOrders() {
            this.isSearching = true; 
            if (this.filteredOrders.length > 0) {
                const orderInfo = this.filteredOrders.map(order => `Заказ №${order.orderNumber} (${order.district} дистрикт)`).join('\n');
                window.alert(`Найденные заказы:\n${orderInfo}`);
            } else {
                window.alert('Нет заказов по вашему запросу.');
            }
            this.isSearching = false;
        },
        deleteOrder(orderId) {
            const confirmed = confirm('Вы уверены, что хотите удалить текущий заказ?');
            if (confirmed) {
                const orderIndex = this.orders.findIndex(order => order.id === orderId);
                if (orderIndex !== -1) {
                    const deletedOrder = this.orders.splice(orderIndex, 1)[0];
                    this.deletedOrders.push(deletedOrder); // Добавляем удалённый заказ в историю
                    this.saveOrders();
                    this.saveDeletedOrders(); // Обновляем удалённые заказы в localStorage
                } else {
                    alert('Заказ не найден.');
                }
            }
        },
        generateRandomStas() {
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
        generateRandomAmount3() {
            // Генерируем случайное число от 1 до 1000 для суммы заказа
            return Math.floor(Math.random() * 1000) + 1;
        },
        generateRandomAmount() {
            // Генерируем случайное число от 1 до 100 для суммы заказа
            return Math.floor(Math.random() * 100) + 1;
        },
        generateRandomAmount2() {
            // Генерируем случайное число от 1 до 13 для суммы заказа
            return Math.floor(Math.random() * 13) + 1;
        },
        addNewOrder() {
            const generateRandomOrder = confirm('Хотите сгенерировать заказ случайно?');
            
            if (generateRandomOrder) {
                const newOrder = {
                    id: this.orders.length + 1,
                    orderNumber: '00' + (this.orders.length + 1),
                    status: this.generateRandomStas(),
                    amount: this.generateRandomAmount(),
                    district: this.generateRandomAmount2(),
                    gun: this.generateRandomGun(),
                    igra: this.generateRandomAmount3()
                };
                this.orders.push(newOrder);
            } else {
                
                const newOrder = {
                    id: this.orders.length + 1,
                    orderNumber: '00' + (this.orders.length + 1),
                    status: this.generateRandomStas(),
                    amount: prompt('Введите сумму денег:'),
                    district: this.generateRandomAmount2(),
                    gun: prompt('Введите оружие:'),
                    igra: prompt('Введите игру:')
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
                    this.saveOrders();
                }
            }
            const newamount = prompt('Введите сумму денег:');
            if (newamount !== null) {
                const order = this.orders.find(order => order.id === orderId);
                if (order) {
                    order.amount = newamount;
                    this.saveOrders();
                }
            }
            const newgun = prompt('Введите оружие:');
            if (newgun !== null) {
                const order = this.orders.find(order => order.id === orderId);
                if (order) {
                    order.gun = newgun;
                    this.saveOrders();
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
        saveDeletedOrders() {
            // Сохраняем удалённые заказы в localStorage
            localStorage.setItem('deletedOrders', JSON.stringify(this.deletedOrders));
        },
        saveOrders() {
            // Сохраняем заказы в localStorage в виде строки
            localStorage.setItem('orders', JSON.stringify(this.orders));
        }
    }
});