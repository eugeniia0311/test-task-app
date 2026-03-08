import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import menuData from '../../data/menu-data.json';

interface MenuItem {
  name: string;
  value: number;
}

interface Menu {
  id: number;
  name: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menus',
  standalone: true,
  templateUrl: './menus.html',
  styleUrl: './menus.css',
  imports: [CommonModule]
})

export class MenusComponent {
  menus: Menu[] = menuData;

  selectedMenu: Menu | null = null;
  selectedItems: MenuItem[] = [];

  chooseMenu(menu: Menu) {
    this.selectedMenu = menu;
    this.selectedItems = [];
  }

  toggleItem(item: MenuItem, event: any) {
    if (event.target.checked) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems = this.selectedItems.filter(i => i !== item);
    }
  }

  get total() {
    return this.selectedItems.reduce((sum, i) => sum + i.value, 0);
  }
}