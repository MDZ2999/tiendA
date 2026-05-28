import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-create-product',
  imports: [],
  templateUrl: './createProduct.html',
  styles: `
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity 200ms ease, visibility 200ms ease;
    }

    .modal-backdrop.open {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }

    .modal-panel {
      width: min(560px, calc(100% - 32px));
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
      padding: 24px;
      position: relative;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;
    }

    .modal-header h2 {
      margin: 0;
      font-size: 1.3rem;
    }

    .close-button {
      background: transparent;
      border: none;
      font-size: 1.4rem;
      cursor: pointer;
      line-height: 1;
      color: #555;
    }

    .modal-body {
      display: grid;
      gap: 14px;
    }

    .modal-body label {
      display: block;
      font-weight: 600;
      margin-bottom: 6px;
      color: #2b2b2b;
    }

    .modal-body input,
    .modal-body textarea,
    .modal-body select {
      width: 100%;
      padding: 12px 14px;
      font-size: 0.98rem;
      border: 1px solid #d2d2d7;
      border-radius: 10px;
      background: #fafafa;
      transition: border-color 150ms ease, box-shadow 150ms ease;
    }

    .modal-body input:focus,
    .modal-body textarea:focus,
    .modal-body select:focus {
      outline: none;
      border-color: #5b86e5;
      box-shadow: 0 0 0 4px rgba(91, 134, 229, 0.12);
    }

    .modal-body textarea {
      min-height: 100px;
      resize: vertical;
    }

    .modal-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: flex-end;
      margin-top: 18px;
    }

    .button-primary,
    .button-secondary {
      border: none;
      border-radius: 10px;
      padding: 12px 20px;
      cursor: pointer;
      font-weight: 700;
    }

    .button-primary {
      background: #4361ee;
      color: white;
    }

    .button-secondary {
      background: #f0f0f5;
      color: #333;
    }

    .button-primary:hover {
      background: #2b4dd2;
    }

    .button-secondary:hover {
      background: #e6e6eb;
    }

    .open-modal-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #4361ee;
      color: white;
      padding: 14px 22px;
      border-radius: 14px;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: 0 12px 30px rgba(67, 97, 238, 0.18);
      transition: transform 150ms ease, box-shadow 150ms ease;
    }

    .open-modal-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 18px 34px rgba(67, 97, 238, 0.25);
    }

    .form-note {
      font-size: 0.92rem;
      color: #6b7280;
      margin-top: 10px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProduct {
  protected isOpen = false;

  protected openModal() {
    this.isOpen = true;
  }

  protected closeModal() {
    this.isOpen = false;
  }

  protected registerProduct(event: Event) {
    event.preventDefault();

    const form = event.target instanceof HTMLFormElement ? event.target : null;
    if (!form) {
      return;
    }

    const formData = new FormData(form);
    const product = {
      name: formData.get('name')?.toString().trim() ?? '',
      price: formData.get('price')?.toString().trim() ?? '',
      category: formData.get('category')?.toString().trim() ?? '',
      stock: formData.get('stock')?.toString().trim() ?? '',
      imageUrl: formData.get('imageUrl')?.toString().trim() ?? '',
      description: formData.get('description')?.toString().trim() ?? '',
    };

    if (!product.name || !product.price || !product.category) {
      alert('Por favor completá los campos obligatorios: Nombre, Precio y Categoría.');
      return;
    }

    console.log('Producto registrado:', product);
    alert(`Producto "${product.name}" registrado correctamente.`);
    form.reset();
    this.closeModal();
  }
}
