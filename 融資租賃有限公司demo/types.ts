
export interface FormData {
  name: string;
  gender: string;
  phone: string;
  city: string;
  time: string;
}

export enum LoanType {
  CREDIT = '信用貸款',
  MOBILE = '手機貸款',
  ESCROW = '代書貸款',
  SECOND_CAR = '汽車二胎',
  MOTORCYCLE = '機車貸款',
  LAND = '土地貸款',
  HOUSING = '房屋貸款',
  SECOND_HOUSING = '房屋二胎',
  DEFECTIVE = '瑕疵貸款',
  SALARY = '薪轉信貸',
  INTEGRATE = '整合負債',
}
