export default {
  id: 'card-receipt',
  name: 'Receipt Card',
  category: 'cards',
  tags: ['card', 'receipt', 'invoice', 'table', 'css-only', 'minimal', 'business', 'dashed'],
  author: 'Cksunandh',
  html: `<div class="rc-receipt">
  <p class="rc-shop-name">UI Market</p>
  <p class="rc-info">
    1234 Market Street, Suite 101<br />
    City, State ZIP<br />
    Date: 12/27/2025<br />
    Time: 03:15 PM
  </p>

  <table class="rc-table">
    <thead>
      <tr>
        <th>Item</th>
        <th>Qty</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Item 1</td>
        <td>2</td>
        <td>$20.00</td>
      </tr>
      <tr>
        <td>Item 2</td>
        <td>1</td>
        <td>$10.00</td>
      </tr>
      <tr>
        <td>Item 3</td>
        <td>3</td>
        <td>$15.00</td>
      </tr>
    </tbody>
  </table>

  <div class="rc-total">
    <p>Total:</p>
    <p>$45.00</p>
  </div>

  <p class="rc-thanks">Thank you for shopping with us!</p>
</div>`,
  css: `
.rc-receipt {
  width: 250px;
  background: white;
  border: 2px dashed #ccc;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.rc-shop-name {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

.rc-info {
  text-align: center;
  font-size: 0.85rem;
  margin-bottom: 15px;
}

.rc-receipt .rc-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 15px;
  font-size: 0.85rem;
}

.rc-receipt .rc-table th,
.rc-receipt .rc-table td {
  padding: 4px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.rc-total {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.rc-barcode {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.rc-thanks {
  font-size: 0.85rem;
  text-align: center;
  margin-top: 10px;
}
`
}