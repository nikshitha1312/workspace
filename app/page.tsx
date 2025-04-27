'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { images } from './config/images';
import ThreePaneLayout from './components/Layout/ThreePaneLayout';
import { Card } from './components/ui/Card';
import { cn } from './lib/utils';

export default function Home() {
  const router = useRouter();
  const [showRightPane, setShowRightPane] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const navigationItems = [
    {
      name: 'Dashboard',
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      path: '/',
    },
    {
      name: 'Projects',
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      path: '/projects',
    },
    {
      name: 'Tasks',
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      path: '/tasks',
    },
  ];

  const projects = [
    {
      title: "Backend Projects",
      description: "Scalable server solutions",
      image: images.backend,
      count: 12,
      trend: "up",
      change: "+3",
    },
    {
      title: "Frontend Projects",
      description: "Beautiful user interfaces",
      image: images.frontend,
      count: 18,
      trend: "up",
      change: "+5",
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform applications",
      image: images.mobile,
      count: 8,
      trend: "up",
      change: "+2",
    },
    {
      title: "AI Projects",
      description: "Intelligent solutions",
      image: images.ai,
      count: 6,
      trend: "up",
      change: "+4",
    },
  ];

  const handleNavigation = (item: typeof navigationItems[0]) => {
    setSelectedItem(item.name);
    router.push(item.path);
  };

  const LeftPane = () => (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-blue-500">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className="ml-3 text-xl font-bold text-white">Workspace</h1>
      </div>
      <nav className="mt-6 space-y-2 px-3">
        {navigationItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigation(item)}
            className={cn(
              "flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              selectedItem === item.name
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                : "text-gray-300 hover:bg-white/10"
            )}
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );

  const MiddlePane = () => (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            {selectedItem || 'Dashboard'}
          </h1>
          <p className="mt-2 text-gray-400">
            Here's what's happening in your workspace today.
          </p>
        </div>
        <button
          onClick={() => setShowRightPane(!showRightPane)}
          className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-white transition-transform hover:scale-105"
        >
          {showRightPane ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <Card key={index} variant="elevated" className="overflow-hidden group">
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  {project.count} projects
                </span>
                <span className="text-sm text-emerald-400">
                  {project.change} this month
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const RightPane = () => (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Project Details</h2>
        <p className="text-gray-400">Additional information and quick actions</p>
      </div>
      <div className="space-y-4">
        <Card variant="default" className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">Recent Activity</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-300">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>New project added</span>
                <span className="ml-auto text-sm text-gray-400">2h ago</span>
              </div>
            ))}
          </div>
        </Card>
        <Card variant="default" className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full rounded bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-white transition-transform hover:scale-105">
              Create Project
            </button>
            <button className="w-full rounded bg-white/10 px-4 py-2 text-white transition-transform hover:scale-105">
              View All
            </button>
          </div>
        </Card>
      </div>
    </div>
  );

  return (
    <ThreePaneLayout
      leftPane={<LeftPane />}
      middlePane={<MiddlePane />}
      rightPane={<RightPane />}
      showRightPane={showRightPane}
      onToggleRightPane={() => setShowRightPane(!showRightPane)}
    />
  );
} 