import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const appsettings = {
    databaseURL: "https://tranist-tracker-default-rtdb.firebaseio.com/"
};

const message = localStorage.getItem('message');
document.getElementById('messageDisplay').innerText = message;

const app = initializeApp(appsettings);
const database = getDatabase(app);
const EXPENSESRef = ref(database, "LIST OF EXPENSES");

// Function to push item and amount to Firebase
function pushExpenseToFirebase(item, amount) {
    push(EXPENSESRef, {
        item: item,
        amount: amount,
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const item = document.getElementById("item").value;
    const amount = parseFloat(document.getElementById("amount").value);

    pushExpenseToFirebase(item, amount);
    document.getElementById("expenseForm").reset();
}

// Initialize the form submit event listener
const expenseForm = document.getElementById("expenseForm");
expenseForm.addEventListener("submit", handleFormSubmit);

