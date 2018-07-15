import { InjectionToken } from '@angular/core';

export const LOADABLE_COMPONENT: InjectionToken<any> = new InjectionToken<any>('LOADABLE_COMPONENT');

export const LOADABLE_MANIFESTS: InjectionToken<any> = new InjectionToken<any>('LOADABLE_MANIFESTS');

/**
 * provides required data to register a loadable component
 */
export interface LoadableManifest {

    /** 
     * unique id used by service to retrieve a component 
     * */
    componentId: string;

    /** 
     * unique id used by angular to trick route bundling
     * */
    path?: string;

    /** 
     * path to the loadable component module 
     * */
    loadChildren: string;

}