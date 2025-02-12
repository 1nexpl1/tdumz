import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { Accordion, AccordionDetails, AccordionSummary, Button, Modal, TextareaAutosize } from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';

function getDaysInMonth(month, year) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

function renderSparklineCell(params) {
  const data = getDaysInMonth(4, 2024);
  const { value, colDef } = params;

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <SparkLineChart
        data={value}
        width={colDef.computedWidth || 100}
        height={32}
        plotType="bar"
        showHighlight
        showTooltip
        colors={['hsl(210, 98%, 42%)']}
        xAxis={{
          scaleType: 'band',
          data,
        }}
      />
    </div>
  );
}


export function renderAvatar(params) {
  if (params.value == null) {
    return '';
  }

  return (
    <Avatar
      sx={{
        backgroundColor: params.value.color,
        width: '24px',
        height: '24px',
        fontSize: '0.85rem',
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}

export const columns = [
  { field: 'pageTitle', headerName: 'Название товара', flex: 1.5, minWidth: 200 },
  {
    field: 'users',
    headerName: 'Раздел',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 80,
  },
  {
    field: 'eventCount',
    headerName: 'Описание',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'viewsPerUser',
    headerName: 'Картинки',
    headerAlign: 'right',
    align: 'left',
    flex: 3,
    minWidth: 120,
  },
];

export const rows = [
  {
    id: 1,
    pageTitle: 'Ремонт оборудования',
    status: 'Online',
    eventCount: 8345,
    users: 212423,
    viewsPerUser: 18.5,
  },
  {
    id: 2,
    pageTitle: 'Product Details - Gadgets',
    status: 'Online',
    eventCount: 5653,
    users: 172240,
    viewsPerUser: 9.7,
  },
  {
    id: 3,
    pageTitle: 'Checkout Process - Step 1',
    status: 'Offline',
    eventCount: 3455,
    users: 58240,
    viewsPerUser: 15.2,
  },
  {
    id: 4,
    pageTitle: 'User Profile Dashboard',
    status: 'Online',
    eventCount: 112543,
    users: 96240,
    viewsPerUser: 4.5,
  },
  {
    id: 5,
    pageTitle: 'Article Listing - Tech News',
    status: 'Offline',
    eventCount: 3653,
    users: 142240,
    viewsPerUser: 3.1,
  },
  {
    id: 6,
    pageTitle: 'FAQs - Customer Support',
    status: 'Online',
    eventCount: 106543,
    users: 15240,
    viewsPerUser: 7.2,
  },
  {
    id: 7,
    pageTitle: 'Product Comparison - Laptops',
    status: 'Offline',
    eventCount: 7853,
    users: 32240,
    viewsPerUser: 6.5,
  },
  {
    id: 8,
    pageTitle: 'Shopping Cart - Electronics',
    status: 'Online',
    eventCount: 8563,
    users: 48240,
    viewsPerUser: 4.3
  },
  {
    id: 9,
    pageTitle: 'Payment Confirmation - Bank Transfer',
    status: 'Offline',
    eventCount: 4563,
    users: 18240,
    viewsPerUser: 2.7
  },
  {
    id: 10,
    pageTitle: 'Product Reviews - Smartphones',
    status: 'Online',
    eventCount: 9863,
    users: 28240,
    viewsPerUser: 5.1
  },
  {
    id: 11,
    pageTitle: 'Subscription Management - Services',
    status: 'Offline',
    eventCount: 6563,
    users: 24240,
    viewsPerUser: 4.8
  },
  {
    id: 12,
    pageTitle: 'Order Tracking - Shipments',
    status: 'Online',
    eventCount: 12353,
    users: 38240,
    viewsPerUser: 3.5
  },
  {
    id: 13,
    pageTitle: 'Customer Feedback - Surveys',
    status: 'Offline',
    eventCount: 5863,
    users: 13240,
    viewsPerUser: 2.3
  },
  {
    id: 14,
    pageTitle: 'Account Settings - Preferences',
    status: 'Online',
    eventCount: 7853,
    users: 18240,
    viewsPerUser: 3.2
  },
  {
    id: 15,
    pageTitle: 'Login Page - Authentication',
    status: 'Offline',
    eventCount: 9563,
    users: 24240,
    viewsPerUser: 2.5
  },
  {
    id: 16,
    pageTitle: 'Promotions - Seasonal Sales',
    status: 'Online',
    eventCount: 13423,
    users: 54230,
    viewsPerUser: 7.8
  },
  {
    id: 17,
    pageTitle: 'Tutorials - How to Guides',
    status: 'Offline',
    eventCount: 4234,
    users: 19342,
    viewsPerUser: 5.2
  },
  {
    id: 18,
    pageTitle: 'Blog Posts - Tech Insights',
    status: 'Online',
    eventCount: 8567,
    users: 34234,
    viewsPerUser: 6.3
  },
  {
    id: 19,
    pageTitle: 'Events - Webinars',
    status: 'Offline',
    eventCount: 3456,
    users: 19234,
    viewsPerUser: 4.5
  },
  {
    id: 20,
    pageTitle: 'Support - Contact Us',
    status: 'Online',
    eventCount: 6734,
    users: 27645,
    viewsPerUser: 3.9
  },
]