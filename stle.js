<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCQxVqgZl0WRAgUeGYmrlC-m57yvSA1W1A",
    authDomain: "chats-app-33bef.firebaseapp.com",
    databaseURL: "https://chats-app-33bef-default-rtdb.firebaseio.com",
    projectId: "chats-app-33bef",
    storageBucket: "chats-app-33bef.firebasestorage.app",
    messagingSenderId: "885573756894",
    appId: "1:885573756894:web:8babeceabba3148fc65f4f",
    measurementId: "G-15QHSSWKDF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
