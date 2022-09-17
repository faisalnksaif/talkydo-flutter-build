importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

/*Update with yours config*/
const firebaseConfig = {
  apiKey: "AIzaSyBZ40WiuwVihpmOnc9U0hfFRDNjgm0zyos",
  authDomain: "talkydo-14306.firebaseapp.com",
  projectId: "talkydo-14306",
  storageBucket: "talkydo-14306.appspot.com",
  messagingSenderId: "748838426549",
  appId: "1:748838426549:web:42687fbc732389445b6bfc",
  measurementId: "G-LRP83M5NQR"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

/*messaging.onMessage((payload) => {
console.log('Message received. ', payload);*/
messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});