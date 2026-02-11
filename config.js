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
export const DISCORD_WEBHOOK_URL = "WEBHOOK_REPLACE_ME";

// チーム設定（表示名用）
export const TEAMS = {
    "team_a": { name: "アダチーム" },
    "team_b": { name: "樋口チーム" },
    "team_c": { name: "坂後チーム" }
};

export const USERS = {
    "a01": { pass: "ada", name: "アダ", team: "team_a" },
    "a02": { pass: "udou", name: "有働", team: "team_a" },
    "a03": { pass: "yamamoto", name: "山本", team: "team_a" },
    "a04": { pass: "suyama", name:"陶山", team:"team_a" },
    "a05": { pass: "usawa", name:"鵜澤", team:"team_a" },
    "b01": { pass: "higuchi", name: "樋口", team: "team_b" },
    "b02": { pass: "kiso", name:"木曽", team: "team_b" },
    "b03": { pass: "hirata", name:"平田", team: "team_b" },
    "b04": { pass: "shimizuishi", name:"清水石", team: "team_b" },
    "b05": { pass: "kawamura", name:"川村", team: "team_b" },
    "c01": { pass: "sakaziri", name:"坂後", team: "team_c" },
    "c02": { pass: "miyaji", name:"宮地", team: "team_c" },
    "c03": { pass: "sakai", name:"坂井", team: "team_c" },
    "c04": { pass: "kimura", name:"木村", team: "team_c" }
};

// ログイン情報の取得（個人名とチームIDを返す）
export function getUserInfo() {
    const userId = localStorage.getItem('userId');
    if (!userId || !USERS[userId]) {
        window.location.href = 'login.html';
        return null;
    }
    return {
        id: userId,
        name: USERS[userId].name,
        teamId: USERS[userId].team,
        teamName: TEAMS[USERS[userId].team].name
    };
}
