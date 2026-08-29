const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/data/json/testimonials/testimonials.json');

const content = `[
  {
    "id": 1,
    "quote": "RockScale built us a document intelligence pipeline that reduced our contract review time by 70%. Their understanding of LLMs in a compliance context was unlike any vendor we had worked with before.",
    "avatar": "/images/ns-avatar-1.png",
    "name": "Sarah Okonkwo",
    "position": "Chief Legal Officer, FinServe Capital",
    "rating": "5.0"
  },
  {
    "id": 2,
    "quote": "We came to RockScale with disconnected data across six systems. Within 12 weeks they had built us a unified data warehouse and a predictive churn model that now runs in production daily.",
    "avatar": "/images/ns-avatar-2.png",
    "name": "Michael Chen",
    "position": "VP of Engineering, Veritas Health",
    "rating": "5.0"
  },
  {
    "id": 3,
    "quote": "The team is genuinely rare — they think like engineers and communicate like consultants. Our AI strategy is now board-level material thanks to the work RockScale did in our discovery phase.",
    "avatar": "/images/ns-avatar-3.png",
    "name": "Emma Fitzgerald",
    "position": "Chief Data Officer, NovaTrade Logistics",
    "rating": "4.9"
  }
]`;

fs.writeFileSync(targetFile, content);
console.log('Testimonials truncated to 3.');
