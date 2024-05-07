import { Button, Card, Image } from 'semantic-ui-react';
import { CiCircleRemove } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";

export const ProductCard = (productData: any) => {
  const { product } = productData;

  return (
    <Card>
      <Card.Content>
        <Image alt={product.title} src={product.image} />

        <Card.Header>{product.title}</Card.Header>
        <Card.Description>{product.description}</Card.Description>
        <Card.Header>${product.price}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className='ui three buttons'>
          <Button basic color='red'>
            <CiCircleRemove />
          </Button>
          <Button basic color='blue'></Button>
          <Button basic color='green'>
            <IoIosAddCircle />
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default ProductCard;
