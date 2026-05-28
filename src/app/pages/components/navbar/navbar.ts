import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styles: `
    :host {
      display: block;
      background: #ffffff;
      border-bottom: 1px solid #e2e8f0;
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
    }

    .navbar {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0.75rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .navbar-brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1rem;
      font-weight: 700;
      color: #0f172a;
    }

    .navbar-brand span {
      display: inline-block;
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);
      border-radius: 12px;
      color: white;
      display: grid;
      place-items: center;
      font-size: 0.95rem;
    }

    .navbar-links {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .nav-link {
      color: #334155;
      text-decoration: none;
      font-weight: 600;
      transition: color 150ms ease;
    }

    .nav-link:hover,
    .nav-link.active {
      color: #2563eb;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {}
