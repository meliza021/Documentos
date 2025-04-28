// components/campus-news-app.js
class CampusNewsApp extends HTMLElement {
    constructor() {
      super();
      this._articles = [];
      this._currentCategory = 'Todas';
      this._currentArticleId = null;
      
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          :host {
            display: block;
            max-width: 1200px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
          }
          .app-container {
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-template-rows: auto 1fr;
            gap: 20px;
          }
          .header {
            grid-column: 1 / 3;
            padding: 10px 0;
            text-align: center;
            background-color: #264653;
            color: white;
            border-radius: 5px;
          }
          .left-panel {
            grid-column: 1 / 2;
          }
          .right-panel {
            grid-column: 2 / 3;
          }
          @media (max-width: 768px) {
            .app-container {
              grid-template-columns: 1fr;
            }
            .header {
              grid-column: 1;
            }
            .left-panel, .right-panel {
              grid-column: 1;
            }
          }
        </style>
        <div class="app-container">
          <div class="header">
            <h1>Campus News</h1>
          </div>
          <div class="left-panel">
            <campus-category-filters></campus-category-filters>
            <campus-news-list></campus-news-list>
          </div>
          <div class="right-panel">
            <campus-news-detail></campus-news-detail>
            <campus-debug-panel></campus-debug-panel>
          </div>
        </div>
      `;
      
      this.addEventListener('campus:category-change', this.handleCategoryChange);
      this.addEventListener('campus:article-select', this.handleArticleSelect);
    }
    
    set articles(value) {
      this._articles = value;
      this.updateFilteredArticles();
      this.dispatchDebugUpdate();
    }
    
    get articles() {
      return this._articles;
    }
    
    connectedCallback() {
      setTimeout(() => {
        this.updateFilteredArticles();
      }, 0);
    }
    
    handleCategoryChange = (event) => {
      this._currentCategory = event.detail.category;
      this.updateFilteredArticles();
      this.dispatchDebugUpdate();
    }
    
    handleArticleSelect = (event) => {
      this._currentArticleId = event.detail.id;
      
      // Actualizar el detalle del artículo
      const detailComponent = this.shadowRoot.querySelector('campus-news-detail');
      const selectedArticle = this._articles.find(article => article.id === this._currentArticleId);
      if (detailComponent && selectedArticle) {
        detailComponent.article = selectedArticle;
      }
      
      // Actualizar lista para resaltar el seleccionado
      const listComponent = this.shadowRoot.querySelector('campus-news-list');
      if (listComponent) {
        listComponent.selectedId = this._currentArticleId;
      }
      
      this.dispatchDebugUpdate();
    }
    
    updateFilteredArticles() {
      const filteredArticles = this._currentCategory === 'Todas' 
        ? this._articles 
        : this._articles.filter(article => article.category === this._currentCategory);
      
      const filtersComponent = this.shadowRoot.querySelector('campus-category-filters');
      if (filtersComponent) {
        const categories = ['Todas', ...new Set(this._articles.map(article => article.category))];
        filtersComponent.categories = categories;
        filtersComponent.activeCategory = this._currentCategory;
      }
      
      const listComponent = this.shadowRoot.querySelector('campus-news-list');
      if (listComponent) {
        listComponent.articles = filteredArticles;
        listComponent.selectedId = this._currentArticleId;
      }
    }
    
    dispatchDebugUpdate() {
      const filteredList = this._currentCategory === 'Todas' 
        ? this._articles 
        : this._articles.filter(article => article.category === this._currentCategory);
      
      this.dispatchEvent(new CustomEvent('campus:debug-update', {
        detail: {
          category: this._currentCategory,
          selectedId: this._currentArticleId,
          total: this._articles.length,
          filtered: filteredList.length
        },
        bubbles: true,
        composed: true
      }));
    }
  }
  
  customElements.define('campus-news-app', CampusNewsApp);