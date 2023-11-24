
function convert() {
    let minutesInput = document.getElementById('minutes');
    let secondsOutput = document.getElementById('seconds');
    
    if (!isNaN(minutesInput.value) && minutesInput.value !== '') {
      let minutes = parseFloat(minutesInput.value);
      let seconds = minutes * 60;
      secondsOutput.textContent = seconds;
    } else {
      alert('Please enter a valid number for minutes.');
    }
  }