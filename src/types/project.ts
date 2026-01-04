export interface Project {
  id: string;                    // URL-safe identifier (e.g., "robotics-arm")
  title: string;                 // Display name
  description: string;           // Brief description for card
  image: string;                 // Imported image path
  tags: string[];                // Skill tags (e.g., ["Java", "Python", "Robotics"])
  displayDate: string;          // Non-standard date for display (e.g., "Spring 2023")
  effectiveDate: string ;         // Standard date for sorting (e.g., "2023-05-15")
  detailedDescription?: string;  // Optional: Full writeup for detail page
  demoUrl?: string;              // Optional: Live demo link
  demoButtonText?: string;       // Optional: Custom text for demo button (e.g., "Play Demo", "View Demo")
  githubUrl?: string;            // Optional: GitHub repository
  videoUrl?: string;             // Optional: Demo video
  institution?: string;          // Optional: Institution (e.g., "UC Berkeley")
  slidesUrl?: string;            // Optional: Presentation/slides URL
  presentationUrl?: string;      // Optional: Alternative presentation URL
}
