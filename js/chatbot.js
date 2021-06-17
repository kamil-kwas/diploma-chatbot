window.watsonAssistantChatOptions = {
    integrationID: "ba6f2427-d24b-48c1-8075-db61ccb09a0d", // The ID of this integration.
    region: "eu-de", // The region your integration is hosted in.
    serviceInstanceID: "afa5ae63-bf94-44c1-96fe-1e583bb22fa8", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
  document.head.appendChild(t);
});