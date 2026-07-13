(function () {
  // ── Detect path depth for API endpoint ──────────────────
  const isSubpage = window.location.pathname.includes('/pages/');
  const API_URL = '/.netlify/functions/chat';
  const OPENING_MSG = "Hi! I'm Faiza's portfolio assistant. Ask me about her research, case studies, background, or how to get in touch.";
  const ERROR_MSG = "Sorry, I'm having a moment — please email Faiza directly at faiza.khan14.fk@gmail.com";

  // ── Inject HTML ──────────────────────────────────────────
  document.body.insertAdjacentHTML('beforeend', `
    <button id="chat-toggle" aria-label="Open chat">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              fill="#fff" opacity="0.95"/>
      </svg>
    </button>

    <div id="chat-panel" role="dialog" aria-label="Chat with Faiza's assistant">
      <div id="chat-header">
        <div>
          <div id="chat-header-title">Faiza's Portfolio Assistant</div>
          <div id="chat-header-sub">Ask me anything about her work</div>
        </div>
        <button id="chat-close" aria-label="Close chat">✕</button>
      </div>
      <div id="chat-messages"></div>
      <div id="chat-input-area">
        <input id="chat-input" type="text" placeholder="Ask something…" autocomplete="off" maxlength="500" />
        <button id="chat-send" aria-label="Send">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="22" y1="2" x2="11" y2="13" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2" fill="#fff"/>
          </svg>
        </button>
      </div>
    </div>
  `);

  // ── Refs ─────────────────────────────────────────────────
  const toggle   = document.getElementById('chat-toggle');
  const panel    = document.getElementById('chat-panel');
  const closeBtn = document.getElementById('chat-close');
  const messages = document.getElementById('chat-messages');
  const input    = document.getElementById('chat-input');
  const sendBtn  = document.getElementById('chat-send');

  let isOpen    = false;
  let isLoading = false;
  let history   = []; // [{role, content}] sent to API

  // ── Open / close ─────────────────────────────────────────
  function openPanel() {
    if (isOpen) return;
    isOpen = true;
    panel.classList.add('open');
    input.focus();
    if (messages.children.length === 0) addBubble('assistant', OPENING_MSG);
  }

  function closePanel() {
    isOpen = false;
    panel.classList.remove('open');
  }

  toggle.addEventListener('click', () => isOpen ? closePanel() : openPanel());
  closeBtn.addEventListener('click', closePanel);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closePanel();
  });

  // ── Bubble helpers ───────────────────────────────────────
  function addBubble(role, text) {
    const div = document.createElement('div');
    div.className = `chat-bubble ${role}`;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }

  function addLoading() {
    const div = document.createElement('div');
    div.className = 'chat-bubble loading';
    div.innerHTML = '<div class="chat-dots"><span></span><span></span><span></span></div>';
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }

  // ── Send ─────────────────────────────────────────────────
  async function send() {
    const text = input.value.trim();
    if (!text || isLoading) return;

    input.value = '';
    isLoading = true;
    sendBtn.disabled = true;

    addBubble('user', text);
    history.push({ role: 'user', content: text });

    const loader = addLoading();

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      loader.remove();

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      const reply = data.reply || ERROR_MSG;
      addBubble('assistant', reply);
      history.push({ role: 'assistant', content: reply });
    } catch {
      loader.remove();
      addBubble('assistant', ERROR_MSG);
    } finally {
      isLoading = false;
      sendBtn.disabled = false;
      input.focus();
    }
  }

  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  });
})();
