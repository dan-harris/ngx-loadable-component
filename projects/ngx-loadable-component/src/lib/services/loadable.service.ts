import { ComponentFactory, Inject, Injectable, Injector, NgModuleFactory, NgModuleFactoryLoader, NgModuleRef } from '@angular/core';
import { from as ObservableFrom, Observable, throwError as ObservableThrowError } from 'rxjs';
import { LOADABLE_COMPONENT, LOADABLE_MANIFESTS, LoadableManifest } from '../models/loadable-manifest.model';

@Injectable({
  providedIn: 'root'
})
export class LoadableService {
  constructor(@Inject(LOADABLE_MANIFESTS) private manifests: Array<LoadableManifest>, private loader: NgModuleFactoryLoader, private injector: Injector) {}

  /**
   * Retrieve a ComponentFactory, based on the specified componentId (defined in the LoadableManifest array).
   */
  getComponentFactory<T>(componentId: string, injector?: Injector): Observable<ComponentFactory<T>> {
    const manifest: LoadableManifest = this.manifests.find((availableManifest: LoadableManifest) => availableManifest.componentId === componentId);

    if (!manifest) return ObservableThrowError(`DynamicComponentLoader: Unknown componentId "${componentId}"`);

    const componentPromise: Promise<ComponentFactory<any>> = this.loader.load(manifest.loadChildren).then((ngModuleFactory: NgModuleFactory<any>) => {
      const moduleRef: NgModuleRef<any> = ngModuleFactory.create(injector || this.injector);
      const dynamicComponentType: any = moduleRef.injector.get(LOADABLE_COMPONENT);

      if (!dynamicComponentType) throw new Error(`DynamicComponentLoader: Dynamic module for componentId "${componentId}" does not contain LOADABLE_COMPONENT as a provider.`);

      return moduleRef.componentFactoryResolver.resolveComponentFactory<T>(dynamicComponentType);
    });

    return ObservableFrom(componentPromise);
  }
}
