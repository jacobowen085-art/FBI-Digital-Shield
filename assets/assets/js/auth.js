const SESSION_KEY = "tb_currentUser";

const supabaseUrl = "https://onyuukjcxuceptssjoiq.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ueXV1a2pjeHVjZXB0c3Nqb2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0OTYyODQsImV4cCI6MjA5NjA3MjI4NH0.Sv-rY2mIokctOhC-kptqDzXnNbUbVYvhgc6kiDgjmdg";

const supabaseClient = supabase.createClient(
supabaseUrl,
supabaseKey
);

// =========================
// GET CURRENT USER
// =========================
function getCurrentUser() {
  try {
    const user = localStorage.getItem(SESSION_KEY);
    if (!user || user === "undefined") return null;
    return JSON.parse(user);
  } catch (e) {
    console.error("Auth parse error:", e);
    return null;
  }
}

// alias (for older pages)
function refreshCurrentUser() {
return getCurrentUser();
}

// LOGOUT
// =========================
function logoutUser() {
localStorage.removeItem(SESSION_KEY);
window.location.href = "index.html";
}

// =========================
// AUTH GUARD
// =========================
function requireAuth() {
const user = getCurrentUser();

if (!user) {
window.location.href = "login.html";
return null;
}

return user;
}

window.addEventListener("load", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
