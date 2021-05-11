interface TableColumnData {
  prop: string,
  label: string,
  sortable?: boolean,
}

interface OptionData {
  value?: string | number | boolean | null,
  label?: string
}

interface Window {
  TMap: any,
  initMap: any
}

interface Dictionary {
  [key: string]: string
}

interface OrganizationNode {
  code: string,
  id?: string,
  name: string,
  parentId: string,
  parentName?: string,
  children?: OrganizationNode[]
}



