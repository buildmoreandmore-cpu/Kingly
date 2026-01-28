
import React from 'react';

export interface ServiceCard {
  title: string;
  description: string[];
  results: string;
  icon: React.ReactNode;
}

export interface TargetAudience {
  title: string;
  pain: string;
  promise: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  metric: string;
  quote: string;
  firm: string;
  insight: string;
}
