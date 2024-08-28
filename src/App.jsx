import React, { useState } from 'react';

const App = () => {
  // Sample products array
  const products = [
    { 
    id: 1,
    img: 'https://images.unsplash.com/photo-1721332155567-55d1b12aa271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    },
    { 
    id: 2,
    img: 'https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
   },
    { 
      id: 3,
      img: 'https://images.unsplash.com/photo-1569580388550-50907e7bad86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    },
    { 
      id: 4,
      img: 'https://images.unsplash.com/photo-1723398466717-12d0c8f6299c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
    },
    { 
      id: 5,
      img: 'https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    },
    { 
      id: 6,
      img: 'https://images.unsplash.com/photo-1718808958754-e0f24c2cbabc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
    },  
    {
      id: 7,
      img: 'https://images.unsplash.com/photo-1720719542373-9e9067e6be20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 8,
      img : 'https://images.unsplash.com/photo-1719937050792-a6a15d899281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 9,
      img : 'https://images.unsplash.com/photo-1723843038794-97663cc894ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D',
    },

  ];

  // State to hold the selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handler to select a product
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Handler to go back to the product list
  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  return (
    <div className='parent_class'>
      {/* Display selected product */}
      {selectedProduct ? (
        <div style={{ textAlign: 'center', }} >
          <img
            src={selectedProduct.img}
            style={{ width: '400px', height: '450px', objectFit: 'cover' }}
            />
          {/* <p>{selectedProduct.description}</p> */}
          <button onClick={handleBackToProducts} className='button_back'>Back to Products</button>
        </div>
      ) : (
        // Display products list

        <div style={{ display: 'flex',justifyContent: 'center', gap: '15px', flexWrap: 'wrap', padding: '30px 20px' }}>
       <h1 className='heading'>Dummy Unsplash</h1>
          {products.map((product) => (
            <div key={product.id} style={{ cursor: 'pointer', textAlign: 'center' }}>
              
              <img
                src={product.img}
                alt={product.name}
                onClick={() => handleProductClick(product)}
                style={{ width: '380px', height: '420px', objectFit: 'cover' }}
              />
            </div>
          ))}
          <h1 className='heading_end'>Design By Ammar Ahmed</h1>
        </div>
      )}
    </div>
  );
};

export default App;
