'use client';

import { FileText, Github, Linkedin, Twitter } from 'lucide-react';
import Dock from '@/components/Dock';

const items = [
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    onClick: () => window.open('https://www.linkedin.com/in/solanki-darshan/', '_blank'),
  },
  {
    icon: <Twitter size={18} />,
    label: 'X / Twitter',
    onClick: () => window.open('https://x.com/Darshan9Solanki', '_blank'),
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    onClick: () => window.open('https://github.com/Darshan98Solanki', '_blank'),
  },
  {
    icon: <FileText size={18} />,
    label: 'Resume',
    onClick: () => window.open('https://drive.google.com/file/d/1uhXmKhtBWysBVjJtPcr5UvSqhnIb1gQ6/view?usp=sharing', '_blank'),
  },
];

export function ContactDock() {
  return (
    <Dock
      items={items}
      panelHeight={62}
      baseItemSize={44}
      magnification={52}
      dockHeight={120}
    />
  );
}
