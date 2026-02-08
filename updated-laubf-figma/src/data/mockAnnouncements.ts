export interface Announcement {
  id: string;
  title: string;
  date: string;
  type: 'important' | 'finance' | 'internal' | 'security' | 'general';
  summary: string;
  content: string;
}

export const mockAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "Sanctuary Renovation Update",
    date: "October 24, 2023",
    type: "important",
    summary: "The architectural plans for the main sanctuary have been approved by the city.",
    content: `
      <p class="mb-4">The architectural plans for the main sanctuary have been approved by the city. Construction is scheduled to begin in January 2024.</p>
      <p class="mb-4">We have successfully secured the necessary permits for the HVAC overhaul and the structural reinforcements required for the balcony expansion.</p>
      <h3 class="text-lg font-bold mb-2">Next Steps:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li><strong>November 15:</strong> Final contractor selection.</li>
        <li><strong>December 1:</strong> Site preparation begins.</li>
        <li><strong>January 5:</strong> Official groundbreaking ceremony.</li>
      </ul>
      <p>Please keep this project in your prayers as we move forward with the next phase of fundraising and logistics.</p>
    `
  },
  {
    id: "2",
    title: "Q4 Finance Report Available",
    date: "October 15, 2023",
    type: "finance",
    summary: "The quarterly financial statement for Q4 is now available for review.",
    content: `
      <p class="mb-4">The quarterly financial statement for Q4 is now available for review. We are grateful for your continued generosity and support of the church's mission.</p>
      <p class="mb-4">Key highlights include:</p>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>15% increase in mission giving.</li>
        <li>Fully funded youth retreat for upcoming winter.</li>
        <li>Reserves replenished to pre-pandemic levels.</li>
      </ul>
      <p>You can find the detailed PDF report in the Resources section of the Member Hub.</p>
    `
  },
  {
    id: "3",
    title: "Staff Meeting Notes - October",
    date: "October 10, 2023",
    type: "internal",
    summary: "Minutes from the monthly staff meeting regarding holiday planning.",
    content: `
      <p class="mb-4">Minutes from the monthly staff meeting are now available.</p>
      <h3 class="text-lg font-bold mb-2">Key Discussion Points:</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li><strong>Holiday Event Planning:</strong> Christmas service schedule finalized. We will have two services on Christmas Eve (5pm & 7pm).</li>
        <li><strong>Outreach Strategies:</strong> New campus outreach initiative starts next month.</li>
        <li><strong>Volunteer Coordination:</strong> Need more ushers for the 11am service.</li>
      </ul>
    `
  },
  {
    id: "4",
    title: "Updated Security Protocols",
    date: "September 28, 2023",
    type: "security",
    summary: "Please review the updated security protocols for Sunday services.",
    content: `
      <p class="mb-4">Please review the updated security protocols for Sunday services and mid-week meetings. These changes are intended to ensure the safety and well-being of our congregation and guests.</p>
      <p class="mb-4"><strong>Changes effective immediately:</strong></p>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Side doors will be locked 15 minutes after service starts.</li>
        <li>All volunteers must wear visible ID badges.</li>
        <li>New check-in system for the children's ministry.</li>
      </ul>
    `
  }
];
