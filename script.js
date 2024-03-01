async function findAndCopyDistrict() {
    const addressInput = document.getElementById('addressInput').value;

    // Make an HTTP request to the Google Civic Information API
    const response = await fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCkF0IXCTkZoCfBubxmd0JWaqLa6oTEXK4&roles=legislatorUpperBody&roles=legislatorLowerBody&address=${encodeURIComponent(addressInput)}`);
    
    // if (!response.ok) {
    // alert("Please enter a full, valid address.")
    // } else {
      const data = await response.json();
      var small = document.getElementById('alert')
      if (response.ok) {
        const congressionalDistrict = formatCongressionalDistrict(data);
        // copyToClipboard(congressionalDistrict);
        small.innerHTML = 'Success! Your congressional district is: ' + `<br><input class="district-to-copy" id="district-to-copy" value = ${congressionalDistrict}>`+'Remember this or copy to your clipboard.'

        //copies to clipboard!
        const copyText = document.getElementById('district-to-copy')
          copyText.select()
          copyText.focus()
          copyText.setSelectionRange(0, 10)
    navigator.clipboard.writeText(copyText.value)
        $('small').removeClass("input-error")

        // alert("Congressional District found. Information copied to clipboard:\n" + congressionalDistrict);
      } else {
        small.innerHTML = "Please enter a full, valid address."
          $('small').addClass("input-error")
      }
      small.style.display = "flex"
    // }
    
    // const data = await response.json();
    // Extract and format congressional district information
    
    
    // Copy the result to the clipboard
    
}

// JavaScript function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
  .then(() => {
    log('Text copied.');
  })
  .catch(log);
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


