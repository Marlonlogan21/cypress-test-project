# Cypress Automation Project – Sauce Demo

## 📌 Overview
This Cypress project automates end-to-end testing of [Sauce Demo](https://www.saucedemo.com), focusing on functional flows and accessibility checks.

---

## ✅ Completed Tests

| Test | Description |
|------|-------------|
| Login – Success | Valid credentials redirect to inventory page |
| Login – Fail | Invalid login triggers error |
| Add to Cart | Adds item and verifies cart badge |
| Remove from Cart | Removes item and checks badge is gone |
| Accessibility | Uses `cypress-axe` to flag a11y issues |
| API (Mock) | Request made to public placeholder API |
| Performance | *Skipped due to technical limitations* |

---

## 📂 Folder Structure


---

## 🛠️ How to Run

Install dependencies:
```bash
npm install
npx cypress run
npx cypress run --spec "cypress/e2e/sauce-demo.cy.js"
