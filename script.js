const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    link.classList.add("active");
  }
});

const inquiryForm = document.querySelector("#inquiry-form");
const formMessage = document.querySelector(".form-message");

if (inquiryForm && formMessage) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const requiredFields = inquiryForm.querySelectorAll("[required]");
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
        field.setAttribute("aria-invalid", "true");
      } else {
        field.removeAttribute("aria-invalid");
      }
    });

    const contact = inquiryForm.querySelector("#contact");
    if (contact && contact.value.trim().length < 7) {
      isValid = false;
      contact.setAttribute("aria-invalid", "true");
    }

    if (!isValid) {
      formMessage.textContent = "Please complete all required fields with valid project details.";
      formMessage.classList.add("show");
      return;
    }

    formMessage.textContent = "Thank you. Your inquiry is ready to be connected to an email or backend service.";
    formMessage.classList.add("show");
    inquiryForm.reset();
  });
}

const chatbot = document.createElement("div");
chatbot.className = "chatbot-widget";
chatbot.innerHTML = `
  <button class="chatbot-toggle" type="button" aria-label="Open AI chatbot" aria-expanded="false">
    <span>AI</span>
  </button>
  <div class="chatbot-panel" aria-hidden="true">
    <div class="chatbot-head">
      <div>
        <strong>WebNexus AI Assistant</strong>
        <span>Demo chatbot for project inquiries</span>
      </div>
      <button class="chatbot-close" type="button" aria-label="Close AI chatbot">×</button>
    </div>
    <div class="chatbot-messages" aria-live="polite">
      <div class="bot-message">Hello. I can help you choose a website, app, or AI chatbot service.</div>
    </div>
    <form class="chatbot-form">
      <input type="text" name="chat" placeholder="Ask about services or pricing" autocomplete="off" aria-label="Ask the AI assistant">
      <button type="submit">Send</button>
    </form>
  </div>
`;
document.body.appendChild(chatbot);

const chatbotToggle = chatbot.querySelector(".chatbot-toggle");
const chatbotPanel = chatbot.querySelector(".chatbot-panel");
const chatbotClose = chatbot.querySelector(".chatbot-close");
const chatbotForm = chatbot.querySelector(".chatbot-form");
const chatbotInput = chatbot.querySelector(".chatbot-form input");
const chatbotMessages = chatbot.querySelector(".chatbot-messages");

function setChatbotOpen(isOpen) {
  chatbot.classList.toggle("open", isOpen);
  chatbotToggle.setAttribute("aria-expanded", String(isOpen));
  chatbotPanel.setAttribute("aria-hidden", String(!isOpen));
  if (isOpen) {
    chatbotInput.focus();
  }
}

function botReply(text) {
  const normalized = text.toLowerCase();
  if (normalized.includes("price") || normalized.includes("package") || normalized.includes("cost")) {
    return "WebNexus offers Starter, Business, and Pro packages. AI chatbot projects are usually quoted under the Pro or custom plan.";
  }
  if (normalized.includes("chatbot") || normalized.includes("ai")) {
    return "Yes, WebNexus can build AI chatbots for websites, lead capture, customer support, FAQs, and business automation.";
  }
  if (normalized.includes("app")) {
    return "For app projects, WebNexus can plan mobile interfaces, user flows, dashboards, and integrations.";
  }
  if (normalized.includes("contact") || normalized.includes("whatsapp")) {
    return "You can use the Contact page or WhatsApp button to share your project details with WebNexus.";
  }
  return "WebNexus can help with websites, mobile apps, cloud solutions, digital growth, and AI chatbot development.";
}

chatbotToggle.addEventListener("click", () => setChatbotOpen(!chatbot.classList.contains("open")));
chatbotClose.addEventListener("click", () => setChatbotOpen(false));

chatbotForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = chatbotInput.value.trim();
  if (!value) return;

  chatbotMessages.insertAdjacentHTML("beforeend", `<div class="user-message">${value}</div>`);
  chatbotMessages.insertAdjacentHTML("beforeend", `<div class="bot-message">${botReply(value)}</div>`);
  chatbotInput.value = "";
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
});
