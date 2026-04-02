"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionApi = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class EvolutionApi {
    constructor() {
        this.description = {
            displayName: 'Evolution API',
            name: 'evolutionApi',
            icon: 'file:evolutionapi.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
            description: 'Interact with Evolution API for WhatsApp integration - full feature set',
            defaults: {
                name: 'Evolution API',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'evolutionApi',
                    required: true,
                },
            ],
            properties: [
                // ─────────────── INSTANCE NAME ───────────────
                {
                    displayName: 'Instance Name',
                    name: 'instanceName',
                    type: 'string',
                    default: '',
                    placeholder: 'my-instance',
                    description: 'Name of the WhatsApp instance to use',
                    displayOptions: {
                        hide: {
                            resource: ['instance'],
                        },
                    },
                },
                // ─────────────── RESOURCE ───────────────
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        { name: 'Instance', value: 'instance' },
                        { name: 'Message', value: 'message' },
                        { name: 'Chat', value: 'chat' },
                        { name: 'Group', value: 'group' },
                        { name: 'Profile', value: 'profile' },
                        { name: 'Webhook', value: 'webhook' },
                        { name: 'Settings', value: 'settings' },
                        { name: 'Label', value: 'label' },
                        { name: 'Integration', value: 'integration' },
                    ],
                    default: 'message',
                },
                // ═══════════════════════════════════════
                //  INSTANCE OPERATIONS
                // ═══════════════════════════════════════
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['instance'] } },
                    options: [
                        { name: 'Create Instance', value: 'createInstance', action: 'Create a new instance' },
                        { name: 'Fetch Instances', value: 'fetchInstances', action: 'Fetch all instances' },
                        { name: 'Connect', value: 'connect', action: 'Connect an instance (get QR code)' },
                        { name: 'Connection State', value: 'connectionState', action: 'Get connection state' },
                        { name: 'Restart', value: 'restart', action: 'Restart an instance' },
                        { name: 'Logout', value: 'logout', action: 'Logout an instance' },
                        { name: 'Delete Instance', value: 'deleteInstance', action: 'Delete an instance' },
                        { name: 'Set Presence', value: 'setPresence', action: 'Set instance presence' },
                    ],
                    default: 'fetchInstances',
                },
                // ═══════════════════════════════════════
                //  MESSAGE OPERATIONS
                // ═══════════════════════════════════════
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['message'] } },
                    options: [
                        { name: 'Send Text', value: 'sendText', action: 'Send a text message' },
                        { name: 'Send Media (URL)', value: 'sendMedia', action: 'Send image/video/document via URL' },
                        { name: 'Send Media (Base64)', value: 'sendMediaBase64', action: 'Send media as base64' },
                        { name: 'Send Audio', value: 'sendAudio', action: 'Send an audio message' },
                        { name: 'Send Location', value: 'sendLocation', action: 'Send a location' },
                        { name: 'Send Contact', value: 'sendContact', action: 'Send a contact vCard' },
                        { name: 'Send Reaction', value: 'sendReaction', action: 'React to a message' },
                        { name: 'Send Poll', value: 'sendPoll', action: 'Send a poll' },
                        { name: 'Send List', value: 'sendList', action: 'Send a list message' },
                        { name: 'Send Buttons', value: 'sendButtons', action: 'Send a button message' },
                        { name: 'Send Template', value: 'sendTemplate', action: 'Send a template message (Business API)' },
                        { name: 'Send Status (Story)', value: 'sendStatus', action: 'Send a status update' },
                        { name: 'Reply to Message', value: 'sendReply', action: 'Reply to a specific message' },
                        { name: 'Delete Message', value: 'deleteMessage', action: 'Delete a message' },
                        { name: 'Edit Message', value: 'editMessage', action: 'Edit a sent message' },
                        { name: 'Mark as Read', value: 'readMessages', action: 'Mark messages as read' },
                    ],
                    default: 'sendText',
                },
                // ═══════════════════════════════════════
                //  CHAT OPERATIONS
                // ═══════════════════════════════════════
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['chat'] } },
                    options: [
                        { name: 'Find Chats', value: 'findChats', action: 'Find all chats' },
                        { name: 'Find Messages', value: 'findMessages', action: 'Find messages in a chat' },
                        { name: 'Find Status', value: 'findStatusMessage', action: 'Find status messages' },
                        { name: 'Archive Chat', value: 'archiveChat', action: 'Archive a chat' },
                        { name: 'Unarchive Chat', value: 'unarchiveChat', action: 'Unarchive a chat' },
                        { name: 'Mute Chat', value: 'muteChat', action: 'Mute a chat' },
                        { name: 'Unmute Chat', value: 'unmuteChat', action: 'Unmute a chat' },
                        { name: 'Delete Chat', value: 'deleteChat', action: 'Delete a chat' },
                        { name: 'Pin Message', value: 'pinMessage', action: 'Pin a message' },
                        { name: 'Unpin Message', value: 'unpinMessage', action: 'Unpin a message' },
                        { name: 'Check Number', value: 'checkNumber', action: 'Check if a number exists on WhatsApp' },
                        { name: 'Get Profile Picture', value: 'profilePicture', action: 'Get a contact profile picture' },
                        { name: 'Block Contact', value: 'blockContact', action: 'Block a contact' },
                        { name: 'Unblock Contact', value: 'unblockContact', action: 'Unblock a contact' },
                        { name: 'Get Media URL', value: 'getMediaUrl', action: 'Get media URL from message' },
                    ],
                    default: 'findChats',
                },
                // ═══════════════════════════════════════
                //  GROUP OPERATIONS
                // ═══════════════════════════════════════
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['group'] } },
                    options: [
                        { name: 'Create Group', value: 'createGroup', action: 'Create a new group' },
                        { name: 'Update Group Name', value: 'updateGroupName', action: 'Update group name' },
                        { name: 'Update Group Description', value: 'updateGroupDescription', action: 'Update group description' },
                        { name: 'Update Group Picture', value: 'updateGroupPicture', action: 'Update group profile picture' },
                        { name: 'Fetch All Groups', value: 'fetchAllGroups', action: 'Fetch all groups' },
                        { name: 'Find Group by Invite Code', value: 'findGroupByInviteCode', action: 'Find group by invite link' },
                        { name: 'Find Group by JID', value: 'findGroupByJid', action: 'Find a group by JID' },
                        { name: 'Fetch Participants', value: 'fetchParticipants', action: 'Fetch group participants' },
                        { name: 'Add Participants', value: 'addParticipants', action: 'Add participants to group' },
                        { name: 'Remove Participants', value: 'removeParticipants', action: 'Remove participants from group' },
                        { name: 'Promote Participants', value: 'promoteParticipants', action: 'Promote participants to admin' },
                        { name: 'Demote Participants', value: 'demoteParticipants', action: 'Demote participants from admin' },
                        { name: 'Get Invite Code', value: 'inviteCode', action: 'Get group invite code' },
                        { name: 'Revoke Invite Code', value: 'revokeInviteCode', action: 'Revoke group invite code' },
                        { name: 'Accept Invite Code', value: 'acceptInviteCode', action: 'Join group via invite code' },
                        { name: 'Leave Group', value: 'leaveGroup', action: 'Leave a group' },
                        { name: 'Toggle Ephemeral', value: 'toggleEphemeral', action: 'Toggle ephemeral messages' },
                        { name: 'Update Setting', value: 'updateSetting', action: 'Update group settings (who can send)' },
                    ],
                    default: 'fetchAllGroups',
                },
                // ═══════════════════════════════════════
                //  PROFILE OPERATIONS
                // ═══════════════════════════════════════
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['profile'] } },
                    options: [
                        { name: 'Fetch Profile', value: 'fetchProfile', action: 'Fetch own profile' },
                        { name: 'Update Profile Name', value: 'updateProfileName', action: 'Update profile name' },
                        { name: 'Update Profile Status', value: 'updateProfileStatus', action: 'Update profile status' },
                        { name: 'Update Profile Picture', value: 'updateProfilePicture', action: 'Update profile picture' },
                        { name: 'Remove Profile Picture', value: 'removeProfilePicture', action: 'Remove profile picture' },
                        { name: 'Fetch Privacy Settings', value: 'fetchPrivacySettings', action: 'Get privacy settings' },
                        { name: 'Update Privacy Settings', value: 'updatePrivacySettings', action: 'Update privacy settings' },
                    ],
                    default: 'fetchProfile',
                },
                // ═══════════════════════════════════════
                //  WEBHOOK OPERATIONS
                // ═══════════════════════════════════════
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['webhook'] } },
                    options: [
                        { name: 'Set Webhook', value: 'setWebhook', action: 'Configure webhook URL and events' },
                        { name: 'Find Webhook', value: 'findWebhook', action: 'Get current webhook configuration' },
                    ],
                    default: 'findWebhook',
                },
                // ═══════════════════════════════════════
                //  SETTINGS OPERATIONS
                // ═══════════════════════════════════════
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['settings'] } },
                    options: [
                        { name: 'Find Settings', value: 'findSettings', action: 'Get instance settings' },
                        { name: 'Set Settings', value: 'setSettings', action: 'Update instance settings' },
                    ],
                    default: 'findSettings',
                },
                // ═══════════════════════════════════════
                //  LABEL OPERATIONS
                // ═══════════════════════════════════════
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['label'] } },
                    options: [
                        { name: 'Find Labels', value: 'findLabels', action: 'Find all labels' },
                        { name: 'Add Label to Chat', value: 'addLabel', action: 'Add a label to a chat' },
                        { name: 'Remove Label from Chat', value: 'removeLabel', action: 'Remove a label from a chat' },
                    ],
                    default: 'findLabels',
                },
                // ═══════════════════════════════════════
                //  INTEGRATION OPERATIONS
                // ═══════════════════════════════════════
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['integration'] } },
                    options: [
                        { name: 'Set Chatwoot', value: 'setChatwoot', action: 'Configure Chatwoot integration' },
                        { name: 'Find Chatwoot', value: 'findChatwoot', action: 'Get Chatwoot configuration' },
                        { name: 'Set Typebot', value: 'setTypebot', action: 'Configure Typebot integration' },
                        { name: 'Find Typebot', value: 'findTypebot', action: 'Get Typebot configuration' },
                        { name: 'Set OpenAI', value: 'setOpenAI', action: 'Configure OpenAI integration' },
                        { name: 'Find OpenAI', value: 'findOpenAI', action: 'Get OpenAI configuration' },
                        { name: 'Set RabbitMQ', value: 'setRabbitMQ', action: 'Configure RabbitMQ integration' },
                        { name: 'Find RabbitMQ', value: 'findRabbitMQ', action: 'Get RabbitMQ configuration' },
                        { name: 'Set SQS', value: 'setSqs', action: 'Configure Amazon SQS integration' },
                        { name: 'Find SQS', value: 'findSqs', action: 'Get SQS configuration' },
                        { name: 'Set Websocket', value: 'setWebsocket', action: 'Configure Websocket integration' },
                        { name: 'Find Websocket', value: 'findWebsocket', action: 'Get Websocket configuration' },
                    ],
                    default: 'findChatwoot',
                },
                // ─────────────────────────────────────────────
                //  SHARED FIELDS
                // ─────────────────────────────────────────────
                // Instance name for operations that need it
                {
                    displayName: 'Instance Name',
                    name: 'instanceNameParam',
                    type: 'string',
                    default: '',
                    placeholder: 'my-instance',
                    displayOptions: {
                        show: {
                            resource: ['instance'],
                            operation: [
                                'connect', 'connectionState', 'restart', 'logout',
                                'deleteInstance', 'setPresence',
                            ],
                        },
                    },
                    description: 'Name of the instance',
                },
                // ─── Recipient Number ───
                {
                    displayName: 'To (Phone Number)',
                    name: 'number',
                    type: 'string',
                    default: '',
                    placeholder: '5511999999999',
                    description: 'Phone number with country code (no + or spaces)',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: [
                                'sendText', 'sendMedia', 'sendMediaBase64', 'sendAudio',
                                'sendLocation', 'sendContact', 'sendReaction', 'sendPoll',
                                'sendList', 'sendButtons', 'sendTemplate', 'sendStatus',
                                'sendReply',
                            ],
                        },
                    },
                },
                // ─── Text Message ───
                {
                    displayName: 'Text',
                    name: 'text',
                    type: 'string',
                    typeOptions: { rows: 4 },
                    default: '',
                    description: 'The message text to send. Supports WhatsApp formatting (*bold*, _italic_, ~strikethrough~)',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendText', 'sendReply'],
                        },
                    },
                },
                // ─── Media URL ───
                {
                    displayName: 'Media URL',
                    name: 'mediaUrl',
                    type: 'string',
                    default: '',
                    placeholder: 'https://example.com/image.jpg',
                    description: 'URL of the media file to send',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendMedia', 'sendAudio'],
                        },
                    },
                },
                // ─── Media Type ───
                {
                    displayName: 'Media Type',
                    name: 'mediaType',
                    type: 'options',
                    options: [
                        { name: 'Image', value: 'image' },
                        { name: 'Video', value: 'video' },
                        { name: 'Document', value: 'document' },
                        { name: 'Audio', value: 'audio' },
                        { name: 'Sticker', value: 'sticker' },
                    ],
                    default: 'image',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendMedia', 'sendMediaBase64'],
                        },
                    },
                },
                // ─── Media Base64 ───
                {
                    displayName: 'Media (Base64)',
                    name: 'mediaBase64',
                    type: 'string',
                    typeOptions: { rows: 4 },
                    default: '',
                    description: 'Base64 encoded media content',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendMediaBase64'],
                        },
                    },
                },
                // ─── Mimetype ───
                {
                    displayName: 'MIME Type',
                    name: 'mimetype',
                    type: 'string',
                    default: 'image/jpeg',
                    placeholder: 'image/jpeg',
                    description: 'MIME type of the media (e.g. image/jpeg, video/mp4, application/pdf)',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendMediaBase64'],
                        },
                    },
                },
                // ─── File Name ───
                {
                    displayName: 'File Name',
                    name: 'fileName',
                    type: 'string',
                    default: 'file',
                    description: 'File name for the document',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendMedia', 'sendMediaBase64'],
                        },
                    },
                },
                // ─── GIF Playback ───
                {
                    displayName: 'GIF Playback',
                    name: 'gifPlayback',
                    type: 'boolean',
                    default: false,
                    description: 'Whether to send the video as a GIF (auto-play, no sound). Only applies when Media Type is Video.',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendMedia', 'sendMediaBase64'],
                            mediaType: ['video'],
                        },
                    },
                },
                // ─── Caption ───
                {
                    displayName: 'Caption',
                    name: 'caption',
                    type: 'string',
                    default: '',
                    description: 'Caption for the media',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendMedia', 'sendMediaBase64'],
                        },
                    },
                },
                // ─── Location Fields ───
                {
                    displayName: 'Latitude',
                    name: 'latitude',
                    type: 'number',
                    default: 0,
                    typeOptions: { numberPrecision: 6 },
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendLocation'],
                        },
                    },
                },
                {
                    displayName: 'Longitude',
                    name: 'longitude',
                    type: 'number',
                    default: 0,
                    typeOptions: { numberPrecision: 6 },
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendLocation'],
                        },
                    },
                },
                {
                    displayName: 'Location Name',
                    name: 'locationName',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendLocation'],
                        },
                    },
                },
                {
                    displayName: 'Location Address',
                    name: 'locationAddress',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendLocation'],
                        },
                    },
                },
                // ─── Contact vCard Fields ───
                {
                    displayName: 'Contact Full Name',
                    name: 'contactFullName',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendContact'],
                        },
                    },
                },
                {
                    displayName: 'Contact Phone Number',
                    name: 'contactPhone',
                    type: 'string',
                    default: '',
                    placeholder: '5511999999999',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendContact'],
                        },
                    },
                },
                {
                    displayName: 'Contact Organization',
                    name: 'contactOrg',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendContact'],
                        },
                    },
                },
                // ─── Reaction Fields ───
                {
                    displayName: 'Message ID to React',
                    name: 'reactionMessageId',
                    type: 'string',
                    default: '',
                    description: 'The ID of the message to react to',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendReaction'],
                        },
                    },
                },
                {
                    displayName: 'Reaction Emoji',
                    name: 'reactionEmoji',
                    type: 'string',
                    default: '👍',
                    description: 'Emoji to react with. Use empty string to remove reaction.',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendReaction'],
                        },
                    },
                },
                // ─── Poll Fields ───
                {
                    displayName: 'Poll Name',
                    name: 'pollName',
                    type: 'string',
                    default: '',
                    description: 'Title / question of the poll',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendPoll'],
                        },
                    },
                },
                {
                    displayName: 'Poll Options',
                    name: 'pollValues',
                    type: 'string',
                    default: 'Option 1, Option 2, Option 3',
                    description: 'Comma-separated poll options',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendPoll'],
                        },
                    },
                },
                {
                    displayName: 'Select Count',
                    name: 'pollSelectableCount',
                    type: 'number',
                    default: 1,
                    description: 'How many options can be selected',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendPoll'],
                        },
                    },
                },
                // ─── Reply Fields ───
                {
                    displayName: 'Quoted Message ID',
                    name: 'quotedMessageId',
                    type: 'string',
                    default: '',
                    description: 'ID of the message to reply to',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['sendReply'],
                        },
                    },
                },
                // ─── Delete/Edit Message Fields ───
                {
                    displayName: 'Message ID',
                    name: 'messageId',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['deleteMessage', 'editMessage', 'pinMessage', 'unpinMessage'],
                        },
                    },
                },
                {
                    displayName: 'New Text',
                    name: 'editText',
                    type: 'string',
                    default: '',
                    description: 'New content for the edited message',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['editMessage'],
                        },
                    },
                },
                // ─── Chat Number ───
                {
                    displayName: 'Chat Number / JID',
                    name: 'chatNumber',
                    type: 'string',
                    default: '',
                    placeholder: '5511999999999 or group@g.us',
                    displayOptions: {
                        show: {
                            resource: ['chat'],
                            operation: [
                                'findMessages', 'archiveChat', 'unarchiveChat', 'muteChat',
                                'unmuteChat', 'deleteChat', 'pinMessage', 'unpinMessage',
                                'checkNumber', 'profilePicture', 'blockContact', 'unblockContact',
                            ],
                        },
                    },
                },
                // ─── Message Limit ───
                {
                    displayName: 'Message Limit',
                    name: 'messageLimit',
                    type: 'number',
                    default: 20,
                    description: 'Number of messages to retrieve',
                    displayOptions: {
                        show: {
                            resource: ['chat'],
                            operation: ['findMessages'],
                        },
                    },
                },
                // ─── Mute Duration ───
                {
                    displayName: 'Mute Duration',
                    name: 'muteDuration',
                    type: 'options',
                    options: [
                        { name: '8 Hours', value: 'PT8H' },
                        { name: '1 Week', value: 'P1W' },
                        { name: '1 Year', value: 'P1Y' },
                        { name: 'Forever', value: 'FOREVER' },
                    ],
                    default: 'PT8H',
                    displayOptions: {
                        show: {
                            resource: ['chat'],
                            operation: ['muteChat'],
                        },
                    },
                },
                // ─── Group Fields ───
                {
                    displayName: 'Group Name',
                    name: 'groupName',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['group'],
                            operation: ['createGroup'],
                        },
                    },
                },
                {
                    displayName: 'Group JID',
                    name: 'groupJid',
                    type: 'string',
                    default: '',
                    placeholder: '123456789@g.us',
                    displayOptions: {
                        show: {
                            resource: ['group'],
                            operation: [
                                'updateGroupName', 'updateGroupDescription', 'updateGroupPicture',
                                'findGroupByJid', 'fetchParticipants', 'addParticipants',
                                'removeParticipants', 'promoteParticipants', 'demoteParticipants',
                                'inviteCode', 'revokeInviteCode', 'leaveGroup', 'toggleEphemeral', 'updateSetting',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Participants (Phone Numbers)',
                    name: 'participants',
                    type: 'string',
                    default: '',
                    placeholder: '5511999999999, 5511888888888',
                    description: 'Comma-separated phone numbers',
                    displayOptions: {
                        show: {
                            resource: ['group'],
                            operation: ['createGroup', 'addParticipants', 'removeParticipants', 'promoteParticipants', 'demoteParticipants'],
                        },
                    },
                },
                {
                    displayName: 'Group Description',
                    name: 'groupDescription',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['group'],
                            operation: ['updateGroupDescription'],
                        },
                    },
                },
                {
                    displayName: 'Group Picture URL',
                    name: 'groupPictureUrl',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['group'],
                            operation: ['updateGroupPicture'],
                        },
                    },
                },
                {
                    displayName: 'Invite Code',
                    name: 'inviteCode',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['group'],
                            operation: ['findGroupByInviteCode', 'acceptInviteCode'],
                        },
                    },
                },
                {
                    displayName: 'Ephemeral Duration (seconds)',
                    name: 'ephemeralDuration',
                    type: 'options',
                    options: [
                        { name: 'Disable', value: 0 },
                        { name: '24 Hours', value: 86400 },
                        { name: '7 Days', value: 604800 },
                        { name: '90 Days', value: 7776000 },
                    ],
                    default: 86400,
                    displayOptions: {
                        show: {
                            resource: ['group'],
                            operation: ['toggleEphemeral'],
                        },
                    },
                },
                {
                    displayName: 'Group Setting',
                    name: 'groupSetting',
                    type: 'options',
                    options: [
                        { name: 'All Participants Can Send Messages', value: 'not_announcement' },
                        { name: 'Only Admins Can Send Messages', value: 'announcement' },
                        { name: 'All Participants Can Edit Group Info', value: 'unlocked' },
                        { name: 'Only Admins Can Edit Group Info', value: 'locked' },
                    ],
                    default: 'not_announcement',
                    displayOptions: {
                        show: {
                            resource: ['group'],
                            operation: ['updateSetting'],
                        },
                    },
                },
                // ─── Profile Fields ───
                {
                    displayName: 'Profile Name',
                    name: 'profileName',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['profile'],
                            operation: ['updateProfileName'],
                        },
                    },
                },
                {
                    displayName: 'Profile Status',
                    name: 'profileStatus',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['profile'],
                            operation: ['updateProfileStatus'],
                        },
                    },
                },
                {
                    displayName: 'Profile Picture URL',
                    name: 'profilePictureUrl',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['profile'],
                            operation: ['updateProfilePicture'],
                        },
                    },
                },
                // ─── Webhook Fields ───
                {
                    displayName: 'Webhook URL',
                    name: 'webhookUrl',
                    type: 'string',
                    default: '',
                    placeholder: 'https://your-server.com/webhook',
                    displayOptions: {
                        show: {
                            resource: ['webhook'],
                            operation: ['setWebhook'],
                        },
                    },
                },
                {
                    displayName: 'Webhook Events',
                    name: 'webhookEvents',
                    type: 'multiOptions',
                    options: [
                        { name: 'Application Startup', value: 'APPLICATION_STARTUP' },
                        { name: 'QR Code Updated', value: 'QRCODE_UPDATED' },
                        { name: 'Messages Set', value: 'MESSAGES_SET' },
                        { name: 'Messages Upsert', value: 'MESSAGES_UPSERT' },
                        { name: 'Messages Update', value: 'MESSAGES_UPDATE' },
                        { name: 'Messages Delete', value: 'MESSAGES_DELETE' },
                        { name: 'Send Message', value: 'SEND_MESSAGE' },
                        { name: 'Contacts Set', value: 'CONTACTS_SET' },
                        { name: 'Contacts Upsert', value: 'CONTACTS_UPSERT' },
                        { name: 'Contacts Update', value: 'CONTACTS_UPDATE' },
                        { name: 'Presence Update', value: 'PRESENCE_UPDATE' },
                        { name: 'Chats Set', value: 'CHATS_SET' },
                        { name: 'Chats Upsert', value: 'CHATS_UPSERT' },
                        { name: 'Chats Update', value: 'CHATS_UPDATE' },
                        { name: 'Chats Delete', value: 'CHATS_DELETE' },
                        { name: 'Groups Upsert', value: 'GROUPS_UPSERT' },
                        { name: 'Groups Update', value: 'GROUPS_UPDATE' },
                        { name: 'Group Participants Update', value: 'GROUP_PARTICIPANTS_UPDATE' },
                        { name: 'Connection Update', value: 'CONNECTION_UPDATE' },
                        { name: 'Labels Edit', value: 'LABELS_EDIT' },
                        { name: 'Labels Association', value: 'LABELS_ASSOCIATION' },
                        { name: 'Call', value: 'CALL' },
                        { name: 'Typebot Start', value: 'TYPEBOT_START' },
                        { name: 'Typebot Change Status', value: 'TYPEBOT_CHANGE_STATUS' },
                        { name: 'Error', value: 'ERROR' },
                    ],
                    default: ['MESSAGES_UPSERT', 'CONNECTION_UPDATE'],
                    displayOptions: {
                        show: {
                            resource: ['webhook'],
                            operation: ['setWebhook'],
                        },
                    },
                },
                {
                    displayName: 'Webhook by Events',
                    name: 'webhookByEvents',
                    type: 'boolean',
                    default: false,
                    description: 'Whether to use separate webhook URLs for each event',
                    displayOptions: {
                        show: {
                            resource: ['webhook'],
                            operation: ['setWebhook'],
                        },
                    },
                },
                {
                    displayName: 'Webhook Base64',
                    name: 'webhookBase64',
                    type: 'boolean',
                    default: false,
                    description: 'Whether to send media as base64 in webhook payloads',
                    displayOptions: {
                        show: {
                            resource: ['webhook'],
                            operation: ['setWebhook'],
                        },
                    },
                },
                // ─── Settings Fields ───
                {
                    displayName: 'Reject Calls',
                    name: 'rejectCall',
                    type: 'boolean',
                    default: false,
                    displayOptions: {
                        show: {
                            resource: ['settings'],
                            operation: ['setSettings'],
                        },
                    },
                },
                {
                    displayName: 'Call Rejection Message',
                    name: 'msgCall',
                    type: 'string',
                    default: 'I cannot take calls right now.',
                    displayOptions: {
                        show: {
                            resource: ['settings'],
                            operation: ['setSettings'],
                        },
                    },
                },
                {
                    displayName: 'Groups Ignore',
                    name: 'groupsIgnore',
                    type: 'boolean',
                    default: false,
                    description: 'Whether to ignore group messages',
                    displayOptions: {
                        show: {
                            resource: ['settings'],
                            operation: ['setSettings'],
                        },
                    },
                },
                {
                    displayName: 'Always Online',
                    name: 'alwaysOnline',
                    type: 'boolean',
                    default: false,
                    displayOptions: {
                        show: {
                            resource: ['settings'],
                            operation: ['setSettings'],
                        },
                    },
                },
                {
                    displayName: 'Read Messages',
                    name: 'readMessages',
                    type: 'boolean',
                    default: false,
                    description: 'Whether to automatically mark messages as read',
                    displayOptions: {
                        show: {
                            resource: ['settings'],
                            operation: ['setSettings'],
                        },
                    },
                },
                {
                    displayName: 'Read Status',
                    name: 'readStatus',
                    type: 'boolean',
                    default: false,
                    description: 'Whether to automatically read status updates',
                    displayOptions: {
                        show: {
                            resource: ['settings'],
                            operation: ['setSettings'],
                        },
                    },
                },
                {
                    displayName: 'Sync Full History',
                    name: 'syncFullHistory',
                    type: 'boolean',
                    default: false,
                    description: 'Whether to sync full message history on connect',
                    displayOptions: {
                        show: {
                            resource: ['settings'],
                            operation: ['setSettings'],
                        },
                    },
                },
                // ─── Instance Create Fields ───
                {
                    displayName: 'New Instance Name',
                    name: 'newInstanceName',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['instance'],
                            operation: ['createInstance'],
                        },
                    },
                },
                {
                    displayName: 'Token',
                    name: 'instanceToken',
                    type: 'string',
                    default: '',
                    description: 'Optional custom token for the instance (leave empty to auto-generate)',
                    displayOptions: {
                        show: {
                            resource: ['instance'],
                            operation: ['createInstance'],
                        },
                    },
                },
                {
                    displayName: 'Connection Type',
                    name: 'connectionType',
                    type: 'options',
                    options: [
                        { name: 'Baileys (WhatsApp Web)', value: 'baileys' },
                        { name: 'Business API (Meta Official)', value: 'business' },
                    ],
                    default: 'baileys',
                    displayOptions: {
                        show: {
                            resource: ['instance'],
                            operation: ['createInstance'],
                        },
                    },
                },
                {
                    displayName: 'Presence',
                    name: 'presence',
                    type: 'options',
                    options: [
                        { name: 'Available', value: 'available' },
                        { name: 'Composing', value: 'composing' },
                        { name: 'Recording', value: 'recording' },
                        { name: 'Paused', value: 'paused' },
                        { name: 'Unavailable', value: 'unavailable' },
                    ],
                    default: 'available',
                    displayOptions: {
                        show: {
                            resource: ['instance'],
                            operation: ['setPresence'],
                        },
                    },
                },
                // ─── Label Fields ───
                {
                    displayName: 'Chat JID for Label',
                    name: 'labelChatJid',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['label'],
                            operation: ['addLabel', 'removeLabel'],
                        },
                    },
                },
                {
                    displayName: 'Label ID',
                    name: 'labelId',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['label'],
                            operation: ['addLabel', 'removeLabel'],
                        },
                    },
                },
                // ─── Chatwoot Fields ───
                {
                    displayName: 'Chatwoot Account ID',
                    name: 'chatwootAccountId',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['integration'],
                            operation: ['setChatwoot'],
                        },
                    },
                },
                {
                    displayName: 'Chatwoot URL',
                    name: 'chatwootUrl',
                    type: 'string',
                    default: '',
                    placeholder: 'https://app.chatwoot.com',
                    displayOptions: {
                        show: {
                            resource: ['integration'],
                            operation: ['setChatwoot'],
                        },
                    },
                },
                {
                    displayName: 'Chatwoot Token',
                    name: 'chatwootToken',
                    type: 'string',
                    typeOptions: { password: true },
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['integration'],
                            operation: ['setChatwoot'],
                        },
                    },
                },
                {
                    displayName: 'Chatwoot Sign MSG',
                    name: 'chatwootSignMsg',
                    type: 'boolean',
                    default: true,
                    displayOptions: {
                        show: {
                            resource: ['integration'],
                            operation: ['setChatwoot'],
                        },
                    },
                },
                {
                    displayName: 'Chatwoot Auto Create',
                    name: 'chatwootAutoCreate',
                    type: 'boolean',
                    default: true,
                    description: 'Whether to auto-create contacts in Chatwoot',
                    displayOptions: {
                        show: {
                            resource: ['integration'],
                            operation: ['setChatwoot'],
                        },
                    },
                },
                // ─── Typebot Fields ───
                {
                    displayName: 'Typebot URL',
                    name: 'typebotUrl',
                    type: 'string',
                    default: '',
                    placeholder: 'https://typebot.io',
                    displayOptions: {
                        show: {
                            resource: ['integration'],
                            operation: ['setTypebot'],
                        },
                    },
                },
                {
                    displayName: 'Typebot Name',
                    name: 'typebotName',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['integration'],
                            operation: ['setTypebot'],
                        },
                    },
                },
                {
                    displayName: 'Typebot Enabled',
                    name: 'typebotEnabled',
                    type: 'boolean',
                    default: true,
                    displayOptions: {
                        show: {
                            resource: ['integration'],
                            operation: ['setTypebot'],
                        },
                    },
                },
                // ─── OpenAI Fields ───
                {
                    displayName: 'OpenAI API Key',
                    name: 'openAiApiKey',
                    type: 'string',
                    typeOptions: { password: true },
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['integration'],
                            operation: ['setOpenAI'],
                        },
                    },
                },
                {
                    displayName: 'OpenAI Model',
                    name: 'openAiModel',
                    type: 'string',
                    default: 'gpt-3.5-turbo',
                    displayOptions: {
                        show: {
                            resource: ['integration'],
                            operation: ['setOpenAI'],
                        },
                    },
                },
                {
                    displayName: 'System Prompt',
                    name: 'openAiSystemPrompt',
                    type: 'string',
                    typeOptions: { rows: 4 },
                    default: '',
                    description: 'System prompt for the AI assistant',
                    displayOptions: {
                        show: {
                            resource: ['integration'],
                            operation: ['setOpenAI'],
                        },
                    },
                },
                // ─── Additional Options ───
                {
                    displayName: 'Options',
                    name: 'options',
                    type: 'collection',
                    placeholder: 'Add Option',
                    default: {},
                    options: [
                        {
                            displayName: 'Delay (ms)',
                            name: 'delay',
                            type: 'number',
                            default: 0,
                            description: 'Delay before sending message in milliseconds',
                        },
                        {
                            displayName: 'Link Preview',
                            name: 'linkPreview',
                            type: 'boolean',
                            default: true,
                            description: 'Whether to show link previews in messages',
                        },
                        {
                            displayName: 'Mentions',
                            name: 'mentions',
                            type: 'string',
                            default: '',
                            placeholder: '5511999999999, 5511888888888',
                            description: 'Comma-separated numbers to mention in the message',
                        },
                        {
                            displayName: 'Ephemeral (seconds)',
                            name: 'ephemeralExpiration',
                            type: 'number',
                            default: 0,
                            description: 'Set ephemeral message expiration in seconds (0 = no expiry)',
                        },
                    ],
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const credentials = await this.getCredentials('evolutionApi');
        const serverUrl = credentials.serverUrl.replace(/\/$/, '');
        const apiKey = credentials.apiKey;
        for (let i = 0; i < items.length; i++) {
            const resource = this.getNodeParameter('resource', i);
            const operation = this.getNodeParameter('operation', i);
            let method = 'GET';
            let endpoint = '';
            let body = {};
            // Get instance name (not needed for 'instance' resource in some ops)
            let instanceName = '';
            if (resource !== 'instance') {
                instanceName = this.getNodeParameter('instanceName', i);
            }
            // ══════════════════════════════════════════════
            //  INSTANCE OPERATIONS
            // ══════════════════════════════════════════════
            if (resource === 'instance') {
                if (operation === 'createInstance') {
                    method = 'POST';
                    endpoint = '/instance/create';
                    const name = this.getNodeParameter('newInstanceName', i);
                    const token = this.getNodeParameter('instanceToken', i);
                    const integration = this.getNodeParameter('connectionType', i);
                    body = { instanceName: name, integration };
                    if (token)
                        body.token = token;
                }
                else if (operation === 'fetchInstances') {
                    method = 'GET';
                    endpoint = '/instance/fetchInstances';
                }
                else {
                    const instName = this.getNodeParameter('instanceNameParam', i);
                    if (operation === 'connect') {
                        method = 'GET';
                        endpoint = `/instance/connect/${instName}`;
                    }
                    else if (operation === 'connectionState') {
                        method = 'GET';
                        endpoint = `/instance/connectionState/${instName}`;
                    }
                    else if (operation === 'restart') {
                        method = 'PUT';
                        endpoint = `/instance/restart/${instName}`;
                    }
                    else if (operation === 'logout') {
                        method = 'DELETE';
                        endpoint = `/instance/logout/${instName}`;
                    }
                    else if (operation === 'deleteInstance') {
                        method = 'DELETE';
                        endpoint = `/instance/delete/${instName}`;
                    }
                    else if (operation === 'setPresence') {
                        method = 'POST';
                        endpoint = `/instance/setPresence/${instName}`;
                        const presence = this.getNodeParameter('presence', i);
                        body = { presence };
                    }
                }
            }
            // ══════════════════════════════════════════════
            //  MESSAGE OPERATIONS
            // ══════════════════════════════════════════════
            else if (resource === 'message') {
                const number = this.getNodeParameter('number', i);
                const options = this.getNodeParameter('options', i);
                if (operation === 'sendText') {
                    method = 'POST';
                    endpoint = `/message/sendText/${instanceName}`;
                    const text = this.getNodeParameter('text', i);
                    body = { number, text };
                    if (options.delay)
                        body.delay = options.delay;
                    if (options.linkPreview !== undefined)
                        body.linkPreview = options.linkPreview;
                    if (options.mentions) {
                        body.mentionsEveryOne = false;
                        body.mentioned = options.mentions.split(',').map((m) => m.trim());
                    }
                }
                else if (operation === 'sendMedia') {
                    method = 'POST';
                    endpoint = `/message/sendMedia/${instanceName}`;
                    const mediaType = this.getNodeParameter('mediaType', i);
                    const mediaUrl = this.getNodeParameter('mediaUrl', i);
                    const caption = this.getNodeParameter('caption', i);
                    const fileName = this.getNodeParameter('fileName', i);
                    body = { number, mediatype: mediaType, media: mediaUrl, caption, fileName };
                    if (mediaType === 'video') {
                        const gifPlayback = this.getNodeParameter('gifPlayback', i);
                        if (gifPlayback)
                            body.gifPlayback = true;
                    }
                    if (options.delay)
                        body.delay = options.delay;
                }
                else if (operation === 'sendMediaBase64') {
                    method = 'POST';
                    endpoint = `/message/sendMedia/${instanceName}`;
                    const mediaType = this.getNodeParameter('mediaType', i);
                    const mediaBase64 = this.getNodeParameter('mediaBase64', i);
                    const mimetype = this.getNodeParameter('mimetype', i);
                    const caption = this.getNodeParameter('caption', i);
                    const fileName = this.getNodeParameter('fileName', i);
                    body = { number, mediatype: mediaType, media: mediaBase64, mimetype, caption, fileName };
                    if (mediaType === 'video') {
                        const gifPlayback = this.getNodeParameter('gifPlayback', i);
                        if (gifPlayback)
                            body.gifPlayback = true;
                    }
                }
                else if (operation === 'sendAudio') {
                    method = 'POST';
                    endpoint = `/message/sendWhatsAppAudio/${instanceName}`;
                    const mediaUrl = this.getNodeParameter('mediaUrl', i);
                    body = { number, audio: mediaUrl };
                    if (options.delay)
                        body.delay = options.delay;
                }
                else if (operation === 'sendLocation') {
                    method = 'POST';
                    endpoint = `/message/sendLocation/${instanceName}`;
                    const lat = this.getNodeParameter('latitude', i);
                    const lng = this.getNodeParameter('longitude', i);
                    const locName = this.getNodeParameter('locationName', i);
                    const address = this.getNodeParameter('locationAddress', i);
                    body = { number, latitude: lat, longitude: lng, name: locName, address };
                }
                else if (operation === 'sendContact') {
                    method = 'POST';
                    endpoint = `/message/sendContact/${instanceName}`;
                    const fullName = this.getNodeParameter('contactFullName', i);
                    const phone = this.getNodeParameter('contactPhone', i);
                    const org = this.getNodeParameter('contactOrg', i);
                    body = {
                        number,
                        contact: [{ fullName, wuid: phone, phoneNumber: phone, organization: org }],
                    };
                }
                else if (operation === 'sendReaction') {
                    method = 'POST';
                    endpoint = `/message/sendReaction/${instanceName}`;
                    const reactionMsgId = this.getNodeParameter('reactionMessageId', i);
                    const emoji = this.getNodeParameter('reactionEmoji', i);
                    body = { key: { id: reactionMsgId, remoteJid: number }, reaction: emoji };
                }
                else if (operation === 'sendPoll') {
                    method = 'POST';
                    endpoint = `/message/sendPoll/${instanceName}`;
                    const pollName = this.getNodeParameter('pollName', i);
                    const pollValues = this.getNodeParameter('pollValues', i)
                        .split(',')
                        .map((v) => v.trim());
                    const selectableCount = this.getNodeParameter('pollSelectableCount', i);
                    body = { number, name: pollName, values: pollValues, selectableCount };
                }
                else if (operation === 'sendList') {
                    method = 'POST';
                    endpoint = `/message/sendList/${instanceName}`;
                    body = { number };
                }
                else if (operation === 'sendButtons') {
                    method = 'POST';
                    endpoint = `/message/sendButtons/${instanceName}`;
                    body = { number };
                }
                else if (operation === 'sendTemplate') {
                    method = 'POST';
                    endpoint = `/message/sendTemplate/${instanceName}`;
                    body = { number };
                }
                else if (operation === 'sendStatus') {
                    method = 'POST';
                    endpoint = `/message/sendStatus/${instanceName}`;
                    body = {};
                }
                else if (operation === 'sendReply') {
                    method = 'POST';
                    endpoint = `/message/sendText/${instanceName}`;
                    const text = this.getNodeParameter('text', i);
                    const quotedId = this.getNodeParameter('quotedMessageId', i);
                    body = { number, text, quoted: { key: { id: quotedId } } };
                }
                else if (operation === 'deleteMessage') {
                    method = 'DELETE';
                    endpoint = `/chat/deleteMessage/${instanceName}`;
                    const msgId = this.getNodeParameter('messageId', i);
                    body = { id: msgId };
                }
                else if (operation === 'editMessage') {
                    method = 'PUT';
                    endpoint = `/message/updateMessage/${instanceName}`;
                    const msgId = this.getNodeParameter('messageId', i);
                    const editText = this.getNodeParameter('editText', i);
                    body = { number, key: { id: msgId }, text: editText };
                }
                else if (operation === 'readMessages') {
                    method = 'POST';
                    endpoint = `/chat/markMessageAsRead/${instanceName}`;
                    body = { readMessages: [{ remoteJid: number }] };
                }
            }
            // ══════════════════════════════════════════════
            //  CHAT OPERATIONS
            // ══════════════════════════════════════════════
            else if (resource === 'chat') {
                if (operation === 'findChats') {
                    method = 'GET';
                    endpoint = `/chat/findChats/${instanceName}`;
                }
                else if (operation === 'findMessages') {
                    method = 'GET';
                    const chatNumber = this.getNodeParameter('chatNumber', i);
                    const limit = this.getNodeParameter('messageLimit', i);
                    endpoint = `/chat/findMessages/${instanceName}?where[key.remoteJid]=${chatNumber}&limit=${limit}`;
                }
                else if (operation === 'findStatusMessage') {
                    method = 'GET';
                    endpoint = `/chat/findStatusMessage/${instanceName}`;
                }
                else if (operation === 'archiveChat') {
                    method = 'POST';
                    endpoint = `/chat/archiveChat/${instanceName}`;
                    const chatNumber = this.getNodeParameter('chatNumber', i);
                    body = { lastMessage: { key: { remoteJid: chatNumber } }, archive: true };
                }
                else if (operation === 'unarchiveChat') {
                    method = 'POST';
                    endpoint = `/chat/archiveChat/${instanceName}`;
                    const chatNumber = this.getNodeParameter('chatNumber', i);
                    body = { lastMessage: { key: { remoteJid: chatNumber } }, archive: false };
                }
                else if (operation === 'muteChat') {
                    method = 'POST';
                    endpoint = `/chat/muteChat/${instanceName}`;
                    const chatNumber = this.getNodeParameter('chatNumber', i);
                    const muteDuration = this.getNodeParameter('muteDuration', i);
                    body = { number: chatNumber, mute: true, duration: muteDuration };
                }
                else if (operation === 'unmuteChat') {
                    method = 'POST';
                    endpoint = `/chat/muteChat/${instanceName}`;
                    const chatNumber = this.getNodeParameter('chatNumber', i);
                    body = { number: chatNumber, mute: false };
                }
                else if (operation === 'deleteChat') {
                    method = 'DELETE';
                    endpoint = `/chat/deleteChat/${instanceName}`;
                    const chatNumber = this.getNodeParameter('chatNumber', i);
                    body = { id: chatNumber };
                }
                else if (operation === 'checkNumber') {
                    method = 'GET';
                    const chatNumber = this.getNodeParameter('chatNumber', i);
                    endpoint = `/chat/whatsappNumbers/${instanceName}?numbers=${chatNumber}`;
                }
                else if (operation === 'profilePicture') {
                    method = 'GET';
                    const chatNumber = this.getNodeParameter('chatNumber', i);
                    endpoint = `/chat/fetchProfilePictureUrl/${instanceName}?number=${chatNumber}`;
                }
                else if (operation === 'blockContact') {
                    method = 'PUT';
                    endpoint = `/chat/updateBlockStatus/${instanceName}`;
                    const chatNumber = this.getNodeParameter('chatNumber', i);
                    body = { number: chatNumber, status: 'block' };
                }
                else if (operation === 'unblockContact') {
                    method = 'PUT';
                    endpoint = `/chat/updateBlockStatus/${instanceName}`;
                    const chatNumber = this.getNodeParameter('chatNumber', i);
                    body = { number: chatNumber, status: 'unblock' };
                }
                else if (operation === 'getMediaUrl') {
                    method = 'GET';
                    endpoint = `/chat/getMediaUrl/${instanceName}`;
                }
            }
            // ══════════════════════════════════════════════
            //  GROUP OPERATIONS
            // ══════════════════════════════════════════════
            else if (resource === 'group') {
                if (operation === 'createGroup') {
                    method = 'POST';
                    endpoint = `/group/create/${instanceName}`;
                    const groupName = this.getNodeParameter('groupName', i);
                    const participants = this.getNodeParameter('participants', i)
                        .split(',')
                        .map((p) => p.trim());
                    body = { subject: groupName, participants };
                }
                else if (operation === 'fetchAllGroups') {
                    method = 'GET';
                    endpoint = `/group/fetchAllGroups/${instanceName}?getParticipants=false`;
                }
                else if (operation === 'findGroupByInviteCode') {
                    method = 'GET';
                    const code = this.getNodeParameter('inviteCode', i);
                    endpoint = `/group/inviteInfo/${instanceName}?inviteCode=${code}`;
                }
                else if (operation === 'findGroupByJid') {
                    method = 'GET';
                    const groupJid = this.getNodeParameter('groupJid', i);
                    endpoint = `/group/findGroupInfos/${instanceName}?groupJid=${groupJid}`;
                }
                else if (operation === 'fetchParticipants') {
                    method = 'GET';
                    const groupJid = this.getNodeParameter('groupJid', i);
                    endpoint = `/group/participants/${instanceName}?groupJid=${groupJid}`;
                }
                else if (['addParticipants', 'removeParticipants', 'promoteParticipants', 'demoteParticipants'].includes(operation)) {
                    method = 'PUT';
                    const groupJid = this.getNodeParameter('groupJid', i);
                    const participants = this.getNodeParameter('participants', i)
                        .split(',')
                        .map((p) => p.trim());
                    const actionMap = {
                        addParticipants: 'add',
                        removeParticipants: 'remove',
                        promoteParticipants: 'promote',
                        demoteParticipants: 'demote',
                    };
                    endpoint = `/group/updateParticipant/${instanceName}`;
                    body = { groupJid, action: actionMap[operation], participants };
                }
                else if (operation === 'updateGroupName') {
                    method = 'PUT';
                    endpoint = `/group/updateGroupSubject/${instanceName}`;
                    const groupJid = this.getNodeParameter('groupJid', i);
                    const groupName = this.getNodeParameter('groupName', i, '');
                    body = { groupJid, subject: groupName };
                }
                else if (operation === 'updateGroupDescription') {
                    method = 'PUT';
                    endpoint = `/group/updateGroupDescription/${instanceName}`;
                    const groupJid = this.getNodeParameter('groupJid', i);
                    const description = this.getNodeParameter('groupDescription', i);
                    body = { groupJid, description };
                }
                else if (operation === 'updateGroupPicture') {
                    method = 'PUT';
                    endpoint = `/group/updateGroupPicture/${instanceName}`;
                    const groupJid = this.getNodeParameter('groupJid', i);
                    const pictureUrl = this.getNodeParameter('groupPictureUrl', i);
                    body = { groupJid, image: pictureUrl };
                }
                else if (operation === 'inviteCode') {
                    method = 'GET';
                    const groupJid = this.getNodeParameter('groupJid', i);
                    endpoint = `/group/inviteCode/${instanceName}?groupJid=${groupJid}`;
                }
                else if (operation === 'revokeInviteCode') {
                    method = 'PUT';
                    endpoint = `/group/revokeInviteCode/${instanceName}`;
                    const groupJid = this.getNodeParameter('groupJid', i);
                    body = { groupJid };
                }
                else if (operation === 'acceptInviteCode') {
                    method = 'POST';
                    endpoint = `/group/acceptInviteCode/${instanceName}`;
                    const code = this.getNodeParameter('inviteCode', i);
                    body = { inviteCode: code };
                }
                else if (operation === 'leaveGroup') {
                    method = 'DELETE';
                    endpoint = `/group/leaveGroup/${instanceName}`;
                    const groupJid = this.getNodeParameter('groupJid', i);
                    body = { groupJid };
                }
                else if (operation === 'toggleEphemeral') {
                    method = 'PUT';
                    endpoint = `/group/toggleEphemeral/${instanceName}`;
                    const groupJid = this.getNodeParameter('groupJid', i);
                    const duration = this.getNodeParameter('ephemeralDuration', i);
                    body = { groupJid, expiration: duration };
                }
                else if (operation === 'updateSetting') {
                    method = 'PUT';
                    endpoint = `/group/updateSetting/${instanceName}`;
                    const groupJid = this.getNodeParameter('groupJid', i);
                    const setting = this.getNodeParameter('groupSetting', i);
                    body = { groupJid, action: setting };
                }
            }
            // ══════════════════════════════════════════════
            //  PROFILE OPERATIONS
            // ══════════════════════════════════════════════
            else if (resource === 'profile') {
                if (operation === 'fetchProfile') {
                    method = 'GET';
                    endpoint = `/chat/fetchProfile/${instanceName}`;
                }
                else if (operation === 'updateProfileName') {
                    method = 'POST';
                    endpoint = `/chat/updateProfileName/${instanceName}`;
                    const name = this.getNodeParameter('profileName', i);
                    body = { name };
                }
                else if (operation === 'updateProfileStatus') {
                    method = 'POST';
                    endpoint = `/chat/updateProfileStatus/${instanceName}`;
                    const status = this.getNodeParameter('profileStatus', i);
                    body = { status };
                }
                else if (operation === 'updateProfilePicture') {
                    method = 'PUT';
                    endpoint = `/chat/updateProfilePicture/${instanceName}`;
                    const pictureUrl = this.getNodeParameter('profilePictureUrl', i);
                    body = { picture: pictureUrl };
                }
                else if (operation === 'removeProfilePicture') {
                    method = 'DELETE';
                    endpoint = `/chat/removeProfilePicture/${instanceName}`;
                }
                else if (operation === 'fetchPrivacySettings') {
                    method = 'GET';
                    endpoint = `/chat/fetchPrivacySettings/${instanceName}`;
                }
                else if (operation === 'updatePrivacySettings') {
                    method = 'PUT';
                    endpoint = `/chat/updatePrivacySettings/${instanceName}`;
                    body = {};
                }
            }
            // ══════════════════════════════════════════════
            //  WEBHOOK OPERATIONS
            // ══════════════════════════════════════════════
            else if (resource === 'webhook') {
                if (operation === 'setWebhook') {
                    method = 'POST';
                    endpoint = `/webhook/set/${instanceName}`;
                    const webhookUrl = this.getNodeParameter('webhookUrl', i);
                    const events = this.getNodeParameter('webhookEvents', i);
                    const byEvents = this.getNodeParameter('webhookByEvents', i);
                    const base64 = this.getNodeParameter('webhookBase64', i);
                    body = {
                        webhook: {
                            url: webhookUrl,
                            enabled: true,
                            webhookByEvents: byEvents,
                            webhookBase64: base64,
                            events,
                        },
                    };
                }
                else if (operation === 'findWebhook') {
                    method = 'GET';
                    endpoint = `/webhook/find/${instanceName}`;
                }
            }
            // ══════════════════════════════════════════════
            //  SETTINGS OPERATIONS
            // ══════════════════════════════════════════════
            else if (resource === 'settings') {
                if (operation === 'findSettings') {
                    method = 'GET';
                    endpoint = `/settings/find/${instanceName}`;
                }
                else if (operation === 'setSettings') {
                    method = 'POST';
                    endpoint = `/settings/set/${instanceName}`;
                    body = {
                        settings: {
                            rejectCall: this.getNodeParameter('rejectCall', i),
                            msgCall: this.getNodeParameter('msgCall', i),
                            groupsIgnore: this.getNodeParameter('groupsIgnore', i),
                            alwaysOnline: this.getNodeParameter('alwaysOnline', i),
                            readMessages: this.getNodeParameter('readMessages', i),
                            readStatus: this.getNodeParameter('readStatus', i),
                            syncFullHistory: this.getNodeParameter('syncFullHistory', i),
                        },
                    };
                }
            }
            // ══════════════════════════════════════════════
            //  LABEL OPERATIONS
            // ══════════════════════════════════════════════
            else if (resource === 'label') {
                if (operation === 'findLabels') {
                    method = 'GET';
                    endpoint = `/label/findLabels/${instanceName}`;
                }
                else if (operation === 'addLabel') {
                    method = 'POST';
                    endpoint = `/label/handleLabel/${instanceName}`;
                    const chatJid = this.getNodeParameter('labelChatJid', i);
                    const labelId = this.getNodeParameter('labelId', i);
                    body = { number: chatJid, labelId, action: 'add' };
                }
                else if (operation === 'removeLabel') {
                    method = 'POST';
                    endpoint = `/label/handleLabel/${instanceName}`;
                    const chatJid = this.getNodeParameter('labelChatJid', i);
                    const labelId = this.getNodeParameter('labelId', i);
                    body = { number: chatJid, labelId, action: 'remove' };
                }
            }
            // ══════════════════════════════════════════════
            //  INTEGRATION OPERATIONS
            // ══════════════════════════════════════════════
            else if (resource === 'integration') {
                if (operation === 'setChatwoot') {
                    method = 'POST';
                    endpoint = `/chatwoot/set/${instanceName}`;
                    body = {
                        chatwoot: {
                            accountId: this.getNodeParameter('chatwootAccountId', i),
                            url: this.getNodeParameter('chatwootUrl', i),
                            token: this.getNodeParameter('chatwootToken', i),
                            signMsg: this.getNodeParameter('chatwootSignMsg', i),
                            autoCreate: this.getNodeParameter('chatwootAutoCreate', i),
                            enabled: true,
                        },
                    };
                }
                else if (operation === 'findChatwoot') {
                    method = 'GET';
                    endpoint = `/chatwoot/find/${instanceName}`;
                }
                else if (operation === 'setTypebot') {
                    method = 'POST';
                    endpoint = `/typebot/set/${instanceName}`;
                    body = {
                        typebot: {
                            url: this.getNodeParameter('typebotUrl', i),
                            typebot: this.getNodeParameter('typebotName', i),
                            enabled: this.getNodeParameter('typebotEnabled', i),
                        },
                    };
                }
                else if (operation === 'findTypebot') {
                    method = 'GET';
                    endpoint = `/typebot/find/${instanceName}`;
                }
                else if (operation === 'setOpenAI') {
                    method = 'POST';
                    endpoint = `/openai/set/${instanceName}`;
                    body = {
                        openai: {
                            apiKey: this.getNodeParameter('openAiApiKey', i),
                            model: this.getNodeParameter('openAiModel', i),
                            systemMessages: [{ content: this.getNodeParameter('openAiSystemPrompt', i) }],
                            enabled: true,
                        },
                    };
                }
                else if (operation === 'findOpenAI') {
                    method = 'GET';
                    endpoint = `/openai/find/${instanceName}`;
                }
                else if (operation === 'setRabbitMQ') {
                    method = 'POST';
                    endpoint = `/rabbitmq/set/${instanceName}`;
                    body = {};
                }
                else if (operation === 'findRabbitMQ') {
                    method = 'GET';
                    endpoint = `/rabbitmq/find/${instanceName}`;
                }
                else if (operation === 'setSqs') {
                    method = 'POST';
                    endpoint = `/sqs/set/${instanceName}`;
                    body = {};
                }
                else if (operation === 'findSqs') {
                    method = 'GET';
                    endpoint = `/sqs/find/${instanceName}`;
                }
                else if (operation === 'setWebsocket') {
                    method = 'POST';
                    endpoint = `/websocket/set/${instanceName}`;
                    body = {};
                }
                else if (operation === 'findWebsocket') {
                    method = 'GET';
                    endpoint = `/websocket/find/${instanceName}`;
                }
            }
            // ══════════════════════════════════════════════
            //  MAKE THE API CALL
            // ══════════════════════════════════════════════
            try {
                const requestOptions = {
                    method,
                    url: `${serverUrl}${endpoint}`,
                    headers: {
                        apikey: apiKey,
                        'Content-Type': 'application/json',
                    },
                    json: true,
                };
                if (Object.keys(body).length > 0) {
                    requestOptions.body = body;
                }
                const response = await this.helpers.request(requestOptions);
                returnData.push({
                    json: typeof response === 'string' ? JSON.parse(response) : response,
                    pairedItem: { item: i },
                });
            }
            catch (error) {
                if (this.continueOnFail()) {
                    const errorMessage = error instanceof Error ? error.message : String(error);
                    returnData.push({
                        json: { error: errorMessage },
                        pairedItem: { item: i },
                    });
                }
                else {
                    throw new n8n_workflow_1.NodeOperationError(this.getNode(), error, { itemIndex: i });
                }
            }
        }
        return [returnData];
    }
}
exports.EvolutionApi = EvolutionApi;
