/*
 * Joshua Shuster — Author Website
 * Shared front-end behaviour: mobile nav, newsletter form, contact form.
 * No external dependencies. No data leaves the browser — see README for
 * how to wire these forms up to a real email service.
 */
(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the mobile menu when a nav link is chosen
    document.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Simple email format check ---------- */
  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  /* ---------- Newsletter form (home page) ---------- */
  var newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    var status = document.getElementById("newsletter-status");
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var emailField = document.getElementById("newsletter-email");
      var email = emailField.value.trim();

      if (!isValidEmail(email)) {
        status.textContent = "Please enter a valid email address.";
        status.className = "newsletter-status error";
        emailField.focus();
        return;
      }

      // NOTE: this demo does not send data anywhere. Connect this to a
      // real provider (Mailchimp, ConvertKit, Kit, etc.) before launch —
      // see README.md, section "Connecting the newsletter form".
      status.textContent = "Thanks for subscribing! Please check your inbox to confirm.";
      status.className = "newsletter-status success";
      newsletterForm.reset();
    });
  }

  /* ---------- Contact form (contact page) ---------- */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    var contactStatus = document.getElementById("contact-status");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("contact-name");
      var email = document.getElementById("contact-email");
      var message = document.getElementById("contact-message");
      var errors = false;

      [name, email, message].forEach(function (field) {
        var errorEl = document.getElementById(field.id + "-error");
        if (errorEl) errorEl.textContent = "";
      });

      if (!name.value.trim()) {
        document.getElementById("contact-name-error").textContent = "Please enter your name.";
        errors = true;
      }
      if (!isValidEmail(email.value.trim())) {
        document.getElementById("contact-email-error").textContent = "Please enter a valid email address.";
        errors = true;
      }
      if (!message.value.trim() || message.value.trim().length < 10) {
        document.getElementById("contact-message-error").textContent = "Please enter a message (at least 10 characters).";
        errors = true;
      }

      if (errors) {
        contactStatus.textContent = "";
        return;
      }

      // NOTE: this demo does not send data anywhere. Wire this up to a
      // real backend or form service (e.g. Formspree) before launch —
      // see README.md, section "Connecting the contact form".
      contactStatus.textContent = "Thank you! Your message has been noted — Josh's team will be in touch soon.";
      contactStatus.className = "form-status success";
      contactForm.reset();
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
