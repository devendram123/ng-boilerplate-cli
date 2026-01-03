// ============================================
// UI - ORGANISMS - DASHBOARD LAYOUT
// ============================================

function dashboardLayoutComponentTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../molecules/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {}
`;
}

function dashboardLayoutComponentHtml() {
  return `<div class="dashboard-layout">
  <app-sidebar></app-sidebar>
  <main class="dashboard-layout__content">
    <ng-content></ng-content>
  </main>
</div>
`;
}

function dashboardLayoutComponentScss() {
  return `@import '../../../../assets/styles/variables';

.dashboard-layout {
  display: flex;
  height: 100vh;
  background-color: $background-secondary;

  &__content {
    margin-left: $sidebar-width;
    flex: 1;
    overflow-y: auto;
    padding: $spacing-xl;
  }
}
`;
}

// ============================================
// UI - ORGANISMS - AUTH LAYOUT
// ============================================

function authLayoutComponentTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-layout',
  imports: [CommonModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {}
`;
}

function authLayoutComponentHtml() {
  return `<div class="auth-layout">
  <div class="auth-layout__container">
    <div class="auth-layout__header">
      <h1 class="auth-layout__title">Collateral Gap</h1>
      <p class="auth-layout__subtitle">Production-ready Angular application</p>
    </div>
    <div class="auth-layout__content">
      <ng-content></ng-content>
    </div>
  </div>
</div>
`;
}

function authLayoutComponentScss() {
  return `@import '../../../../assets/styles/variables';

.auth-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, $primary-color 0%, lighten($primary-color, 10%) 100%);
  padding: $spacing-lg;

  &__container {
    width: 100%;
    max-width: 450px;
  }

  &__header {
    text-align: center;
    margin-bottom: $spacing-xl;
    color: white;
  }

  &__title {
    font-size: $font-size-xxl * 1.5;
    font-weight: 700;
    margin: 0 0 $spacing-sm 0;
  }

  &__subtitle {
    font-size: $font-size-base;
    opacity: 0.9;
    margin: 0;
  }

  &__content {
    background-color: white;
    padding: $spacing-xl;
    border-radius: $border-radius-lg;
    box-shadow: $shadow-lg;
  }
}
`;
}

// ============================================
// PAGES - LOGIN
// ============================================

function loginPageTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthLayoutComponent } from '../../ui/organisms/auth-layout/auth-layout.component';
import { LoginFormComponent } from '../../ui/molecules/login-form/login-form.component';
import { AuthService } from '../../core/services/auth.service';
import { LoginRequest } from '../../core/models/auth.model';

