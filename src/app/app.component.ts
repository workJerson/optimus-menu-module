import { Component } from '@angular/core'
import { MenuService } from './services/menus/menu.service'
import { SubMenuService } from './services/sub-menus/sub-menu.service'
import { ModuleService } from './services/modules/module.service'
import { ResourceTypeService } from './services/resourceTypes/resource-type.service'
import { ResourceService } from './services/resources/resource.service'
import { ResourceGroupService } from './services/resourceGroups/resource-group.service'
import { ClientMenuModuleService } from './services/client-menu-modules/client-menu-module.service'
import { ModuleGroupService } from './services/module-group/module-group.service'
import { GroupResourceService } from './services/group-resources/group-resource.service'
import { ThrowStmt } from '@angular/compiler'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'optimus-menu-module'


  // Menu
  serviceTypes: any[] = []
  selectedServiceType: number
  menuList: any[] = []
  serviceId: number
  display: string
  description: string
  index: number

  // SubMenu
  selectedMenuId: number
  subMenuList: any[] = []
  subMenuDisplay: string
  subMenuDescription: string
  subMenuIndex: number

  // Module
  modules: any[] = []
  moduleName: string
  moduleDescription: string
  // Resource Type
  resourceTypeId: string
  resourceTypeList: any[] = []

  // Resource
  resourceList: any[] = []
  resourceName: string
  resourceDescription: string
  method: string
  path:string
  allowAnonymous: string

  // Resource Group
  resourceGroupList: any[] = []
  resourceGroupDescription: string
  resourceGroupName: string

  // Client Menu Module
  clientMenuModuleList: any[] = []
  selectedModuleId: number
  selectedCMMMenuId: number
  selectedCMMSubMenuId: number
  clientMenuModuleSubMenuList: any[] = []

  // Module Group
  moduleGroupList: any[] = []
  moduleGroupModuleId: number
  moduleGroupResourceGroupId: number
  moduleGroupSelectedResourceGroupId: string
  moduleGroupSelectedModuleId: string


  //Group Resource
  groupResourceList: any[] = []
  groupResourceSelectedModuleGroupId: string
  groupResourceSelectedResourceId: string

  constructor(
    private menuService: MenuService,
    private subMenuService: SubMenuService,
    private moduleService: ModuleService,
    private resourceTypeService: ResourceTypeService,
    private resourceService: ResourceService,
    private resourceGroupService: ResourceGroupService,
    private clientMenuModuleService: ClientMenuModuleService,
    private moduleGroupService: ModuleGroupService,
    private groupResourceService: GroupResourceService,

  ) {
    this.getServiceTypes()
    this.getAllModules()
    this.getAllResourceTypes()
    this.getAllResource()
    this.getAllResourceGroup()
    this.getModuleGroups()
    this.getGroupResources()
  }

  getGroupResources(){
    this
    .groupResourceService
    .getAllGroupResources()
    .subscribe((result) => {
      (
        {
          data: {
            groupResource: this.groupResourceList
          }

        } = result
      )
    })
  }

  /**
   *
   *
   * @memberof AppComponent
   */
  getModuleGroups() {
    this
    .moduleGroupService
    .getAllModuleGroups()
    .subscribe((result) => {
      (
        {
          data: {
            moduleGroup: this.moduleGroupList
          }

        } = result
      )
    })
  }
  /**
   *
   *
   * @memberof AppComponent
   */
  getSubMenuByServiceId() {
    this
      .subMenuService
      .getSubMenuByServiceId(this.serviceId)
      .subscribe((result) => {
        (
          {
            data: {
              clientSubMenu: this.clientMenuModuleSubMenuList
            }

          } = result
        )
      })
  }
  /**
   *
   *
   * @memberof AppComponent
   */
  getAllClientMenuModules() {
    this
      .clientMenuModuleService
      .getAllClientMenuModule(this.serviceId)
      .subscribe((result) => {
        const {
          data
        } = result
        this.clientMenuModuleList = data
      })
  }

  /**
   *
   *
   * @memberof AppComponent
   */
  getAllResourceGroup(){
    this
      .resourceGroupService
      .getAllResourceGroups()
      .subscribe((result) => {
        (
          {
            data: {
              resourceGroup: this.resourceGroupList
            }
          } = result
        )
      })
  }
  /**
   * Get All Resource
   *
   * @memberof AppComponent
   */
  getAllResource(){
    this
      .resourceService
      .getAllResources()
      .subscribe((result) => {
        (
          {
            data: {
              resource: this.resourceList
            }
          } = result
        )
      })
  }
  /**
   * Get All Resource types
   *
   * @memberof AppComponent
   */
  getAllResourceTypes(){
    this
      .resourceTypeService
      .getAllResourceTypes()
      .subscribe((result) => {
        (
          {
            data: {
              resourceType: this.resourceTypeList
            }
          } = result
        )
      })
  }

  /**
   *
   *
   * @memberof AppComponent
   */
  getAllModules() {
    this
      .moduleService
      .getAllModules()
      .subscribe((result) => {
        (
          {
            data: {
              module: this.modules
            }
          } = result
        )
      })
  }

  /**
   * Get all services
   *
   * @memberof AppComponent
   */
  getServiceTypes() {
    this
      .menuService
      .getServiceType()
      .subscribe((result) => {
        (
          {
            data: {
              services: this.serviceTypes
            }
          } = result
        )
      })

  }

  /**
   * Get List of Menu by Service Id
   *
   * @param {*} serviceId
   * @memberof AppComponent
   */
  getMenuListByServiceId(serviceId: any) {
    this
      .menuService
      .getMenuList(serviceId)
      .subscribe((result) => {
        (
          {
            data: this.menuList
          } = result
        )
      })
    this.serviceId = serviceId
    this.getAllClientMenuModules()
    this.getSubMenuByServiceId()
  }

  /**
   *
   *
   * @param {*} menuId
   * @memberof AppComponent
   */
  getSubMenuListByMenuId(menuId: any) {
    this
      .subMenuService
      .getSubMenuByMenuId(menuId)
      .subscribe((result) => {
        (
          {
            data: {
              clientSubMenu: this.subMenuList
            }

          } = result
        )
        console.log(result)
      })
  }

  /**
   *
   *
   * @param {*} e
   * @memberof AppComponent
   */
  onChange(e: any) {
    this.getMenuListByServiceId(e)
  }

  // Submit
  /**
   *
   *
   * @memberof AppComponent
   */
  submitMenu() {
    this
      .menuService
      .addMenu(
        {
          serviceId: Number(this.selectedServiceType),
          display: this.display,
          description: this.description,
          index: this.index,
          isActive: 1
        }
      )
      .subscribe((result) => {
        if (result) {
          location.reload()
        }
      })
  }

  /**
   *
   *
   * @memberof AppComponent
   */
  submitSubMenu() {
    this
      .subMenuService
      .addSubMenu(
        {
          clientMenuId: Number(this.selectedMenuId),
          display: this.subMenuDisplay,
          description: this.subMenuDescription,
          index: this.subMenuIndex,
        }
      )
      .subscribe((result) => {
        if (result) {
          location.reload()
        }
      })
  }

  /**
   *
   *
   * @memberof AppComponent
   */
  submitModule(){
    this
      .moduleService
      .addModule(
        {
          name: this.moduleName,
          description: this.moduleDescription,
          resourceTypeId: this.resourceTypeId,
        }
      )
      .subscribe((result) => {
        if (result) {
          location.reload()
        }
      })
  }

  /**
   *
   *
   * @memberof AppComponent
   */
  submitResource(){
    this
      .resourceService
      .addResource(
        {
          name: this.resourceName,
          path: this.path,
          method: this.method,
          allowAnonymous: Number(this.allowAnonymous),
          description: this.resourceDescription
        }
      )
      .subscribe((result) => {
        if (result) {
          location.reload()
        }
      })
  }

  /**
   *
   *
   * @memberof AppComponent
   */
  submitResourceGroup(){
    this
      .resourceGroupService
      .addResourceGroup(
        {
          name: this.resourceGroupName,
          description: this.resourceGroupDescription,
          status: 1
        }
      )
      .subscribe((result) => {
        if (result) {
          location.reload()
        }
      })
  }

  /**
   *
   *
   * @memberof AppComponent
   */
  submitModuleGroup(){
    this
      .moduleGroupService
      .addModuleGroup(
        {
          moduleId: this.moduleGroupSelectedModuleId,
          resourceGroupId: this.moduleGroupSelectedResourceGroupId,
        }
      )
      .subscribe((result) => {
        if (result) {
          console.log(result)
          // location.reload()
        }
      })

  }
  /**
   *
   *
   * @memberof AppComponent
   */
  submitClientMenuModule(){
    let payload = {
        clientMenuId: Number(this.selectedCMMMenuId),
        clientSubMenuId: Number(this.selectedCMMSubMenuId),
        moduleId:  Number(this.selectedModuleId)
      }

      for(var k in payload)
        if(!payload[k]) delete payload[k];

    this
      .clientMenuModuleService
      .addClientMenuModule(
        payload
      )
      .subscribe((result) => {
        if (result) {
         console.log(result)
          location.reload()
        }
      })
  }

  /**
   *
   *
   * @memberof AppComponent
   */
  submitGroupResource(){
    this
      .groupResourceService
      .addGroupResource(
        {
          moduleGroupId: this.groupResourceSelectedModuleGroupId,
          resourceId: this.groupResourceSelectedResourceId,
        }
      )
      .subscribe((result) => {
        if (result) {
          console.log(result)
          // location.reload()
        }
      })
    }
}
