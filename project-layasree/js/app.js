const firebaseConfig = {
    apiKey: "AIzaSyDWV9CIAhVouAGzGP1uGH-D0nFpzyTP4vM",
    authDomain: "layasree-webiste.firebaseapp.com",
    projectId: "layasree-webiste",
    storageBucket: "layasree-webiste.appspot.com",
    messagingSenderId: "413759846215",
    appId: "1:413759846215:web:444a7858f2a73338727e62",
    measurementId: "G-XXMZ3EVLQP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

products = []
function getProducts() {
    db.collection('products').get().then(data => {
        console.log(data.docs[0].data())
        data.docs.forEach(element => {
            const singleProduct = element.data();
            products.push(singleProduct);
        });
        products.forEach(element => {
            $('.products').append(
                `
                        <div class="box">
                            <div class="content">
                                <p href="#" class="title">${element.productName}</p>
                            </div>
                        </div>
                    `
            );
        })
    });
}
getProducts();

items = []
function getItems() {
    db.collection('products').get().then(data => {
        console.log(data.docs[0].data())
        data.docs.forEach(element => {
            const singleProduct = element.data();
            items.push(singleProduct);
        });
        items.forEach(element => {
            $('.items').append(
                `
                        <div class="box">
                            <div class="image ">
                                <img src=${element.productImg} alt="">
                            </div>
                            <div class="content">
                            <p href="#" class="title">${element.productName}</p>
                            <span>${element.productPrice}</span>
                            <p>${element.productDes}</p>
                        </div>
                        
                    `
            );
        })
    });
}
getItems();