/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShoppingListItem = /* GraphQL */ `
  query GetShoppingListItem($id: ID!) {
    getShoppingListItem(id: $id) {
      id
      itemName
      owner
    }
  }
`;
export const listShoppingListItems = /* GraphQL */ `
  query ListShoppingListItems(
    $filter: ModelShoppingListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShoppingListItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        itemName
        owner
      }
      nextToken
    }
  }
`;
