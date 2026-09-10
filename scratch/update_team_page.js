const fs = require('fs');
const path = require('path');

const processedTeam = JSON.parse(fs.readFileSync(path.join(__dirname, 'processed_team.json'), 'utf-8'));
const teamPagePath = path.join(__dirname, '../src/app/team/page.tsx');
let teamPageContent = fs.readFileSync(teamPagePath, 'utf-8');

const formattedTeamMembers = JSON.stringify(processedTeam, null, 2);

// Replace teamMembers array
const newTeamMembersCode = `const teamMembers: TeamMember[] = ${formattedTeamMembers};`;

teamPageContent = teamPageContent.replace(/const teamMembers: TeamMember\[\] = \[[\s\S]*?\];/m, newTeamMembersCode);

// Replace bg-pink-300 with bg-[#F52222] text-white
teamPageContent = teamPageContent.replaceAll('bg-pink-300', 'bg-[#F52222] text-white font-jansina font-normal');

// Add font-jansina to Meet The Team
teamPageContent = teamPageContent.replace('label="Meet The Team"', 'label="Meet The Team" className="font-jansina"');

fs.writeFileSync(teamPagePath, teamPageContent, 'utf-8');
console.log('Successfully updated team/page.tsx');
