import React from 'react';

const Icon = ({ children, size = 18, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

export const ArrowUpRight = (props) => <Icon {...props}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></Icon>;
export const ArrowDown = (props) => <Icon {...props}><path d="M12 5v14"/><path d="m18 13-6 6-6-6"/></Icon>;
export const Phone = (props) => <Icon {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z"/></Icon>;
export const Menu = (props) => <Icon {...props}><path d="M4 7h16M4 12h16M4 17h16"/></Icon>;
export const Close = (props) => <Icon {...props}><path d="m6 6 12 12M18 6 6 18"/></Icon>;
export const Code = (props) => <Icon {...props}><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></Icon>;
export const Copy = (props) => <Icon {...props}><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></Icon>;
