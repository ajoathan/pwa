if('serviceWorker' in navigator) {
	navigator.serviceWorker
			.register('sw.js')
			.then(function() {
				console.log("Service Worker Registered");
			});
}

function notifyMe(title, theBody) {
	var options = {
		body: theBody
	}

	Notification.requestPermission(function(permission){
		if (permission === 'granted') {
			var n = new Notification(title, options);
			setTimeout(n.close.bind(n), 5000);
		}
	});
}

