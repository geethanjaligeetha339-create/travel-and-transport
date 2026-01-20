function botReply(type) {
    let chatBox = document.getElementById("chat-box");

    let userText = type.charAt(0).toUpperCase() + type.slice(1);
    chatBox.innerHTML += `<div class="user">You: ${userText}</div>`;

    let reply = "";

    if (type === "countries") {
        reply = "🌍 Popular Travel Countries:<br>" +
                "🇮🇳 India<br>🇺🇸 USA<br>🇬🇧 UK<br>🇫🇷 France<br>🇯🇵 Japan<br>🇦🇺 Australia";
    }
    else if (type === "transport") {
        reply = "🚆 Transport Modes:<br>" +
                "✈️ Flight<br>🚆 Train<br>🚌 Bus<br>🚖 Taxi<br>🚢 Ship";
    }
    else if (type === "prices") {
        reply = "💰 Approx Travel Prices (from India):<br>" +
                "✈️ India → USA : ₹75,000<br>" +
                "✈️ India → UK : ₹60,000<br>" +
                "✈️ India → France : ₹65,000<br>" +
                "🚆 Train (Domestic): ₹500 – ₹3,000<br>" +
                "🚌 Bus (Domestic): ₹300 – ₹1,500";
    }
    else if (type === "booking") {
        reply = "🧾 Booking Help:<br>" +
                "You can book tickets via travel apps, railway websites, or airport counters.<br>" +
                "Online booking is faster and cheaper.";
    }

    chatBox.innerHTML += `<div class="bot">Bot: ${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}
