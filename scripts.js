
function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  }
  
  // Theme toggle
  const toggleButton = document.getElementById('toggle-theme');
  
  function updateThemeLabel() {
    const isDark = document.body.classList.contains('dark');
    toggleButton.innerHTML = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  }
  
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    updateThemeLabel();
  });
  
  // Initialize label on page load
  updateThemeLabel();
  