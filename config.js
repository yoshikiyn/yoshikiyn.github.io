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

export const SHOP_WEBHOOK_URL = "SHOP_WEBHOOK_REPLACE_ME";
export const SLOT_WEBHOOK_URL = "SLOT_WEBHOOK_REPLACE_ME";
// チーム設定（表示名用）
export const TEAMS = {
    "team_a": { name: "アダチーム" },
    "team_b": { name: "樋口チーム" },
    "team_c": { name: "坂後チーム" },
    "team_t": { name: "デバッグ用"}
};

export const USERS = {
    "a01": { pass: "0101", name: "アダ", team: "team_a" },
    "a02": { pass: "0202", name: "有働", team: "team_a" },
    "a03": { pass: "0303", name: "山本", team: "team_a" },
    "a04": { pass: "0404", name:"陶山", team:"team_a" },
    "a05": { pass: "0505", name:"鵜澤", team:"team_a" },
    "b01": { pass: "0606", name: "樋口", team: "team_b" },
    "b02": { pass: "0707", name:"木曽", team: "team_b" },
    "b03": { pass: "0808", name:"平田", team: "team_b" },
    "b04": { pass: "0909", name:"清水石", team: "team_b" },
    "b05": { pass: "1010", name:"川村", team: "team_b" },
    "c01": { pass: "1111", name:"坂後", team: "team_c" },
    "c02": { pass: "1212", name:"宮地", team: "team_c" },
    "c03": { pass: "1313", name:"坂井", team: "team_c" },
    "c04": { pass: "1414", name:"木村", team: "team_c" },
    "s01": { pass: "1515", name:"草薙", team: "team_s" },
    "s02": { pass: "1616", name:"山下", team: "team_s" },
    "s03": { pass: "1717", name:"北浦", team: "team_s" },
    "s04": { pass: "1818", name:"村上け", team: "team_s" },
    "s05": { pass: "1919", name:"門間", team: "team_s" },
    "s06": { pass: "2020", name:"西尾", team: "team_s" },
    "s07": { pass: "2121", name:"平井", team: "team_s" },
    "s08": { pass: "2222", name:"前田", team: "team_s" },
    "t01": { pass: "test", name:"デバッグ", team: "team_t"}
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
