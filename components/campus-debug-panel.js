// components/campus-debug-panel.js
class CampusDebugPanel extends HTMLElement {
    constructor() {
      super();
      this._debugInfo = {
        category: 'Todas',
        selectedId: null,
        total: 0,
        filtered: 0
      };
      this._visible = false;
      
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          :host {
            display: block;
          }
          .debug-container {
            background-color: #f8f8f8;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 15px;
            margin-top: 20px;
            font-family: monospace;
          }
          .toggle-button {
            background-color: #264653;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 4px;
            cursor: pointer;
            margin-bottom: 10px;
          }
          .debug-info {
            display: none;
          }
          .debug-info.visible {
            display: block;
          }
          .debug-row {
            margin-bottom: 5px;
            display: flex;
          }
          .debug-label {
            width: 120px;
            font-weight: bold;
          }
          .debug-value {
            color: #2a9d8f;
          }
        </style>
        <div class="debug-container">
          <button class="toggle-button" id="toggle-debug">Mostrar Panel de Depuración</button>
          <div class="debug-info" id="debug-info">
            <div class="debug-row">
              <span class="debug-label">Categoría:</span>
              <span class="debug-value" id="debug-category">Todas</span>
            </div>
            <div class="debug-row">
              <span class="debug-label">ID Seleccionado:</span>
              <span class="debug-value" id="debug-selected">ninguno</span>
            </div>
            <div class="debug-row">
              <span class="debug-label">Total Artículos:</span>
              <span class="debug-value" id="debug-total">0</span>
            </div>
            <div class="debug-row">
              <span class="debug-label">Filtrados:</span>
              <span class="debug-value" id="debug-filtered">0</span>
            </div>
          </div>
        </div>
      `;
    }
    
    connectedCallback() {
      this.addEventListener('campus:debug-update', this.handleDebugUpdate);
      
      const toggleButton = this.shadowRoot.getElementById('toggle-debug');
      if (toggleButton) {
        toggleButton.addEventListener('click', this.toggleDebugPanel.bind(this));
      }
    }
    
    disconnectedCallback() {
      this.removeEventListener('campus:debug-update', this.handleDebugUpdate);
    }
    
    handleDebugUpdate = (event) => {
      this._debugInfo = event.detail;
      this.updateDebugInfo();
    }
    
    toggleDebugPanel() {
      this._visible = !this._visible;
      
      const debugInfo = this.shadowRoot.getElementById('debug-info');
      const toggleButton = this.shadowRoot.getElementById('toggle-debug');
      
      if (debugInfo) {
        if (this._visible) {
          debugInfo.classList.add('visible');
          toggleButton.textContent = 'Ocultar Panel de Depuración';
        } else {
          debugInfo.classList.remove('visible');
          toggleButton.textContent = 'Mostrar Panel de Depuración';
        }
      }
    }
    
    updateDebugInfo() {
      const categoryEl = this.shadowRoot.getElementById('debug-category');
      const selectedEl = this.shadowRoot.getElementById('debug-selected');
      const totalEl = this.shadowRoot.getElementById('debug-total');
      const filteredEl = this.shadowRoot.getElementById('debug-filtered');
      
      if (categoryEl) categoryEl.textContent = this._debugInfo.category;
      if (selectedEl) selectedEl.textContent = this._debugInfo.selectedId || 'ninguno';
      if (totalEl) totalEl.textContent = this._debugInfo.total;
      if (filteredEl) filteredEl.textContent = this._debugInfo.filtered;
    }
  }
  
  customElements.define('campus-debug-panel', CampusDebugPanel);