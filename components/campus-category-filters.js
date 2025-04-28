// components/campus-category-filters.js
class CampusCategoryFilters extends HTMLElement {
    constructor() {
      super();
      this._categories = [];
      this._activeCategory = 'Todas';
      
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          :host {
            display: block;
            margin-bottom: 20px;
          }
          .filter-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding: 10px;
            background-color: #e9f5f9;
            border-radius: 5px;
          }
          button {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            background-color: #e0e0e0;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.2s;
          }
          button:hover {
            background-color: #2a9d8f;
            color: white;
          }
          button.active {
            background-color: #264653;
            color: white;
          }
          h3 {
            margin-top: 0;
            color: #264653;
          }
        </style>
        <div>
          <h3>Categorías</h3>
          <div class="filter-container" id="filters-container">
            <!-- Los botones de categoría se añadirán dinámicamente -->
          </div>
        </div>
      `;
    }
    
    set categories(value) {
      this._categories = value;
      this.renderCategories();
    }
    
    set activeCategory(value) {
      this._activeCategory = value;
      this.updateActiveButton();
    }
    
    connectedCallback() {
      this.renderCategories();
    }
    
    renderCategories() {
      const container = this.shadowRoot.getElementById('filters-container');
      if (!container) return;
      
      container.innerHTML = '';
      
      this._categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.classList.add('filter-button');
        if (category === this._activeCategory) {
          button.classList.add('active');
        }
        
        button.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('campus:category-change', {
            detail: { category },
            bubbles: true,
            composed: true
          }));
        });
        
        container.appendChild(button);
      });
    }
    
    updateActiveButton() {
      const buttons = this.shadowRoot.querySelectorAll('.filter-button');
      buttons.forEach(button => {
        if (button.textContent === this._activeCategory) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }
  }
  
  customElements.define('campus-category-filters', CampusCategoryFilters);