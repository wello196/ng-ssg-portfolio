export interface ProjectHighlight {
  label: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  index: string;
  status: string;
  visualIndex: string;
  category: string;
  title: string;
  description: string;
  screenshot: string;
  highlights: ProjectHighlight[];
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
}