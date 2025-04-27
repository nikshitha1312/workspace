'use client';

import { useState } from 'react';
import TaskList from '@/app/components/TaskList';
import TaskDetails from '@/app/components/TaskDetails';
import { Task } from '@/types/task';

// Sample tasks data (in a real app, this would come from an API or database)
const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Implement Authentication',
    description: 'Add user authentication using NextAuth.js',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2024-04-01',
    subtasks: [
      { title: 'Set up NextAuth.js', completed: true },
      { title: 'Implement login page', completed: false },
      { title: 'Add protected routes', completed: false },
    ],
  },
  {
    id: '2',
    title: 'Design System Updates',
    description: 'Update component library with new design tokens',
    status: 'todo',
    priority: 'medium',
    dueDate: '2024-04-15',
    subtasks: [
      { title: 'Update color palette', completed: false },
      { title: 'Refactor components', completed: false },
    ],
  },
  {
    id: '3',
    title: 'API Documentation',
    description: 'Write comprehensive API documentation',
    status: 'completed',
    priority: 'low',
    dueDate: '2024-03-20',
    attachments: [
      { name: 'API-Spec.pdf', url: '/docs/api-spec.pdf' },
    ],
  },
];

export default function TasksPage() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [showRightPane, setShowRightPane] = useState(false);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setShowRightPane(true);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Tasks</h1>
        <p className="mt-2 text-gray-400">
          Manage and track your project tasks
        </p>
      </div>

      <div className="flex gap-8">
        <div className={`flex-grow ${showRightPane ? 'w-2/3' : 'w-full'}`}>
          <TaskList tasks={sampleTasks} onTaskClick={handleTaskClick} />
        </div>
        
        {showRightPane && selectedTask && (
          <div className="w-1/3">
            <TaskDetails
              task={selectedTask}
              onClose={() => {
                setShowRightPane(false);
                setSelectedTask(null);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
} 