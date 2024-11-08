import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Create the config script
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "bVheeQ5EZc03Nbxg5AUiw",
        domain: "www.chatbase.co"
      };
    `;
    document.body.appendChild(configScript);

    // Create the embed script
    const embedScript = document.createElement('script');
    embedScript.src = "https://www.chatbase.co/embed.min.js";
    embedScript.setAttribute("chatbotId", "bVheeQ5EZc03Nbxg5AUiw");
    embedScript.setAttribute("domain", "www.chatbase.co");
    embedScript.defer = true;

    document.body.appendChild(embedScript);

    // Clean up the scripts on unmount
    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(embedScript);
    };
  }, []);

  return (
    <div>
      {/* Optionally, you can add a placeholder for your chatbot */}
      <div id="chatbot-container"></div>
    </div>
  );
};

export default Chatbot;
