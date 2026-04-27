import fs from 'fs';
const content = fs.readFileSync('/app/applet/src/data/articles.tsx', 'utf8');
const fixed = content.replace(/role: 'Full-production: ресерч, посещени.*content: \(/, "role: 'Full-production: ресерч, посещение мероприятия, интервью, расшифровка, продакшн',\n    content: (");
fs.writeFileSync('/app/applet/src/data/articles.tsx', fixed);
