type ColumnColors = 'yellow' | 'red' | 'default';

interface RowType {
  index: number
  item: any
  columns: Array<{
    key: string
    value: string
    type: string
    color?: ColumnColors
  }>
  props: Record<string, any>
}

export type { ColumnColors, RowType };
