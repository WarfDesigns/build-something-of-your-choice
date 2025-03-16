if (window.location.pathname.includes('results.html')) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(quearyString);
    const first = urlParams.get('first');
    const last = urlParams.get('last');
    const resultsDiv = document.getElementById('results')
    if (first && last) {
        resultsDiv.innerHTML = `
        <p><strong>Name:</strong> ${first}</p>
        <p><strong>Age:</strong> ${last}</p>
        <p><em>These values were retrieved from the URL query parameters.</em></p>
    `;
    } else {
        resultsDiv.innerHTML = `
        <p>No parameters found in the URL.</p>
        <p>Please submit the form on the previous page.</p>
    `;
    }
    console.log("All submitted parameters:");
    urlParams.forEach((value,key) => {
    console.log(`$(key): ${value}`);
    });
    
}