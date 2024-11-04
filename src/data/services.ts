import { Service, Questionnaire } from '../types';

export const services: Service[] = [
  {
    id: 'brand-design',
    title: 'Brand Design',
    description: 'Create a memorable brand identity that resonates with your audience',
    icon: 'Palette'
  },
  {
    id: 'website-design',
    title: 'Website Design',
    description: 'Build a stunning website that drives results',
    icon: 'Globe'
  },
  {
    id: 'hosting-services',
    title: 'Hosting Services',
    description: 'Reliable and secure hosting solutions for your digital presence',
    icon: 'Server'
  },
  {
    id: 'social-media-design',
    title: 'Social Media Design',
    description: 'Engage your audience with eye-catching social media content',
    icon: 'Share2'
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    description: 'Bring your story to life with captivating animations',
    icon: 'Video'
  }
];

export const questionnaires: Questionnaire[] = [
  {
    serviceId: 'brand-design',
    title: 'Brand Design Questionnaire',
    description: 'Help us understand your brand vision',
    questions: [
      {
        id: 'business-name',
        text: "What's the name of your business, and which industry do you operate in?",
        type: 'text',
        required: true
      },
      {
        id: 'brand-personality',
        text: 'Describe the personality you want for your brand',
        type: 'textarea',
        required: true
      },
      {
        id: 'target-audience',
        text: 'Who is your primary audience?',
        type: 'textarea',
        required: true
      },
      {
        id: 'color-preferences',
        text: "Are there any colors you'd like to include or avoid?",
        type: 'textarea',
        required: false
      }
    ]
  },
  // Add other questionnaires similarly
];