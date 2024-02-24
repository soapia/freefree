async function findAndCopyDistrict() {
    const addressInput = document.getElementById('addressInput').value;

    // Make an HTTP request to the Google Civic Information API
    const response = await fetch(`https://us-central1-ceasefire-now.cloudfunctions.net/my-district?name=${encodeURIComponent(addressInput)}`);
    const data = await response.json();
    // Extract and format congressional district information
    // console.log(data)
    // const congressionalDistrict = formatCongressionalDistrict(data);
    
    // Copy the result to the clipboard
    copyToClipboard(data);

    alert("Congressional District found. Information copied to clipboard:\n" + data);
}

// JavaScript function to copy text to clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

// JavaScript function to format congressional district information
function formatCongressionalDistrict(data) {
    // Implement logic to extract and format the necessary congressional district information from the API response
    // This is a placeholder message, replace it with your actual implementation
    return "Congressional District: 5 (Sample District)";
}


var cdNotice = $('#congressional-district-notice')

// cdNotice.click(function(){
// $('#findDistrictForm').toggleClass('show')
//   console.log("the function is like working")
// })
