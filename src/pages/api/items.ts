import { NextApiRequest, NextApiResponse } from 'next';

const mockData = {
  featured: [
    {
      id: '1',
      name: 'Featured Layout',
      type: 'layout',
      description: 'Curated top picks from this week.',
      tags: ['comms', 'coverage', 'stakeholders'],
      details: {
        read: 2485,
        type: 'Universal',
        pages: 6,
        lastUpdated: '07/23/2024',
      },
      kpisUsed: ['KPI 1', 'KPI 2', 'KPI 3'],
    },
    {
      id: '2',
      name: 'Featured Storyboard',
      type: 'storyboard',
      description: 'Engage your audience visually.',
      tags: ['narrative', 'design', 'impact'],
      details: {
        read: 4321,
        type: 'Interactive',
        pages: 8,
        lastUpdated: '07/22/2024',
      },
      coupledKpis: ['Engagement Rate', 'Completion Time', 'Retention Rate'],
      applicableAffiliates: ['Affiliate 1', 'Affiliate 2', 'Affiliate 3'],
      previewImage: 'https://via.placeholder.com/300',
    },
    {
      id: '3',
      name: 'Featured KPI',
      type: 'kpi',
      description: 'Track key metrics effectively.',
      tags: ['performance', 'metrics', 'growth'],
      details: {
        read: 2950,
        type: 'Analytical',
        pages: 5,
        lastUpdated: '07/19/2024',
      },
      chartData: {
        labels: ['Metric 1', 'Metric 2', 'Metric 3'],
        values: [80, 50, 90],
      },
      applicableAffiliates: ['Affiliate 1', 'Affiliate 2', 'Affiliate 3'],
      businessQuestions: [
        'Question 1?',
        'Question 2?',
      ],
    },
  ],
  trending: [
    {
      id: '4',
      name: 'Trending Layout',
      type: 'layout',
      description: 'Highly rated by users.',
      tags: ['strategy', 'planning', 'execution'],
      details: {
        read: 3821,
        type: 'Strategic',
        pages: 7,
        lastUpdated: '07/20/2024',
      },
      kpisUsed: ['KPI 4', 'KPI 5', 'KPI 6'],
    },
    {
      id: '5',
      name: 'Trending Storyboard',
      type: 'storyboard',
      description: 'Popular visual storytelling tool.',
      tags: ['creativity', 'innovation', 'success'],
      details: {
        read: 4756,
        type: 'Creative',
        pages: 10,
        lastUpdated: '07/21/2024',
      },
      coupledKpis: ['Reach', 'Conversions', 'Click-Through Rate'],
      applicableAffiliates: ['Affiliate 4', 'Affiliate 5'],
      previewImage: 'https://via.placeholder.com/400',
    },
  ],
  kpi: [
    {
      id: '6',
      name: 'Sales KPI',
      type: 'kpi',
      description: 'Analyze sales performance.',
      tags: ['sales', 'performance', 'targets'],
      details: {
        read: 5100,
        type: 'Performance',
        pages: 3,
        lastUpdated: '07/15/2024',
      },
      chartData: {
        labels: ['Region 1', 'Region 2', 'Region 3'],
        values: [70, 40, 60],
      },
      applicableAffiliates: ['Affiliate 5', 'Affiliate 6'],
      businessQuestions: [
        'Question 1?',
        'Question 2?',
      ],
    },
    {
      id: '7',
      name: 'Engagement KPI',
      type: 'kpi',
      description: 'Measure audience engagement.',
      tags: ['engagement', 'retention', 'growth'],
      details: {
        read: 4210,
        type: 'Behavioral',
        pages: 4,
        lastUpdated: '07/18/2024',
      },
      chartData: {
        labels: ['Labels 1', 'Labels 2', 'Labels 3'],
        values: [85, 60, 75],
      },
      applicableAffiliates: ['Affiliate 7', 'Affiliate 8'],
      businessQuestions: [
        'Question 1?',
        'Question 2?',
      ],
    },
  ],
  layouts: [
    {
      id: '8',
      name: 'Executive Layout',
      type: 'layout',
      description: 'Designed for executive reporting.',
      tags: ['high-level', 'summary', 'overview'],
      details: {
        read: 1985,
        type: 'Summary',
        pages: 5,
        lastUpdated: '07/16/2024',
      },
      kpisUsed: ['Revenue Growth', 'Market Share'],
    },
    {
      id: '9',
      name: 'Detailed Layout',
      type: 'layout',
      description: 'In-depth layout for detailed insights.',
      tags: ['details', 'analytics', 'data'],
      details: {
        read: 3010,
        type: 'Detailed',
        pages: 10,
        lastUpdated: '07/17/2024',
      },
      kpisUsed: ['Churn Rate', 'Customer Lifetime Value'],
    },
  ],
  storyboards: [
    {
      id: '10',
      name: 'Customer Journey Storyboard',
      type: 'storyboard',
      description: 'Visualize the customer journey.',
      tags: ['journey', 'customer', 'experience'],
      details: {
        read: 2590,
        type: 'Experiential',
        pages: 6,
        lastUpdated: '07/14/2024',
      },
      coupledKpis: ['Net Promoter Score', 'Satisfaction Rate'],
      applicableAffiliates: ['Affiliate 10', 'Affiliate 11'],
      previewImage: 'https://via.placeholder.com/500',
    },
    {
      id: '11',
      name: 'Marketing Campaign Storyboard',
      type: 'storyboard',
      description: 'Plan your marketing campaigns visually.',
      tags: ['campaign', 'marketing', 'visual'],
      details: {
        read: 3745,
        type: 'Marketing',
        pages: 9,
        lastUpdated: '07/13/2024',
      },
      coupledKpis: ['Click Rate', 'Conversion Rate'],
      applicableAffiliates: ['Affiliate 6', 'Affiliate 7'],
      previewImage: 'https://via.placeholder.com/450',
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(mockData);
}
