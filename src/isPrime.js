const isPrime = (number) => {
    if (number <= 1) {
      return 'no';
    } else if (number === 2) {
      return 'yes';
    } else if (number % 2 === 0) {
      return 'no';
    }
  
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        return 'no';
      }
    }
  
    return 'yes';
  };

  export default isPrime;