(function (numChildren, partnerName, location, jobTitle) {
    const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    document.getElementById('id').textContent = sentence;
  })(2, 'Ali', 'Paris', 'Web Developer');  
  