import { Table, Image, Container } from "semantic-ui-react";

export const ShoppingBasket = (basketListData: any) => {
  const { basketList } = basketListData;

  return (
    <Container textAlign="center">
      <Table basic="very" rowed="true">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Items</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {basketList.map((basketItem: any) => {
            <Table.Row key={basketItem.id}>
              <Table.Cell>
                <Image alt={basketItem.title} src={basketItem.image} rounded size="mini" />
              </Table.Cell>
              <Table.Cell>{basketItem.title}</Table.Cell>
              <Table.Cell>{basketItem.quantity || 1}</Table.Cell>
              <Table.Cell>{basketItem.price || 1 * basketItem.quantity}</Table.Cell>
            </Table.Row>
          })}
        </Table.Body>
      </Table>
    </Container>
  );
}

export default ShoppingBasket;
