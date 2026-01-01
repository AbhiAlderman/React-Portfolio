export interface Project {
  id: string;                    // URL-safe identifier (e.g., "robotics-arm")
  title: string;                 // Display name
  description: string;           // Brief description for card
  image: string;                 // Imported image path
  tags: string[];                // Skill tags (e.g., ["Java", "Python", "Robotics"])
  detailedDescription?: string;  // Optional: Full writeup for detail page
  demoUrl?: string;              // Optional: Live demo link
  githubUrl?: string;            // Optional: GitHub repository
  videoUrl?: string;             // Optional: Demo video
  date?: string;                 // Optional: Date or timeframe (e.g., "Spring 2022", "2024")
  institution?: string;          // Optional: Institution (e.g., "UC Berkeley")
  slidesUrl?: string;            // Optional: Presentation/slides URL
  presentationUrl?: string;      // Optional: Alternative presentation URL
}
