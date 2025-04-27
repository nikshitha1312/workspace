import React from 'react';
import { motion } from 'framer-motion';
import { Task } from '@/types/task';
import { format } from 'date-fns';

interface TaskDetailsProps {
  task: Task;
  onClose: () => void;
}

export default function TaskDetails({ task, onClose }: TaskDetailsProps) {
  return (
    <div className="h-full p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Task Details</h2>
        <button
          onClick={onClose}
          className="rounded-full p-2 hover:bg-white/10 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="space-y-6">
        <div className="glass-card rounded-lg p-4">
          <h3 className="text-lg font-medium mb-2">{task.title}</h3>
          <p className="text-gray-400">{task.description}</p>
        </div>

        <div className="glass-card rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-400 mb-2">Details</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Status</span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/10">
                {task.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Priority</span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/10">
                {task.priority}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Due Date</span>
              <span>{format(new Date(task.dueDate), 'MMM dd, yyyy')}</span>
            </div>
          </div>
        </div>

        {task.subtasks && task.subtasks.length > 0 && (
          <div className="glass-card rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-400 mb-3">Subtasks</h4>
            <div className="space-y-2">
              {task.subtasks.map((subtask, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-2 rounded hover:bg-white/5"
                >
                  <input
                    type="checkbox"
                    checked={subtask.completed}
                    className="rounded border-gray-400"
                    readOnly
                  />
                  <span className={subtask.completed ? 'line-through text-gray-400' : ''}>
                    {subtask.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {task.attachments && task.attachments.length > 0 && (
          <div className="glass-card rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-400 mb-3">Attachments</h4>
            <div className="space-y-2">
              {task.attachments.map((attachment, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-2 rounded hover:bg-white/5"
                >
                  <svg
                    className="w-4 h-4 text-gray-400"
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
                  <span>{attachment.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 