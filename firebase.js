import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyB76umPxn02W_ZJmm3BkJqQE3iw1iF1IMs",
  authDomain: "topupmyid-77016.firebaseapp.com",
  projectId: "topupmyid-77016",
  storageBucket: "topupmyid-77016.appspot.com",
  messagingSenderId: "993399535151",
  appId: "1:993399535151:web:95be0f5874d3c03f3cf8da",
  measurementId: "G-BQHFEJFZMT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };
