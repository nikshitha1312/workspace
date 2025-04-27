import React, { useState } from 'react';
import { Task } from '@/types/task';
import { Card } from './ui/Card';

interface TaskListProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
}

export default function TaskList({ tasks, onTaskClick }: TaskListProps) {
  const [filter, setFilter] = useState<Task['status']>('todo');
  const [sortBy, setSortBy] = useState<'priority' | 'dueDate'>('dueDate');

  const filteredTasks = tasks.filter(task => 
    filter === 'todo' ? task.status !== 'completed' : task.status === filter
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'priority') {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
  });

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'todo': return 'bg-blue-500/50';
      case 'in-progress': return 'bg-yellow-500/50';
      case 'completed': return 'bg-green-500/50';
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('todo')}
            className={`px-3 py-1 rounded-full text-sm ${
              filter === 'todo' ? 'bg-blue-500/50' : 'bg-white/5'
            }`}
          >
            To Do
          </button>
          <button
            onClick={() => setFilter('in-progress')}
            className={`px-3 py-1 rounded-full text-sm ${
              filter === 'in-progress' ? 'bg-yellow-500/50' : 'bg-white/5'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-1 rounded-full text-sm ${
              filter === 'completed' ? 'bg-green-500/50' : 'bg-white/5'
            }`}
          >
            Completed
          </button>
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'priority' | 'dueDate')}
          className="bg-white/5 border border-white/10 rounded px-3 py-1 text-sm"
        >
          <option value="dueDate">Sort by Due Date</option>
          <option value="priority">Sort by Priority</option>
        </select>
      </div>

      <div className="space-y-4">
        {sortedTasks.map((task) => (
          <Card
            key={task.id}
            variant="default"
            className="hover:bg-white/10 cursor-pointer transition-colors"
            onClick={() => onTaskClick(task)}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium">{task.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(task.status)}`}>
                    {task.status}
                  </span>
                  <span className={`text-sm font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-3">{task.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  {task.subtasks && (
                    <span>
                      {task.subtasks.filter(st => st.completed).length} / {task.subtasks.length} subtasks
                    </span>
                  )}
                  {task.attachments && (
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                      {task.attachments.length}
                    </span>
                  )}
                </div>
                <span>Due {new Date(task.dueDate).toLocaleDateString()}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 