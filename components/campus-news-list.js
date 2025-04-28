// components/campus-news-list.js
class CampusNewsList extends HTMLElement {
    constructor() {
      super();
      this._articles = [];
      this._selectedId = null;
      
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          :host {
            display: block;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            max-height: 500px;
            overflow-y: auto;
          }
          .list-container {
            padding: 10px;
          }
          h3 {
            margin-top: 0;
            padding: 10px;
            background-color: #264653;
            color: white;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
          .empty-message {
            padding: 20px;
            text-align: center;
            color: #666;
          }
        </style>
        <div>
          <h3>Noticias</h3>
          <div class="list-container" id="news-container">
            <div class="empty-message">No hay noticias disponibles</div>
          </div>
        </div>
      `;
    }
    
    set articles(value) {
      this._articles = value;
      this.renderArticles();
    }
    
    set selectedId(value) {
      this._selectedId = value;
      this.updateSelectedItem();
    }
    
    connectedCallback() {
      this.renderArticles();
    }
    
    renderArticles() {
      const container = this.shadowRoot.getElementById('news-container');
      if (!container) return;
      
      container.innerHTML = '';
      
      if (this._articles.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.className = 'empty-message';
        emptyMsg.textContent = 'No hay noticias disponibles para esta categoría';
        container.appendChild(emptyMsg);
        return;
      }
      
      this._articles.forEach(article => {
        const newsItem = document.createElement('campus-news-item');
        newsItem.article = article;
        newsItem.isActive = article.id === this._selectedId;
        container.appendChild(newsItem);
      });
    }
    
    updateSelectedItem() {
      const items = this.shadowRoot.querySelectorAll('campus-news-item');
      items.forEach(item => {
        item.isActive = item.article.id === this._selectedId;
      });
    }
  }
  
  customElements.define('campus-news-list', CampusNewsList);