import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="dashboard-shell">
      <div class="hero-card">
        <div>
          <p class="eyebrow">Panel de control</p>
          <h1>Bienvenido a tiendA</h1>
          <p class="subtitle">
            Monitorea ventas, inventario y pedidos desde un lugar central.
          </p>
        </div>
        <div class="hero-actions">
          <button class="btn-primary">Ver productos</button>
          <button class="btn-secondary">Registrar venta</button>
        </div>
      </div>

      <div class="widgets-grid">
        <article class="widget-card">
          <h2>Ventas totales</h2>
          <p class="value">$14,250</p>
          <span>Crecimiento +12% este mes</span>
        </article>

        <article class="widget-card">
          <h2>Productos en stock</h2>
          <p class="value">128</p>
          <span>Inventario actualizado</span>
        </article>

        <article class="widget-card">
          <h2>Pedidos pendientes</h2>
          <p class="value">7</p>
          <span>Revisa los últimos pedidos</span>
        </article>
      </div>

      <section class="activity-card">
        <div class="activity-header">
          <h2>Actividades recientes</h2>
          <span>Últimas 24 horas</span>
        </div>

        <div class="activity-table">
          <div class="row header">
            <span>Pedido</span>
            <span>Cliente</span>
            <span>Estado</span>
            <span>Total</span>
          </div>
          <div class="row">
            <span>#1024</span>
            <span>María López</span>
            <span class="badge badge-warning">En preparación</span>
            <span>$98</span>
          </div>
          <div class="row">
            <span>#1023</span>
            <span>Javier Ramos</span>
            <span class="badge badge-success">Enviado</span>
            <span>$216</span>
          </div>
          <div class="row">
            <span>#1022</span>
            <span>Ana Torres</span>
            <span class="badge badge-info">Pago confirmado</span>
            <span>$76</span>
          </div>
        </div>
      </section>
    </section>
  `,
  styleUrls: ['./home.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
