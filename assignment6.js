//! TASK 1: You are tasked with developing a web application that interacts with the Marvel Comics API. The application should handle asynchronous operations such as fetching data and updating the user interface dynamically using modern JavaScript features.
// TODO 1: Obtaining API Key and Configuration - Obtain an API key from the Marvel Comics API website. Investigate and understand the necessary configurations required to authenticate requests to the API.
const publicKey = "635ce502ebffb52ca55a1e0664bebd6d";
const privateKey = "9897f45f29535ecc43bda3b144076e21f0ba7818";
const apiBaseURL = "https://gateway.marvel.com/v1/public";
function createURL() {
	const ts = Date.now();
	const params = new URLSearchParams({
		ts: ts,
		apikey: publicKey,
		hash: md5(ts + privateKey + publicKey),
	});
	const endpoint = `${apiBaseURL}/characters?`;

	const url = endpoint + params;

	return url;
}

const url = createURL();

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error(error);
	});
// TODO 2: Fetching Characters Using Fetch API - Implement a function to fetch Marvel Comics characters asynchronously from the API endpoint using the Fetch API and promises. Utilize the API key and configurations obtained in Task 1. Log the fetched characters to the console.
function fetchCharacters() {
	return fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			return data;
		})
		.catch((error) => {
			console.error(error);
		});
}
fetchCharacters();
// TODO 3: Updating User Interface Dynamically - Write a function to dynamically update the user interface with the fetched characters' information. Utilize promises and the Fetch API to ensure that the UI updates only after the characters are successfully fetched.
function updateUI() {
	const charactersList = document.getElementById("characters-list");

	fetchCharacters().then((data) => {
		data.data.results.forEach((character) => {
			const characterItem = document.createElement("li");
			characterItem.textContent = character.name;
			charactersList.appendChild(characterItem);
		});
	});
}

updateUI();

//? TASK 2: You are tasked with developing a web-based countdown timer application that allows users to set a timer for a specified duration. The application should utilize intervals and timeouts to update the timer display dynamically and notify the user when the timer expires.
// TODO 1:  Countdown Timer - Create a countdown timer that starts from a user-defined duration (in seconds) and updates every second until it reaches zero. Use setInterval to update the timer display.
function countdownTimer(timer) {
	let timerDisplay = document.getElementById("timer-display");
	const interval = setInterval(() => {
		timer--;
		timerDisplay.textContent = `Time Remaining: ${timer}`;
		if (timer <= 0) {
			clearInterval(interval);
			timerDisplay.textContent = "Timer Expired!";
		}
	}, 1000);
}

countdownTimer(10);
// TODO 2: Delayed Notification - Implement a function that displays a notification after a specified delay (in milliseconds) using setTimeout.

function delayedNotification(delay) {
	setTimeout(() => {
		alert("Notification after delay!");
	}, delay);
}

delayedNotification(10000);

// TODO 3: Repeat Notification - Develop a function that repeatedly displays a notification at fixed intervals until the user dismisses it. Use setInterval to schedule the notifications.
function repeatNotification(interval) {
	const notificationInterval = setInterval(() => {
		alert("Repeating Notification!");
	}, interval);

	setTimeout(() => {
		clearInterval(notificationInterval);
	}, 10000);
}

repeatNotification(2000);
