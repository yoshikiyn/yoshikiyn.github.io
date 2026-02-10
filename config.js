// config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhwzCHYUVkGy9Sy1cS1dFLsLQNz7wxY9s",
  authDomain: "kbsharuana.firebaseapp.com",
  databaseURL: "https://kbsharuana-default-rtdb.firebaseio.com",
  projectId: "kbsharuana",
  storageBucket: "kbsharuana.firebasestorage.app",
  messagingSenderId: "847814404676",
  appId: "1:847814404676:web:5a61ee0c7347023e692a11",
  measurementId: "G-60S7R2YRBS"
};



const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1470674709732528260/nHkAC6YkJiQovabG2qMBsD4n8NWpLp9ZFO6ql6PrPvG8-tGV9yAgC2QeWcyR7hfWH3hz";

// チーム定義
export const TEAMS = {
    "team_a": { pass: "1234", name: "アダチーム" },
    "team_b": { pass: "5678", name: "樋口チーム" },
    "team_c": { pass: "9012", name: "坂後チーム" }
};

// ログインチェック関数
export function getLoggedInTeam() {
    const teamId = localStorage.getItem('teamId');
    if (!teamId) {
        window.location.href = 'login.html';
        return null;
    }
    return teamId;
}
