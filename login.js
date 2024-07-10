const accessForm = document.getElementById('access_form');

accessForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const accessCode = document.getElementById('access_code').value;

  // Define access codes for each nation
  const nationCodes = {
    'global': 'global.html',
    'eagle': 'index_nation_USA.html',
    'nation3_code': 'index_nation3.html',
    'nation4_code': 'index_nation4.html',
    'nation5_code': 'index_nation5.html',
    'nation6_code': 'index_nation6.html',
    'nation7_code': 'index_nation7.html',
    'nation8_code': 'index_nation8.html',
    'nation9_code': 'index_nation9.html',
    'nation10_code': 'index_nation10.html',
  };

  // Check access code against defined codes
  if (nationCodes.hasOwnProperty(accessCode)) {
    window.location.href = nationCodes[accessCode];
  } else {
    // Show error message if code is invalid
    alert('Invalid Access Code!');
  }
});
