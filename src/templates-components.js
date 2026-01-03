// ============================================
// UI - ATOMS - BUTTON
// ============================================

function buttonComponentTs() {
  return `import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
`;
}

function buttonComponentHtml() {
  return `<button 
  [type]="type"
  [class]="'btn btn--' + variant"
  [class.btn--full-width]="fullWidth"
  [disabled]="disabled"
  (click)="onClick()">
  <ng-content></ng-content>
</button>
`;
}

function buttonComponentScss() {
  return `@import '../../../../assets/styles/variables';

.btn {
  padding: $spacing-sm $spacing-lg;
  font-size: $font-size-base;
  font-weight: 500;
  border: none;
  border-radius: $border-radius-sm;
  cursor: pointer;
  transition: all $transition-fast;
  font-family: $font-family-base;

  &--primary {
    background-color: $primary-color;
    color: white;

    &:hover:not(:disabled) {
      background-color: darken($primary-color, 10%);
      box-shadow: $shadow-md;
    }
  }

  &--secondary {
    background-color: $gray-200;
    color: $text-color;

    &:hover:not(:disabled) {
      background-color: $gray-300;
    }
  }

  &--outline {
    background-color: transparent;
    color: $primary-color;
    border: 2px solid $primary-color;

    &:hover:not(:disabled) {
      background-color: $primary-color;
      color: white;
    }
  }

  &--full-width {
    width: 100%;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
`;
}

// ============================================
// UI - ATOMS - INPUT
// ============================================

function inputComponentTs() {
  return `import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() error: string = '';

  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
`;
}

function inputComponentHtml() {
  return `<div class="input-wrapper">
  <label *ngIf="label" class="input-wrapper__label">{{ label }}</label>
  <input
    [type]="type"
    [placeholder]="placeholder"
    [disabled]="disabled"
    [value]="value"
    [class.input-wrapper__input--error]="error"
    class="input-wrapper__input"
    (input)="onInputChange($event)"
    (blur)="onBlur()"
  />
  <span *ngIf="error" class="input-wrapper__error">{{ error }}</span>
</div>
`;
}

function inputComponentScss() {
  return `@import '../../../../assets/styles/variables';

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;

  &__label {
    font-size: $font-size-sm;
    font-weight: 500;
    color: $text-color;
  }

  &__input {
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-base;
    border: 1px solid $border-color;
    border-radius: $border-radius-sm;
    transition: all $transition-fast;
    font-family: $font-family-base;

    &:focus {
      outline: none;
      border-color: $primary-color;
      box-shadow: 0 0 0 3px rgba($primary-color, 0.1);
    }

    &--error {
      border-color: $error-color;

      &:focus {
        box-shadow: 0 0 0 3px rgba($error-color, 0.1);
      }
    }

    &:disabled {
      background-color: $gray-100;
      cursor: not-allowed;
    }
  }

  &__error {
    font-size: $font-size-xs;
    color: $error-color;
  }
}
`;
}

// ============================================
// UI - ATOMS - CARD
// ============================================

function cardComponentTs() {
  return `import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() elevation: 'sm' | 'md' | 'lg' = 'md';
  @Input() padding: 'sm' | 'md' | 'lg' = 'md';
}
`;
}

function cardComponentHtml() {
  return `<div 
  [class]="'card card--elevation-' + elevation + ' card--padding-' + padding">
  <ng-content></ng-content>
</div>
`;
}

function cardComponentScss() {
  return `@import '../../../../assets/styles/variables';

.card {
  background-color: white;
  border-radius: $border-radius-md;
  border: 1px solid $gray-200;

  &--elevation {
    &-sm {
      box-shadow: $shadow-sm;
    }

    &-md {
      box-shadow: $shadow-md;
    }

    &-lg {
      box-shadow: $shadow-lg;
    }
  }

  &--padding {
    &-sm {
      padding: $spacing-md;
    }

    &-md {
      padding: $spacing-lg;
    }

    &-lg {
      padding: $spacing-xl;
    }
  }
}
`;
}

// ============================================
// UI - MOLECULES - SIDEBAR
// ============================================

