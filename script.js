// TaskMateAI - Interactive Scripts

// Theme toggle
(function () {
  const toggle = document.querySelector("[data-theme-toggle]");
  const root = document.documentElement;
  if (!toggle) return;

  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  let currentTheme = prefersDark ? "dark" : "light";
  root.setAttribute("data-theme", currentTheme);

  function setIcon(theme) {
    if (theme === "dark") {
      toggle.setAttribute("aria-label", "Zu Light Mode wechseln");
      toggle.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" stroke-width="2" d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    } else {
      toggle.setAttribute("aria-label", "Zu Dark Mode wechseln");
      toggle.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="5"></circle>
        <path fill="none" stroke="currentColor" stroke-width="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>`;
    }
  }

  setIcon(currentTheme);
  toggle.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", currentTheme);
    setIcon(currentTheme);
  });
})();

// Smooth scroll
document.querySelectorAll("[data-scroll-target]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-scroll-target");
    if (!target) return;
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Footer year
const yearEl = document.getElementById("tm-year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Assistant mock
const form = document.getElementById("assistant-form");
const textarea = document.getElementById("assistant-prompt");
const messages = document.getElementById("assistant-messages");

if (form && textarea && messages) {
  function appendMessage(text, type) {
    const el = document.createElement("div");
    el.className = "tm-message " + (type === "user" ? "tm-message-user" : "tm-message-ai");
    const p = document.createElement("p");
    p.textContent = text;
    el.appendChild(p);
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const value = textarea.value.trim();
    if (!value) return;
    appendMessage(value, "user");
    textarea.value = "";
    setTimeout(() => {
      appendMessage("Ich habe deinen Plan analysiert und empfehle drei Fokus-Bl\u00f6cke mit klaren Priorit\u00e4ten.", "ai");
    }, 400);
  });

  document.querySelectorAll(".tm-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const prompt = chip.getAttribute("data-prompt");
      if (!prompt) return;
      textarea.value = prompt;
      textarea.focus();
    });
  });
}
