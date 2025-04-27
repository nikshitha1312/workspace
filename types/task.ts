export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  subtasks?: {
    title: string;
    completed: boolean;
  }[];
  attachments?: {
    name: string;
    url: string;
  }[];
} 