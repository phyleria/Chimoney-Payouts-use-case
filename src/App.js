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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <header className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800">Welcome HR!</h1>
        <p className="text-center text-gray-600 mb-8">Manage your employee payouts here.</p>
          {!showPayoutForm && (
            <button
              onClick={handleShowPayoutForm}
              className="w-full bg-[#670c78] text-white py-2 px-4 rounded-lg hover:bg-[#520a60] focus:outline-none focus:ring-2 focus:ring-[#670c78] focus:ring-opacity-50 transition-colors"
            >
              Pay Employees
            </button>
          )}

          {showPayoutForm && (
            <form onSubmit={handlePayout} className="space-y-6">
              {recipients.map((recipient, index) => (
                <div key={index} className="relative bg-gray-50 p-4 rounded-lg shadow-inner ml-12">
                <button
                    type="button"
                    className="absolute top-1 right-1 p-1 rounded-full bg-gray-200 text-gray-600 hover:bg-red-500 hover:text-white transition-colors"
                    onClick={() => handleRemoveRecipient(index)}
                  >
                    &times;
                  </button>
                  <label htmlFor={`email-${index}`} className="block text-sm font-medium text-gray-700">Employee Email</label>
                  <input
                    type="email"
                    id={`email-${index}`}
                    name="email"
                    value={recipient.email}
                    onChange={(e) => handleInputChange(index, e)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#670c78] focus:border-[#670c78] sm:text-sm"
                  />
                  <label htmlFor={`currency-${index}`} className="block text-sm font-medium text-gray-700 mt-4">Currency</label>
                  <select
                    id={`currency-${index}`}
                    name="currency"
                    value={recipient.currency}
                    onChange={(e) => handleInputChange(index, e)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#670c78] focus:border-[#670c78] sm:text-sm"
                  >
                    <option value="USD">USD</option>
                    <option value="CAD">CAD</option>
                    <option value="NGN">NGN</option>
                  </select>
                  <label htmlFor={`amount-${index}`} className="block text-sm font-medium text-gray-700 mt-4">Amount</label>
                  <input
                    type="number"
                    id={`amount-${index}`}
                    name="amount"
                    value={recipient.amount}
                    onChange={(e) => handleInputChange(index, e)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#670c78] focus:border-[#670c78] sm:text-sm"
                  />
                  
                </div>
                
              ))}
              
      
              <button
                type="button"
                onClick={handleAddRecipient}
                className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 transition-colors"
              >
                + Add a Recipient
              </button>
              <button
                type="submit"
                className="w-full bg-[#670c78] text-white py-2 px-4 rounded-lg hover:bg-[#520a60] focus:outline-none focus:ring-2 focus:ring-[#670c78] focus:ring-opacity-50 transition-colors"
              >
                Pay Employees
              </button>
            </form>
          )}
          {isPaymentSuccessful !== null && (
            <div className={`mt-6 text-center p-4 rounded-lg ${isPaymentSuccessful ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {isPaymentSuccessful ? (
                <h2 className="text-lg font-semibold">Congratulations, Payout sent!</h2>
              ) : (
                <h3 className="text-lg font-semibold">Error when paying out.</h3>
              )}
            </div>
          )}
      </header>
    </div>
  );
}

export default App;
