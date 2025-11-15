import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Mi Portafolio</h1>

      <p>Bienvenido a mi landing.</p>

      <Link to="/CNN_MNIST">
        <button>Ir a CNN_MNIST</button>
      </Link>
    </div>
  );
}
