export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export const navigationItems: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
];

export const ctaButton: NavItem = {
  label: "Let's talk!",
  href: '/contact',
};
