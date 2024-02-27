async function findAndCopyDistrict() {
    const addressInput = document.getElementById('addressInput').value;

    // Make an HTTP request to the Google Civic Information API
    const response = await fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCkF0IXCTkZoCfBubxmd0JWaqLa6oTEXK4&roles=legislatorUpperBody&roles=legislatorLowerBody&address=${encodeURIComponent(addressInput)}`);
    
    if (!response.ok) {
      alert("Please enter a full, valid address.")
    } else {
      const data = await response.json();
      console.log(data)
      const congressionalDistrict = formatCongressionalDistrict(data);
      copyToClipboard(congressionalDistrict);
      alert("Congressional District found. Information copied to clipboard:\n" + congressionalDistrict);
    }
    
    // const data = await response.json();
    // Extract and format congressional district information
    
    
    // Copy the result to the clipboard
    
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
    var divisions = data.divisions
    // var keys = Object.keys(divisions)
    var final_key = ''
    // console.log(keys)
    for (var key in divisions) {
      if (key.includes('/cd:')) {
        final_key = key
      }
    }
    var infos = final_key.split('/cd:')
    infos[0] = infos[0].split('state:')[1].toUpperCase()
    
  // #   to_return = "Invalid Address, ensure address is specific enough to procure House Representative"
  // # else:
  // #   keys = divisions.keys()
  // #   infos = []
  // #   for key in keys:
  // #     infos.append(key.split("/")[-1])
  // #   infos[0] = infos[0].split("cd:")[1]
  // #   infos[1] = infos[1].split("state:")[1].upper()
  
    return infos[0] + "-" + infos[1];
}


var cdNotice = $('#congressional-district-notice')

cdNotice.click(function(){
$('#findDistrictForm').toggleClass('show')
  console.log("the function is like working")
})
