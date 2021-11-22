
/**
 * 10進数の数を引数に取り、2進数にしたときの1の数を返す。
 * @param {number} n ただし、nは10進数の数。
 */
var countBits = function(n) {
    let count = 0;
    while(n !== 0){
      if((n % 2) === 1) count ++;
      n = Math.floor(n/2);
    }
    return count;
  };