// components/campus-news-detail.js
class CampusNewsDetail extends HTMLElement {
    constructor() {
      super();
      this._article = null;
      
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          :host {
            display: block;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            margin-bottom: 20px;
          }
          .detail-container {
            padding: 20px;
          }
          .empty-message {
            padding: 40px 20px;
            text-align: center;
            color: #666;
          }
          h2 {
            margin-top: 0;
            color: #264653;
          }
          .meta {
            display: flex;
            justify-content: space-between;
            color: #666;
            font-size: 14px;
            margin-bottom: 15px;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
          }
          .category {
            display: inline-block;
            background-color: #e9f5f9;
            color: #264653;
            padding: 2px 8px;
            border-radius: 12px;
          }
          .content {
            line-height: 1.5;
          }
        </style>
        <div id="detail-wrapper">
          <div class="empty-message">
            Selecciona una noticia para ver el detalle
          </div>
        </div>
      `;
    }
    
    set article(value) {
      this._article = value;
      this.renderDetail();
    }
    
    connectedCallback() {
      this.renderDetail();
    }
    
    renderDetail() {
      const wrapper = this.shadowRoot.getElementById('detail-wrapper');
      if (!wrapper) return;
      
      if (!this._article) {
        wrapper.innerHTML = `
          <div class="empty-message">
            Selecciona una noticia para ver el detalle
          </div>
        `;
        return;
      }
      
      wrapper.innerHTML = `
        <div class="detail-container">
          <h2>${this._article.title}</h2>
          <div class="meta">
            <span>${this._article.author} | ${this._article.date}</span>
            <span class="category">${this._article.category}</span>
          </div>
          <div class="content">
            ${this._article.content}
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('campus-news-detail', CampusNewsDetail);