@Component({
  selector: 'app-login',
  imports: [CommonModule, AuthLayoutComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // Redirect if already authenticated
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onLogin(credentials: LoginRequest): void {
    this.errorMessage = '';
    const success = this.authService.login(credentials);
    
    if (!success) {
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
}
`;
}

function loginPageHtml() {
  return `<app-auth-layout>
  <div class="login-page">
    <h2 class="login-page__title">Welcome Back</h2>
    <p class="login-page__description">
      Please select your role and enter your credentials to continue
    </p>

    <div *ngIf="errorMessage" class="login-page__error">
      {{ errorMessage }}
    </div>

    <app-login-form (submitLogin)="onLogin($event)"></app-login-form>
  </div>
</app-auth-layout>
`;
}

function loginPageScss() {
  return `@import '../../../assets/styles/variables';

.login-page {
  &__title {
    font-size: $font-size-xxl;
    font-weight: 700;
    color: $text-color;
    margin: 0 0 $spacing-sm 0;
    text-align: center;
  }

  &__description {
    font-size: $font-size-sm;
    color: $text-secondary;
    text-align: center;
    margin: 0 0 $spacing-xl 0;
  }

  &__error {
    padding: $spacing-md;
    background-color: rgba($error-color, 0.1);
    border-left: 4px solid $error-color;
    color: $error-color;
    border-radius: $border-radius-sm;
    margin-bottom: $spacing-lg;
    font-size: $font-size-sm;
  }
}
`;
}

// ============================================
// PAGES - DASHBOARD
// ============================================

function dashboardPageTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../../ui/organisms/dashboard-layout/dashboard-layout.component';
import { CardComponent } from '../../ui/atoms/card/card.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, DashboardLayoutComponent, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}

  user = this.authService.user;

  stats = [
    { label: 'Total Users', value: '1,234', icon: 'people', color: '#1976d2' },
    { label: 'Active Sessions', value: '89', icon: 'schedule', color: '#4caf50' },
    { label: 'Reports', value: '456', icon: 'assessment', color: '#ff9800' },
    { label: 'Alerts', value: '12', icon: 'warning', color: '#f44336' }
  ];
}
`;
}

function dashboardPageHtml() {
  return `<app-dashboard-layout>
  <div class="dashboard-page">
    <div class="dashboard-page__header">
      <h1 class="dashboard-page__title">Dashboard</h1>
      <p class="dashboard-page__subtitle">Welcome back, {{ user()?.displayName }}!</p>
    </div>

    <div class="dashboard-page__stats">
      <app-card *ngFor="let stat of stats" elevation="md" padding="lg" class="stat-card">
        <div class="stat-card__content">
          <div class="stat-card__icon" [style.background-color]="stat.color">
            <span class="material-icons">{{ stat.icon }}</span>
          </div>
          <div class="stat-card__info">
            <div class="stat-card__value">{{ stat.value }}</div>
            <div class="stat-card__label">{{ stat.label }}</div>
          </div>
        </div>
      </app-card>
    </div>

    <div class="dashboard-page__content">
      <app-card elevation="md" padding="lg">
        <h2 class="dashboard-page__section-title">Recent Activity</h2>
        <p class="dashboard-page__placeholder">
          This is your main dashboard. Add widgets, charts, and real-time data here.
        </p>
      </app-card>
    </div>
  </div>
</app-dashboard-layout>
`;
}

function dashboardPageScss() {
  return `@import '../../../assets/styles/variables';

.dashboard-page {
  &__header {
    margin-bottom: $spacing-xl;
  }

  &__title {
    font-size: $font-size-xxl * 1.2;
    font-weight: 700;
    color: $text-color;
    margin: 0 0 $spacing-xs 0;
  }

  &__subtitle {
    font-size: $font-size-base;
    color: $text-secondary;
    margin: 0;
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $spacing-lg;
    margin-bottom: $spacing-xl;
  }

  &__content {
    display: grid;
    gap: $spacing-lg;
  }

  &__section-title {
    font-size: $font-size-lg;
    font-weight: 600;
    margin: 0 0 $spacing-md 0;
    color: $text-color;
  }

  &__placeholder {
    color: $text-secondary;
    margin: 0;
  }
}

.stat-card {
  &__content {
    display: flex;
    align-items: center;
    gap: $spacing-lg;
  }

  &__icon {
    width: 60px;
    height: 60px;
    border-radius: $border-radius-md;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    .material-icons {
      font-size: 30px;
    }
  }

  &__info {
    flex: 1;
  }

  &__value {
    font-size: $font-size-xxl;
    font-weight: 700;
    color: $text-color;
    margin-bottom: $spacing-xs;
  }

  &__label {
    font-size: $font-size-sm;
    color: $text-secondary;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}
`;
}

// ============================================
// PAGES - USER
// ============================================

function userPageTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../../ui/organisms/dashboard-layout/dashboard-layout.component';
import { CardComponent } from '../../ui/atoms/card/card.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-user',
  imports: [CommonModule, DashboardLayoutComponent, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(private authService: AuthService) {}

  user = this.authService.user;

  userInfo = [
    { label: 'Username', value: this.user()?.username },
    { label: 'Display Name', value: this.user()?.displayName },
    { label: 'Role', value: this.user()?.role },
    { label: 'Email', value: this.user()?.email || 'Not provided' }
  ];
}
`;
}

function userPageHtml() {
  return `<app-dashboard-layout>
  <div class="user-page">
    <div class="user-page__header">
      <h1 class="user-page__title">User Profile</h1>
      <p class="user-page__subtitle">Manage your account information</p>
    </div>

    <div class="user-page__content">
      <app-card elevation="md" padding="lg">
        <div class="user-page__profile">
          <div class="user-page__avatar">
            <span class="material-icons">account_circle</span>
          </div>
          <div class="user-page__info">
            <h2 class="user-page__name">{{ user()?.displayName }}</h2>
            <p class="user-page__role-badge">{{ user()?.role }}</p>
          </div>
        </div>

        <div class="user-page__details">
          <div *ngFor="let info of userInfo" class="user-page__detail-item">
            <span class="user-page__detail-label">{{ info.label }}</span>
            <span class="user-page__detail-value">{{ info.value }}</span>
          </div>
        </div>
      </app-card>

      <app-card elevation="md" padding="lg">
        <h3 class="user-page__section-title">Account Settings</h3>
        <p class="user-page__placeholder">
          Account settings and preferences will be available here.
        </p>
      </app-card>
    </div>
  </div>
</app-dashboard-layout>
`;
}

function userPageScss() {
  return `@import '../../../assets/styles/variables';

.user-page {
  &__header {
    margin-bottom: $spacing-xl;
  }

  &__title {
    font-size: $font-size-xxl * 1.2;
    font-weight: 700;
    color: $text-color;
    margin: 0 0 $spacing-xs 0;
  }

  &__subtitle {
    font-size: $font-size-base;
    color: $text-secondary;
    margin: 0;
  }

  &__content {
    display: grid;
    gap: $spacing-lg;
    max-width: 800px;
  }

  &__profile {
    display: flex;
    align-items: center;
    gap: $spacing-lg;
    padding-bottom: $spacing-lg;
    border-bottom: 1px solid $gray-200;
    margin-bottom: $spacing-lg;
  }

  &__avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: $primary-color;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    .material-icons {
      font-size: 60px;
    }
  }

  &__name {
    font-size: $font-size-xl;
    font-weight: 600;
    margin: 0 0 $spacing-xs 0;
    color: $text-color;
  }

  &__role-badge {
    display: inline-block;
    padding: $spacing-xs $spacing-md;
    background-color: $primary-color;
    color: white;
    border-radius: $border-radius-sm;
    font-size: $font-size-xs;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
  }

  &__details {
    display: grid;
    gap: $spacing-md;
  }

  &__detail-item {
    display: flex;
    justify-content: space-between;
    padding: $spacing-md 0;
    border-bottom: 1px solid $gray-100;

    &:last-child {
      border-bottom: none;
    }
  }

  &__detail-label {
    font-weight: 600;
    color: $text-secondary;
  }

  &__detail-value {
    color: $text-color;
  }

  &__section-title {
    font-size: $font-size-lg;
    font-weight: 600;
    margin: 0 0 $spacing-md 0;
    color: $text-color;
  }

  &__placeholder {
    color: $text-secondary;
    margin: 0;
  }
}
`;
}

// ============================================
// PAGES - ADMIN
// ============================================

function adminPageTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../../ui/organisms/dashboard-layout/dashboard-layout.component';
import { CardComponent } from '../../ui/atoms/card/card.component';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, DashboardLayoutComponent, CardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  adminActions = [
    { title: 'User Management', description: 'Manage user accounts and permissions', icon: 'people' },
    { title: 'System Settings', description: 'Configure system-wide settings', icon: 'settings' },
    { title: 'Analytics', description: 'View detailed analytics and reports', icon: 'analytics' },
    { title: 'Security', description: 'Manage security and access controls', icon: 'security' }
  ];

  recentActivity = [
    { action: 'User created', user: 'john.doe', time: '2 minutes ago' },
    { action: 'Settings updated', user: 'admin', time: '15 minutes ago' },
    { action: 'Report generated', user: 'jane.smith', time: '1 hour ago' }
  ];
}
`;
}

function adminPageHtml() {
  return `<app-dashboard-layout>
  <div class="admin-page">
    <div class="admin-page__header">
      <h1 class="admin-page__title">Admin Panel</h1>
      <p class="admin-page__subtitle">System administration and management</p>
    </div>

    <div class="admin-page__notice">
      <span class="material-icons">admin_panel_settings</span>
      <span>You are viewing the admin panel with full system access</span>
    </div>

    <div class="admin-page__actions">
      <app-card 
        *ngFor="let action of adminActions" 
        elevation="md" 
        padding="lg"
        class="admin-action">
        <div class="admin-action__icon">
          <span class="material-icons">{{ action.icon }}</span>
        </div>
        <h3 class="admin-action__title">{{ action.title }}</h3>
        <p class="admin-action__description">{{ action.description }}</p>
      </app-card>
    </div>

    <app-card elevation="md" padding="lg">
      <h2 class="admin-page__section-title">Recent Activity</h2>
      <div class="admin-page__activity">
        <div *ngFor="let activity of recentActivity" class="activity-item">
          <div class="activity-item__icon">
            <span class="material-icons">history</span>
          </div>
          <div class="activity-item__content">
            <div class="activity-item__action">{{ activity.action }}</div>
            <div class="activity-item__meta">
              <span class="activity-item__user">{{ activity.user }}</span>
              <span class="activity-item__time">{{ activity.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </app-card>
  </div>
</app-dashboard-layout>
`;
}

function adminPageScss() {
  return `@import '../../../assets/styles/variables';

.admin-page {
  &__header {
    margin-bottom: $spacing-lg;
  }

  &__title {
    font-size: $font-size-xxl * 1.2;
    font-weight: 700;
    color: $text-color;
    margin: 0 0 $spacing-xs 0;
  }

  &__subtitle {
    font-size: $font-size-base;
    color: $text-secondary;
    margin: 0;
  }

  &__notice {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    padding: $spacing-md $spacing-lg;
    background-color: rgba($warning-color, 0.1);
    border-left: 4px solid $warning-color;
    border-radius: $border-radius-sm;
    color: darken($warning-color, 20%);
    margin-bottom: $spacing-xl;
    font-weight: 500;

    .material-icons {
      font-size: 24px;
    }
  }

  &__actions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $spacing-lg;
    margin-bottom: $spacing-xl;
  }

  &__section-title {
    font-size: $font-size-lg;
    font-weight: 600;
    margin: 0 0 $spacing-lg 0;
    color: $text-color;
  }

  &__activity {
    display: grid;
    gap: $spacing-md;
  }
}

.admin-action {
  cursor: pointer;
  transition: all $transition-base;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-lg;
  }

  &__icon {
    width: 50px;
    height: 50px;
    border-radius: $border-radius-md;
    background-color: rgba($primary-color, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: $primary-color;
    margin-bottom: $spacing-md;

    .material-icons {
      font-size: 28px;
    }
  }

  &__title {
    font-size: $font-size-lg;
    font-weight: 600;
    margin: 0 0 $spacing-xs 0;
    color: $text-color;
  }

  &__description {
    font-size: $font-size-sm;
    color: $text-secondary;
    margin: 0;
  }
}

.activity-item {
  display: flex;
  gap: $spacing-md;
  padding: $spacing-md;
  border-radius: $border-radius-sm;
  transition: background-color $transition-fast;

  &:hover {
    background-color: $gray-50;
  }

  &__icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $gray-100;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $text-secondary;
    flex-shrink: 0;
  }

  &__content {
    flex: 1;
  }

  &__action {
    font-weight: 500;
    color: $text-color;
    margin-bottom: $spacing-xs;
  }

  &__meta {
    display: flex;
    gap: $spacing-md;
    font-size: $font-size-sm;
  }

  &__user {
    color: $primary-color;
  }

  &__time {
    color: $text-secondary;
  }
}
`;
}

module.exports = {
  'dashboard-layoutComponentTs': dashboardLayoutComponentTs,
  'dashboard-layoutComponentHtml': dashboardLayoutComponentHtml,
  'dashboard-layoutComponentScss': dashboardLayoutComponentScss,
  'auth-layoutComponentTs': authLayoutComponentTs,
  'auth-layoutComponentHtml': authLayoutComponentHtml,
  'auth-layoutComponentScss': authLayoutComponentScss,
  loginPageTs,
  loginPageHtml,
  loginPageScss,
  dashboardPageTs,
  dashboardPageHtml,
  dashboardPageScss,
  userPageTs,
  userPageHtml,
  userPageScss,
  adminPageTs,
  adminPageHtml,
  adminPageScss
};
