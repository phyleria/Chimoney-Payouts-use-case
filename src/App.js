import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(null);
  const [showPayoutForm, setShowPayoutForm] = useState(false);
  const [recipients, setRecipients] = useState([
    { email: "", currency: "USD", amount: "" },
  ]);

  const handleInputChange = (index, event) => {
    const newRecipients = [...recipients];
    newRecipients[index][event.target.name] = event.target.value;
    setRecipients(newRecipients);
  };

  const handlePayout = async (event) => {
    event.preventDefault();

    try {
      for (let recipient of recipients) {
        const response = await axios.post("http://localhost:5000/payout", {
          email: recipient.email,
          valueInUSD: recipient.amount,
          currency: recipient.currency,
        });

        if (response.data.status !== "success") {
          console.error("Payment failed for recipient:", recipient);
          setIsPaymentSuccessful(false);
          return;
        }
      }

      console.log("Payment successful!");
      setIsPaymentSuccessful(true);
    } catch (error) {
      console.error("Payment failed!", error);
      setIsPaymentSuccessful(false);
    }

    setTimeout(() => {
      setIsPaymentSuccessful(null);
    }, 5000);
  };

  const handleShowPayoutForm = () => {
    setShowPayoutForm(true);
  };

  const handleAddRecipient = () => {
    setRecipients([...recipients, { email: "", currency: "USD", amount: "" }]);
  };

  const handleRemoveRecipient = (index) => {
    const newRecipients = recipients.filter((_, i) => i !== index);
    setRecipients(newRecipients);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome HR!</h1>
        <p>Manage your employee payouts here.</p>
        {!showPayoutForm && (
          <button onClick={handleShowPayoutForm}>Pay Employees</button>
        )}
        {showPayoutForm && (
          <form onSubmit={handlePayout}>
            {recipients.map((recipient, index) => (
              <div key={index} className="recipient-box">
                <button
                  type="button"
                  className="remove-recipient"
                  onClick={() => handleRemoveRecipient(index)}
                >
                  &times;
                </button>
                <label htmlFor={`email-${index}`}>Employee Email</label>
                <input
                  type="email"
                  id={`email-${index}`}
                  name="email"
                  value={recipient.email}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
                <label htmlFor={`currency-${index}`}>Currency</label>
                <select
                  id={`currency-${index}`}
                  name="currency"
                  value={recipient.currency}
                  onChange={(e) => handleInputChange(index, e)}
                >
                  <option value="USD">USD</option>
                  <option value="CAD">CAD</option>
                  <option value="NGN">NGN</option>
                </select>
                <label htmlFor={`amount-${index}`}>Amount</label>
                <input
                  type="number"
                  id={`amount-${index}`}
                  name="amount"
                  value={recipient.amount}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddRecipient}
              className="add-recipient"
            >
              + Add a Recipient
            </button>
            <button type="submit">Pay Employees</button>
          </form>
        )}
        {isPaymentSuccessful !== null && (
          <div className="payout-message">
            {isPaymentSuccessful ? (
              <h2 className="success">Congratulations, Payout sent!</h2>
            ) : (
              <h3 className="error">Error when paying out.</h3>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
