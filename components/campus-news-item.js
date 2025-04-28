// components/campus-news-item.js
class CampusNewsItem extends HTMLElement {
    constructor() {
      super();
      this._article = null;
      this._isActive = false;
      
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          .item {
            padding: 12px;
            border-bottom: 1px solid #ddd;
            cursor: pointer;
            transition: all 0.2s;
          }
          .item:hover {
            background-color: #f9f9f9;
          }
          .item.active {
            border-left: 4px solid #264653;
            background: #f0f4f8;
          }
          h3 { 
            margin: 0 0 6px; 
            font-size: 16px; 
            color: #264653;
          }
          p { 
            margin: 0; 
            font-size: 14px; 
            color: #555; 
          }
          .date { 
            font-size: 12px; 
            color: #999; 
            margin-top: 4px; 
          }
          .category {
            display: inline-block;
            font-size: 11px;
            background-color: #e9f5f9;
            color: #264653;
            padding: 2px 6px;
            border-radius: 10px;
            margin-top: 4px;
          }
        </style>
        <div class="item">
          <h3 id="title"></h3>
          <p id="summary"></p>
          <div class="date" id="date"></div>
          <div class="category" id="category"></div>
        </div>
      `;
    }
    
    set article(value) {
      this._article = value;
      this.renderArticle();
    }
    
    get article() {
      return this._article;
    }
    
    set isActive(value) {
      this._isActive = value;
      this.updateActiveState();
    }
    
    connectedCallback() {
      this.renderArticle();
      this.shadowRoot.querySelector('.item').addEventListener('click', this.handleClick.bind(this));
    }
    
    renderArticle() {
      if (!this._article) return;
      
      const title = this.shadowRoot.getElementById('title');
      const summary = this.shadowRoot.getElementById('summary');
      const date = this.shadowRoot.getElementById('date');
      const category = this.shadowRoot.getElementById('category');
      
      if (title) title.textContent = this._article.title;
      if (summary) summary.textContent = this._article.summary;
      if (date) date.textContent = this._article.date;
      if (category) category.textContent = this._article.category;
      
      this.updateActiveState();
    }
    
    updateActiveState() {
      const item = this.shadowRoot.querySelector('.item');
      if (!item) return;
      
      if (this._isActive) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }
    
    handleClick() {
      if (!this._article) return;
      
      this.dispatchEvent(new CustomEvent('campus:article-select', {
        detail: { id: this._article.id },
        bubbles: true,
        composed: true
      }));
    }
  }
  
  customElements.define('campus-news-item', CampusNewsItem);