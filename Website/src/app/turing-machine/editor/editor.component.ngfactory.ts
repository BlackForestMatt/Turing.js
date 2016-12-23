/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './editor.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../turingmachineservice.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './editor.component.css.shim';
var renderType_EditorComponent_Host:import0.RenderComponentType = (null as any);
class _View_EditorComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _EditorComponent_0_4:import3.EditorComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_EditorComponent_Host0,renderType_EditorComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ts-editor',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_EditorComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._EditorComponent_0_4 = new import3.EditorComponent(this.parentInjector.get(import8.TuringmachineService));
    this._appEl_0.initComponent(this._EditorComponent_0_4,[],compView_0);
    compView_0.create(this._EditorComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.EditorComponent) && (0 === requestNodeIndex))) { return this._EditorComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._EditorComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_EditorComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_EditorComponent_Host === (null as any))) { (renderType_EditorComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_EditorComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const EditorComponentNgFactory:import10.ComponentFactory<import3.EditorComponent> = new import10.ComponentFactory<import3.EditorComponent>('ts-editor',viewFactory_EditorComponent_Host0,import3.EditorComponent);
const styles_EditorComponent:any[] = [import11.styles];
var renderType_EditorComponent:import0.RenderComponentType = (null as any);
class _View_EditorComponent0 extends import1.AppView<import3.EditorComponent> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_EditorComponent0,renderType_EditorComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'textarea',(null as any));
    this.renderer.setElementAttribute(this._el_0,'id','editorCM');
    this.renderer.setElementAttribute(this._el_0,'style','display: none;');
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init([],[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
}
export function viewFactory_EditorComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.EditorComponent> {
  if ((renderType_EditorComponent === (null as any))) { (renderType_EditorComponent = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.Emulated,styles_EditorComponent,{})); }
  return new _View_EditorComponent0(viewUtils,parentInjector,declarationEl);
}