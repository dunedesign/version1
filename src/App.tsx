import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';

const products = [
  {
    id: 1,
    name: "Sac à main élégant",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=870"
  },
  {
    id: 2,
    name: "Montre classique",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=870"
  },
  {
    id: 3,
    name: "Sneakers tendance",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=870"
  },
  {
    id: 4,
    name: "Lunettes de soleil",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=870"
  },
  {
    id: 5,
    name: "Bracelet en or",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=870"
  },
  {
    id: 6,
    name: "Parfum de luxe",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=870"
  }
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (id: number) => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartCount} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1770"
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="text-white p-12">
                <h1 className="text-5xl font-bold mb-4">Nouvelle Collection</h1>
                <p className="text-xl mb-8 max-w-md">Découvrez nos dernières tendances et accessoires de mode.</p>
                <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
                  Découvrir
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Produits Populaires</h2>
            <div className="flex gap-2">
              {['Tout', 'Mode', 'Accessoires', 'Bijoux'].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 rounded-full text-sm bg-white hover:bg-blue-50 transition-colors"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white border-t mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">À propos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Notre histoire</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Carrières</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Durabilité</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Service client</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Livraison</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Retours</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Légal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Confidentialité</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">Inscrivez-vous pour recevoir nos offres</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-100"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-gray-600">
            © {new Date().getFullYear()} BoutiquePro. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;