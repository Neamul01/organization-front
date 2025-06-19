import React from 'react';

const projects = [
  {
    title: 'School Management System',
    url: 'https://school.alibazar.xyz/login',
  },
  {
    title: 'School Management System Admin',
    url: 'http://edu.codehosting.xyz/UserLogin.aspx',
  },
];

export default function EdtechProjects() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => (
        <a
          key={idx}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg border border-gray-700 bg-gray-900/50 p-6 transition hover:border-blue-500"
        >
          <h3 className="mb-2 text-lg font-semibold text-white">
            {project.title}
          </h3>
          <p className="break-all text-blue-400">{project.url}</p>
        </a>
      ))}
    </div>
  );
}
