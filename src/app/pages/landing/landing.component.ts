import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ERPModule {
  name: string;
  link: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-landing',
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  
  erpModules: ERPModule[] = [
    {
      name: 'Accounting',
      link: 'https://accounts.esarwa.com/account/login',
      description: 'Financial management and accounting system',
      icon: 'fas fa-calculator',
      color: 'bg-blue-500'
    },
    {
      name: 'CRM',
      link: 'https://esarwa-crm.web.app/',
      description: 'Customer relationship management',
      icon: 'fas fa-users',
      color: 'bg-green-500'
    },
    {
      name: 'HRMS',
      link: 'https://customesarwaerp.web.app/ui/hrms-settings',
      description: 'Human resource management system',
      icon: 'fas fa-user-tie',
      color: 'bg-purple-500'
    },
    {
      name: 'POS',
      link: 'https://dxbposesarwa.web.app/',
      description: 'Point of sale system',
      icon: 'fas fa-cash-register',
      color: 'bg-orange-500'
    },
    {
      name: 'Project Management',
      link: 'https://esarwa-pm-internal.web.app/project/home/list-of-project',
      description: 'Project planning and management',
      icon: 'fas fa-project-diagram',
      color: 'bg-indigo-500'
    },
    {
      name: 'Warehouse',
      link: 'https://customesarwaerp.web.app/dashboard-warehouse',
      description: 'Inventory and warehouse management',
      icon: 'fas fa-warehouse',
      color: 'bg-teal-500'
    },
    {
      name: 'Data Analytics',
      link: 'https://esarwaanalitics.web.app/',
      description: 'Business intelligence and analytics',
      icon: 'fas fa-chart-line',
      color: 'bg-pink-500'
    },
    {
      name: 'Manufacturing',
      link: 'https://esarwa-garment-manufactu-f0140.web.app/login',
      description: 'Manufacturing process management',
      icon: 'fas fa-industry',
      color: 'bg-red-500'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openModule(module: ERPModule): void {
    window.open(module.link, '_blank');
  }
}