function sidebarComponentTs() {
  return `import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UserRole, ROLE_ROUTES } from '../../../shared/constants/roles';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  roles: UserRole[];
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  user = this.authService.user;

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard', roles: [UserRole.ADMIN, UserRole.USER] },
    { label: 'User', icon: 'person', route: '/user', roles: [UserRole.ADMIN, UserRole.USER] },
    { label: 'Admin', icon: 'admin_panel_settings', route: '/admin', roles: [UserRole.ADMIN] }
  ];

  visibleMenuItems = computed(() => {
    const currentUser = this.user();
    if (!currentUser) return [];
    
    return this.menuItems.filter(item => 
      item.roles.includes(currentUser.role as UserRole)
    );
  });

  logout(): void {
    this.authService.logout();
  }
}
`;
}

function sidebarComponentHtml() {
  return `<aside class="sidebar">
  <div class="sidebar__header">
    <h2 class="sidebar__title">Collateral Gap</h2>
    <p class="sidebar__subtitle" *ngIf="user()">{{ user()?.displayName }}</p>
    <span class="sidebar__role" *ngIf="user()">{{ user()?.role }}</span>
  </div>

  <nav class="sidebar__nav">
    <a 
      *ngFor="let item of visibleMenuItems()"
      [routerLink]="item.route"
      routerLinkActive="sidebar__nav-item--active"
      class="sidebar__nav-item">
      <span class="material-icons sidebar__nav-icon">{{ item.icon }}</span>
      <span class="sidebar__nav-label">{{ item.label }}</span>
    </a>
  </nav>

  <div class="sidebar__footer">
    <button class="sidebar__logout" (click)="logout()">
      <span class="material-icons">logout</span>
      <span>Logout</span>
    </button>
  </div>
</aside>
`;
}

function sidebarComponentScss() {
  return `@import '../../../../assets/styles/variables';

.sidebar {
  width: $sidebar-width;
  height: 100vh;
  background-color: $gray-900;
  color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;

  &__header {
    padding: $spacing-lg;
    border-bottom: 1px solid rgba(white, 0.1);
  }

  &__title {
    font-size: $font-size-xl;
    font-weight: 700;
    margin: 0 0 $spacing-xs 0;
  }

  &__subtitle {
    font-size: $font-size-sm;
    color: $gray-400;
    margin: 0;
  }

  &__role {
    display: inline-block;
    margin-top: $spacing-xs;
    padding: $spacing-xs $spacing-sm;
    background-color: $primary-color;
    border-radius: $border-radius-sm;
    font-size: $font-size-xs;
    text-transform: uppercase;
    font-weight: 600;
  }

  &__nav {
    flex: 1;
    padding: $spacing-md 0;
    overflow-y: auto;
  }

  &__nav-item {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    padding: $spacing-md $spacing-lg;
    color: $gray-300;
    text-decoration: none;
    transition: all $transition-fast;

    &:hover {
      background-color: rgba(white, 0.05);
      color: white;
    }

    &--active {
      background-color: rgba($primary-color, 0.2);
      color: white;
      border-right: 3px solid $primary-color;
    }
  }

  &__nav-icon {
    font-size: 20px;
  }

  &__nav-label {
    font-size: $font-size-base;
  }

  &__footer {
    padding: $spacing-lg;
    border-top: 1px solid rgba(white, 0.1);
  }

  &__logout {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    width: 100%;
    padding: $spacing-md;
    background-color: transparent;
    border: 1px solid rgba(white, 0.2);
    border-radius: $border-radius-sm;
    color: white;
    cursor: pointer;
    transition: all $transition-fast;

    &:hover {
      background-color: rgba(white, 0.1);
      border-color: rgba(white, 0.4);
    }
  }
}
`;
}

// ============================================
// UI - MOLECULES - TABS
// ============================================

function tabsComponentTs() {
  return `import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Tab {
  label: string;
  value: string;
  icon?: string;
}

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  @Input() tabs: Tab[] = [];
  @Input() activeTab: string = '';
  @Output() tabChange = new EventEmitter<string>();

  selectTab(value: string): void {
    this.activeTab = value;
    this.tabChange.emit(value);
  }
}
`;
}

function tabsComponentHtml() {
  return `<div class="tabs">
  <button
    *ngFor="let tab of tabs"
    [class.tabs__tab--active]="activeTab === tab.value"
    class="tabs__tab"
    (click)="selectTab(tab.value)">
    <span *ngIf="tab.icon" class="material-icons tabs__icon">{{ tab.icon }}</span>
    {{ tab.label }}
  </button>
</div>
`;
}

