import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected isModalOpen = false;

  protected openModal() {
    this.isModalOpen = true;
  }

  protected closeModal() {
    this.isModalOpen = false;
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
