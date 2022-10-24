const app = new Vue({
  el: '#app',
  data: {
    books: [
      { id: 1, name: '《算法导论》', date: '2006-9', price: 85.00, count: 1 },
      { id: 2, name: '《UNIX编程艺术》', date: '2006-2', price: 59, count: 1 },
      { id: 3, name: '《编程珠玑》', date: '2008-10', price: 39, count: 1 },
      { id: 4, name: '《代码大全》', date: '2006-3', price: 128, count: 1 },
    ]
  },
  computed: {
    totalPrice() {
      return this.books.reduce((pre, book) => pre + book.price * book.count, 0)
    }
  },
  methods: {
    increment(index) {
      return this.books[index].count++
    },
    decrement(index) {
      return this.books[index].count--
    },
    btnClick(index) {
      this.books.splice(index,1)
    }
  },
  filters: {
    showPrice(price) {
      return '¥' + price.toFixed(2)
      
    }
  }

})


//过滤器不熟 reduce函数 移除