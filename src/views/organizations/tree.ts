interface OrganizationNode {
  code: string,
  id: number,
  name: string,
  parentId: number,
  parentName?: string,
  children?: OrganizationNode[]
}

/*
const breadthTravel = (node: any, condition: (node: any) => boolean, callback?: (parent: any, index?: number, target?: any) => any): any => {
  if (!node.children) return false
  const children = node.children
  for (let i: number = 0; i < children.length; i++) {
    if (!condition(children[i])) breadthTravel(children[i], condition, callback)
    callback && callback(node, 1, children[i])
    return { parent: node, index: i, target: children[i] }
  }
  return false
}
*/


/*
const updateTreeData = (type: 'load' | 'add' | 'remove' | 'update', node: OrganizationNode) => {
  switch (type) {
    case 'add':
      breadthTravel(organizationTree, _node => _node.id == node.parentId, parent => {
        parent.children = parent.children || []
        parent.children.push(node)
      })
      break
    case 'remove':
      breadthTravel(organizationTree, _node => _node.id == node.id, (parent, i) => { parent.children.splice(i, 1) })
      break
    case 'update':
      breadthTravel(organizationTree, _node => node.id == node.id, (parent, i) => { parent.splice(i, 1, node) })
      break
  }
}
*/

const treeGenerate = (flatArray: any[]): OrganizationNode => {
  const res: OrganizationNode = {
    code: 'root',
    name: '全部组织',
    id: 0,
    children: [],
    parentId: -1
  }
  for (let node of flatArray) {
    if (node.parentId == 0) {
      node.parentName = '无'
      res.children && res.children.push(node)
    } else {
      const parentNode = flatArray.find(el => el.id == node.parentId)
      if (!parentNode) continue
      parentNode.children = parentNode.children || []
      node.parentName = parentNode.name
      parentNode.children.push(node)
    }
  }
  return res
}

export { OrganizationNode, treeGenerate }
