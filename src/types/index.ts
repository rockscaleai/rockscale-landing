import { StaticImageData } from 'next/image';

export interface Testimonial {
  name: string;
  title: string;
  avatar: string | StaticImageData;
  testimonial: string;
}