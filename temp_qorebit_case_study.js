const fs = require('fs');
const path = require('path');

const oldFilePath = path.join(__dirname, 'src/data/case-study/ai-powered-patient-care-solutions-in-healthcare.md');
const newFilePath = path.join(__dirname, 'src/data/case-study/qorebit-ai-application-platform.md');

const newContent = `---
title: 'Qorebit AI Application Platform'
thumbnail: '/images/Qorebit-Org_Dashboard.png'
description: 'The unified API for frontier intelligence, model routing, and enterprise workspace management.'
result: 'Reduced AI integration time by 80% and centralized API billing across the enterprise.'
showHomePage: true
before:
  - 'Fragmented API keys across multiple models'
  - 'Unpredictable billing and vendor lock-in'
  - 'No centralized observability for tokens'
  - 'Hard-coded integrations per AI provider'
after:
  - 'One unified OpenAI-compatible API'
  - 'Centralized billing and budget caps'
  - 'Enterprise observability and logging'
  - 'Seamless routing between Claude, GPT-4, and Gemini'
keyFeatures:
  - 'Unified Multi-Model Gateway'
  - 'Enterprise Workspace Management'
  - 'Token Tracking & Observability'
  - 'Smart Model Routing'
  - 'Granular RBAC (Role-Based Access Control)'
userReview:
  userName: 'David Chen'
  userImage: '/images/ns-avatar-11.png'
  userRole: 'VP of Engineering'
  reviewText: 'Qorebit completely eliminated our AI vendor lock-in. We switched our base URL, and instantly gained access to Anthropic and Mistral without rewriting our application.'
---

- **Company**: Qorebit AI (RockScale Internal)
- **Industry**: AI Infrastructure
- **Team Size**: Enterprise
- **Headquarters**: Remote
- **Use case**: Centralized AI model access, unified billing, and robust workspace management for engineering teams.
`;

// Remove the old file if it exists, write the new one
if (fs.existsSync(oldFilePath)) {
  fs.unlinkSync(oldFilePath);
}
fs.writeFileSync(newFilePath, newContent);

console.log('Case study updated to Qorebit AI Application Platform.');
