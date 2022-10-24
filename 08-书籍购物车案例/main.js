const app = new Vue({
  el: '#app',
  data: {
    books:
      [
        { id: 1, name: '《算法导论》', date: '2006-9', price: 85.00, count: 1 },
        { id: 2, name: '《UNIX编程艺术》', date: '2006-2', price: 59, count: 1 },
        { id: 3, name: '《编程珠玑》', date: '2008-10', price: 39, count: 1 },
        { id: 4, name: '《代码大全》', date: '2006-3', price: 128, count: 1 },
      ]
  },
  methods: {
    // getFinalPrice() {
    //   return '￥' + price.toFixed(2)
    // }

    //数组通过索引下标进行修改对象的时候,不能做到响应式,修改数组元素的对象属性可以做到响应式
    decrement(index) {
      this.books[index].count--
    },
    increment(index) {
      this.books[index].count++
    },
    removeHandle(index) {
      console.log(index)
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      // 1.普通的for循环
      // let totalPrice = 0
      // for(let i = 0; i < this.books.length; i++ ) {
      //  totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice


      // 2.for(let i in this.books) 
      // let totalPrice = 0
      // for (let i in this.books) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice
      //3.or(let i of this.books)
      // let totalPrice = 0
      // for(let item of this.books) {
      //   totalPrice += item.price * item.count
      // }
      // return totalPrice

      //reduce
      return this.books.reduce(function(pre, book) {
        return pre + book.price * book.count
      }, 0)
    }
  },
  //过滤器
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})
