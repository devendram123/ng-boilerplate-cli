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
  return `@use '../../../../assets/styles/variables' as *;

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
  return `@use '../../../../assets/styles/variables' as *;

.auth-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, $primary-color 0%, color-mix(in srgb, $primary-color 90%, white) 100%);
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

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {}
`;
}

function loginPageHtml() {
  return `<div class="login-page">
  <h1>Hello World - Login</h1>
</div>
`;
}

function loginPageScss() {
  return `.login-page {
  padding: 2rem;
  text-align: center;

  h1 {
    color: #333;
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

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}
`;
}

function dashboardPageHtml() {
  return `<div class="dashboard-page">
  <h1>Hello World - Dashboard</h1>
</div>
`;
}

function dashboardPageScss() {
  return `.dashboard-page {
  padding: 2rem;
  text-align: center;

  h1 {
    color: #333;
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

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {}

`;
}

function userPageHtml() {
  return `<div class="user-page">
  <h1>Hello World - User</h1>
</div>
`;
}

function userPageScss() {
  return `.user-page {
  padding: 2rem;
  text-align: center;

  h1 {
    color: #333;
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

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {}
`;
}

function adminPageHtml() {
  return `<div class="admin-page">
  <h1>Hello World - Admin</h1>
</div>
`;
}

function adminPageScss() {
  return `.admin-page {
  padding: 2rem;
  text-align: center;

  h1 {
    color: #333;
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
