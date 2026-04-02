# n8n-nodes-evolution-api

A comprehensive n8n community node for [Evolution API](https://github.com/EvolutionAPI/evolution-api) — the open-source WhatsApp integration platform.

## Features

This node exposes **all major Evolution API features** across 8 resources:

### 📱 Instance Management
- Create / Fetch / Delete instances
- Connect (get QR code), check connection state
- Restart, Logout
- Set Presence (available, composing, recording…)

### 💬 Messages
- **Send Text** — with link preview, mentions, delay
- **Send Media via URL** — image, video, document, sticker
- **Send Media via Base64** — encode and send binary content
- **Send Audio** — WhatsApp native audio messages
- **Send Location** — with name and address
- **Send Contact** — vCard contacts
- **Send Reaction** — emoji reactions to messages
- **Send Poll** — create polls with selectable options
- **Send List** — interactive list messages
- **Send Buttons** — button-based messages
- **Send Template** — Business API message templates
- **Send Status (Story)** — WhatsApp status updates
- **Reply to Message** — quoted replies
- **Delete Message** — delete sent messages
- **Edit Message** — edit text of sent messages
- **Mark as Read** — mark messages as read

### 🗂️ Chats
- Find all chats
- Find messages in a specific chat
- Find status messages
- Archive / Unarchive chats
- Mute / Unmute (8h, 1 week, 1 year, forever)
- Delete chat
- Pin / Unpin messages
- Check if a number has WhatsApp
- Fetch contact profile picture
- Block / Unblock contacts
- Get media URL from message

### 👥 Groups
- Create group
- Update group name, description, picture
- Fetch all groups
- Find group by JID or invite code
- Fetch participants
- Add / Remove / Promote / Demote participants
- Get / Revoke invite code
- Accept invite code (join group)
- Leave group
- Toggle ephemeral messages (24h, 7d, 90d)
- Update group settings (who can send / edit info)

### 👤 Profile
- Fetch own profile
- Update profile name, status, picture
- Remove profile picture
- Fetch / Update privacy settings

### 🔔 Webhooks
- Set webhook URL and select events
- Support for 25+ event types (messages, groups, connection, labels, etc.)
- Toggle per-event URLs and base64 media

### ⚙️ Settings
- Auto-reject calls with custom message
- Ignore group messages
- Always online mode
- Auto-read messages and status
- Sync full history

### 🏷️ Labels
- Find all labels
- Add / Remove labels from chats

### 🔗 Integrations
- **Chatwoot** — CRM integration setup
- **Typebot** — chatbot flow integration
- **OpenAI** — AI assistant configuration
- **RabbitMQ** — message queue integration
- **Amazon SQS** — queue integration
- **WebSocket** — real-time event streaming

---

## Installation

### In n8n

1. Go to **Settings → Community Nodes**
2. Click **Install**
3. Enter: `n8n-nodes-evolution-api`
4. Click **Install**

### Manual (self-hosted)

```bash
cd ~/.n8n/custom
npm install n8n-nodes-evolution-api
```

Then restart n8n.

---

## Setup

### Credentials

1. Create new credentials → **Evolution API**
2. Enter your **Server URL** (e.g. `https://your-evolution-api.com`)
3. Enter your **API Key**

---

## Usage Example

### Send a text message

1. Add the **Evolution API** node
2. Set **Resource** → `Message`
3. Set **Operation** → `Send Text`
4. Enter your **Instance Name**
5. Enter the **To** (phone with country code, e.g. `5511999999999`)
6. Enter the **Text**
7. Execute!

### Create an instance and get QR code

1. Resource: `Instance` → Operation: `Create Instance`
2. Fill in instance name
3. Connect with Resource: `Instance` → Operation: `Connect`
4. The response includes a `base64` QR code — display it or use it in a webhook

---

## Compatibility

- **Evolution API**: v2.x
- **n8n**: v0.214+
- **Node.js**: v18+

---

## License

MIT
