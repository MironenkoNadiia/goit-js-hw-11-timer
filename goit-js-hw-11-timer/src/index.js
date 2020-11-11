import './styles.css';

const refs = require('./refs');
    
setInterval(() => {
  let time = Date.parse('dec 31, 2020; 20:59') - Date.now();
  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((time % (1000 * 60)) / 1000);
    refs.days.innerHTML = `${days}`;
    refs.hours.innerHTML = `${hours}`;
    refs.mins.innerHTML = `${mins}`;
    refs.secs.innerHTML = `${secs}`;
}, 1000);

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

