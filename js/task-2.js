function formatMessage(message, maxLength) {

if (message.length <= maxLength) { return message; }

else {
	let kurzMessage = message.slice(0, maxLength);
	return `${kurzMessage}...`;
}

	
	
}



