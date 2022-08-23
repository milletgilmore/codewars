//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


function digitize(n) {
    let newArr = String(n).split('').reverse('').map((n) => Number(n))
      return newArr
  }