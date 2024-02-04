function checkForSpam(message) {

    let  lowerCaseMessage = message.toLowerCase();
  
    if (lowerCaseMessage.includes(`spam`) || lowerCaseMessage.includes(`sale`)) {return false; }
    
    else { return true; }


}

