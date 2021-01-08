const pinger = (num, period) => {
  let i = num;
  console.log('Ping');
  const interval = setInterval(ping, period);
  function ping() {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }
};

pinger(20, 100);
