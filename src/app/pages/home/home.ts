import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="dashboard-shell">
      <div class="dashboard-header">
        <div class="hero-card">
          <p class="eyebrow">Panel de control</p>
          <h1>Bienvenido a tiendA</h1>
          <p class="subtitle">
            Observa tus ventas, inventario y pedidos con información clara y actualizada.
          </p>

          <div class="hero-metrics">
            <div class="metric-card">
              <span class="metric-label">Ventas hoy</span>
              <strong>$1,842</strong>
            </div>
            <div class="metric-card">
              <span class="metric-label">Nuevos pedidos</span>
              <strong>8</strong>
            </div>
            <div class="metric-card">
              <span class="metric-label">Clientes activos</span>
              <strong>42</strong>
            </div>
          </div>
        </div>

        <aside class="quick-panel">
          <div class="panel-header">
            <h2>Acciones rápidas</h2>
            <span>Empieza con un clic</span>
          </div>
          <div class="quick-list">
            <button class="quick-button">Agregar producto</button>
            <button class="quick-button outline">Crear oferta</button>
            <button class="quick-button outline">Revisar inventario</button>
          </div>

          <div class="status-box">
            <p class="status-title">Inventario bajo</p>
            <p class="status-value">12 productos</p>
            <span>Necesitas reponer pronto</span>
          </div>
        </aside>
      </div>

      <div class="top-grid">
        <article class="widget-card highlight-card">
          <div class="widget-header">
            <h2>Resumen de ventas</h2>
            <span>Últimos 7 días</span>
          </div>
          <div class="chart-placeholder">Gráfico de ventas</div>
        </article>

        <article class="widget-card">
          <h2>Productos en stock</h2>
          <p class="value">128</p>
          <span>32 en nivel crítico</span>
        </article>

        <article class="widget-card">
          <h2>Pedidos pendientes</h2>
          <p class="value">7</p>
          <span>3 necesitan atención urgente</span>
        </article>
      </div>

      <div class="bottom-grid">
        <section class="activity-card">
          <div class="activity-header">
            <h2>Últimos movimientos</h2>
            <span>Actualizado hace 5 minutos</span>
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
            <div class="row">
              <span>#1021</span>
              <span>Lucas Pérez</span>
              <span class="badge badge-success">Entregado</span>
              <span>$42</span>
            </div>
          </div>
        </section>

        <section class="summary-card">
          <div class="summary-header">
            <h2>Resumen rápido</h2>
            <span>Para hoy</span>
          </div>
          <ul class="summary-list">
            <li>
              <strong>5</strong>
              <span>Pedidos nuevos</span>
            </li>
            <li>
              <strong>14</strong>
              <span>Productos vendidos</span>
            </li>
            <li>
              <strong>98%</strong>
              <span>Tasa de satisfacción</span>
            </li>
            <li>
              <strong>2</strong>
              <span>Alertas de stock</span>
            </li>
          </ul>

          <div class="progress-group">
            <span>Objetivo de ventas</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 76%"></div>
            </div>
            <span class="progress-text">76% completado</span>
          </div>
        </section>
      </div>
    </section>
  `,
  styleUrls: ['./home.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
