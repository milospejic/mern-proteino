import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams();
  const { slang } = params;
  return (
    <div>
      <h1>{slang}</h1>
    </div>
  );
}
export default ProductScreen;