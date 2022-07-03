export class PurchaseListModel {
  itemNo: string;
  itemName: string;
  quantity: number;
  supplier: string;
  date: string;
  userName: string;
  status: number;
  selected: boolean;

  constructor(itemNo: string, itemName: string, quantity: number, supplier: string, date: string, userName: string, status: number, selected: boolean) {
    this.itemNo = itemNo;
    this.itemName = itemName;
    this.quantity = quantity;
    this.supplier = supplier;
    this.date = date;
    this.userName = userName;
    this.status = status;
    this.selected = selected;
  }
}