function tabsComponentScss() {
  return `@import '../../../../assets/styles/variables';

.tabs {
  display: flex;
  gap: $spacing-sm;
  border-bottom: 2px solid $gray-200;

  &__tab {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
    padding: $spacing-md $spacing-lg;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid transparent;
    color: $text-secondary;
    font-size: $font-size-base;
    font-weight: 500;
    cursor: pointer;
    transition: all $transition-fast;
    margin-bottom: -2px;

    &:hover {
      color: $primary-color;
      background-color: rgba($primary-color, 0.05);
    }

    &--active {
      color: $primary-color;
      border-bottom-color: $primary-color;
    }
  }

  &__icon {
    font-size: 18px;
  }
}
`;
}

// ============================================
// UI - MOLECULES - LOGIN FORM
// ============================================

function loginFormComponentTs() {
  return `import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';
import { LoginRequest } from '../../../core/models/auth.model';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule, FormsModule, ButtonComponent, InputComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Output() submitLogin = new EventEmitter<LoginRequest>();

  username: string = '';
  password: string = '';
  role: 'admin' | 'user' = 'user';
  errors: any = {};

  onSubmit(): void {
    this.errors = {};

    if (!this.username) {
      this.errors.username = 'Username is required';
    }

    if (!this.password) {
      this.errors.password = 'Password is required';
    }

    if (Object.keys(this.errors).length === 0) {
      this.submitLogin.emit({
        username: this.username,
        password: this.password,
        role: this.role
      });
    }
  }

  setRole(role: 'admin' | 'user'): void {
    this.role = role;
  }
}
`;
}

function loginFormComponentHtml() {
  return `<form class="login-form" (ngSubmit)="onSubmit()">
  <div class="login-form__role-selector">
    <button
      type="button"
      [class.login-form__role-btn--active]="role === 'user'"
      class="login-form__role-btn"
      (click)="setRole('user')">
      <span class="material-icons">person</span>
      User
    </button>
    <button
      type="button"
      [class.login-form__role-btn--active]="role === 'admin'"
      class="login-form__role-btn"
      (click)="setRole('admin')">
      <span class="material-icons">admin_panel_settings</span>
      Admin
    </button>
  </div>

  <app-input
    label="Username"
    type="text"
    placeholder="Enter your username"
    [(ngModel)]="username"
    name="username"
    [error]="errors.username">
  </app-input>

  <app-input
    label="Password"
    type="password"
    placeholder="Enter your password"
    [(ngModel)]="password"
    name="password"
    [error]="errors.password">
  </app-input>

  <app-button type="submit" [fullWidth]="true">
    Login as {{ role }}
  </app-button>

  <div class="login-form__hint">
    <p><strong>Demo Credentials:</strong></p>
    <p>Admin: admin / admin123</p>
    <p>User: user / user123</p>
  </div>
</form>
`;
}

function loginFormComponentScss() {
  return `@import '../../../../assets/styles/variables';

.login-form {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;

  &__role-selector {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-sm;
  }

  &__role-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $spacing-xs;
    padding: $spacing-md;
    background-color: $gray-100;
    border: 2px solid $gray-200;
    border-radius: $border-radius-sm;
    color: $text-secondary;
    font-size: $font-size-base;
    font-weight: 500;
    cursor: pointer;
    transition: all $transition-fast;

    &:hover {
      border-color: $primary-color;
      background-color: rgba($primary-color, 0.05);
    }

    &--active {
      background-color: $primary-color;
      border-color: $primary-color;
      color: white;
    }
  }

  &__hint {
    padding: $spacing-md;
    background-color: $gray-50;
    border-radius: $border-radius-sm;
    font-size: $font-size-sm;
    color: $text-secondary;
    
    p {
      margin: $spacing-xs 0;
    }

    strong {
      color: $text-color;
    }
  }
}
`;
}

module.exports = {
  buttonComponentTs,
  buttonComponentHtml,
  buttonComponentScss,
  inputComponentTs,
  inputComponentHtml,
  inputComponentScss,
  cardComponentTs,
  cardComponentHtml,
  cardComponentScss,
  sidebarComponentTs,
  sidebarComponentHtml,
  sidebarComponentScss,
  tabsComponentTs,
  tabsComponentHtml,
  tabsComponentScss,
  'login-formComponentTs': loginFormComponentTs,
  'login-formComponentHtml': loginFormComponentHtml,
  'login-formComponentScss': loginFormComponentScss
};
