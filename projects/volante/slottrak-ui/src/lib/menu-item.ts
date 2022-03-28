export class MenuItem {
  readonly id: string
  displayText: string = ''
  routerLink: string = ''
  children: MenuItem[] = []
  parent: MenuItem | undefined

  constructor(config: { readonly id: string, displayText: string, routerLink: string, children?: MenuItem[] }) {
    this.id = config.id
    this.displayText = config.displayText
    this.routerLink = config.routerLink
    this.children = config.children ?? []
  }

  addChild(menuItem: MenuItem) {
    menuItem.parent = this
    this.children.push(menuItem)
  }

  findAncestor(id: string): MenuItem | undefined {
    if (this.id === id) {
      return this
    }

    return this.children.find(c => c.findAncestor(c.id))
  }

  removeChild(menuItem: MenuItem) {
    const index = this.children.indexOf(menuItem)
    if (index < 0) {
      return
    }

    this.children.splice(index, 1)
  }
}
