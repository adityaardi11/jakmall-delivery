# Jakmall

> (intented to be used for interview purpose only) jakmall checkout module

Jakmall.com merupakan salah satu pusat perbelanjaan online marketplace di Indonesia yang dimiliki dan dijalankan oleh PT.Jakmall Digital Niaga. Jakmall.com didirikan pada 1 Agustus 2016.
Dengan mengkurasi dan memverifikasi penjual terlebih dahulu, kami menghubungkan langsung penjual dengan pembeli tanpa melalui tangan kedua, sehingga barang yang diperoleh pembeli merupakan harga yang terbaik di pasaran. Karenanya kami hadir dengan tagline, Lebih Murah Langsung Dari Pusatnya, sebagai komitmen kami untuk terus memberikan barang langsung dari sumbernya dengan harga yang pasti lebih murah.

Tech Stack :

- Frontend Technology : VueJS.
- State Management : Vuex.
- Temporary Data Storage

Features :

- Responsive

Some Restrictions :

- Not using bootstrap, bulma, or foundation (from scratch)
- CSS BEM

Layout Structures :

- Cart Page (as Home Page), contains just information about stuff(s) bought
- Delivery Page, contains information about buyer name, phone number, and delivery address, and dropshipping information
- Payment Page, contains payment and shipping methods to choose.
- Finish Page, contains thank you note and summary.
- Summary module also included in Delivery and Payment Page

Todo :

- Dropshipper check
- Delivery Address, max 120 digits, counter
- Email (? since not provided in test images), valid email
- Delivery Estimate, JNE: 2 days, Go Send: today, Personal Courier: 1 day
- Generate random 5 digit alphanumerik dengan pengecualian 1,I,0,O

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
