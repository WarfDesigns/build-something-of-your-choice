if (window.location.pathname.includes('results.html')) {
    
    const urlParams = new URLSearchParams(window.location.search);

    const first = urlParams.get('first');
    const last = urlParams.get('last');
    const email = urlParams.get('email');
    const dateAvailable = urlParams.get('date_available');
    const appointmentDetails = urlParams.get('appointment_details');
    const emergency = urlParams.get('emergency');
    const followUp = urlParams.get('follow_up');

    const resultsDiv = document.getElementById('results')
    if (first) {
        resultsDiv.innerHTML = `
        <p>First Name: ${first}</p>
        <p>Last Name: ${last}</p>
        <p>Email: ${email}</p>
        <p>Date Available: ${dateAvailable}</p>
        <p>Appointment Details: ${appointmentDetails}</p>
        <p>Emergency Appointment: ${emergency ? "Yes" : "No"}</p>
        <p>Follow-Up Appointment: ${followUp ? "Yes" : "No"}</p>
        <p><em>These values were retrieved from the URL query parameters.</em></p>
    `;
    } else {
        resultsDiv.innerHTML = `
        <p class="red">No parameters found in the URL.</p>
        <p class="red">Please submit the form on the previous page.</p>
    `;
    }
    console.log("All submitted parameters:");
    urlParams.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  }