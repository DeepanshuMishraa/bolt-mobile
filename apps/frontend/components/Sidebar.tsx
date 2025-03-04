'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Folder } from "lucide-react";
import { useAuth } from "@clerk/nextjs";

interface Project {
  id: string;
  description: string;
  createdAt: string;
}

export const Sidebar = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { getToken } = useAuth()

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
          headers: {
            Authorization: `Bearer ${await getToken()}`
          }
        });
        setProjects(response.data.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="fixed left-0 top-0 h-screen w-2 hover:w-64 bg-card border-r border-border transition-all duration-300 overflow-hidden group z-50">
      <div className="w-64 p-4">
        <h2 className="text-lg font-semibold mb-4">Your Projects</h2>
        <div className="space-y-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg cursor-pointer"
            >
              <Folder className="w-4 h-4" />
              <div className="flex flex-col">
                <span className="text-sm truncate">{project.description}</span>
                <span className="text-xs text-muted-foreground">
                  {format(new Date(project.createdAt), 'MMM dd, yyyy')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 
