export enum RelativeDateType {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Quarter = 'quarter',
  Year = 'year'
}

export enum RelativeDateValueType {
  Prev = 'prev',
  Current = 'current',
  Next = 'next'
}

export const RelativeDateTypeLabels = {
  [RelativeDateType.Day]: '天',
  [RelativeDateType.Week]: '周',
  [RelativeDateType.Month]: '月',
  [RelativeDateType.Quarter]: '季度',
  [RelativeDateType.Year]: '年'
}

export const RelativeDateValueTypeLables = {
  [RelativeDateValueType.Current]: {
    [RelativeDateType.Day]: '今',
    [RelativeDateType.Week]: '本',
    [RelativeDateType.Month]: '本',
    [RelativeDateType.Quarter]: '本',
    [RelativeDateType.Year]: '今'
  },
  [RelativeDateValueType.Prev]: '前',
  [RelativeDateValueType.Next]: '后'
}
