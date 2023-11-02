import * as tsyringe from 'tsyringe';

//Overwrite wrong declaration from tsyringe, supports TypeScript 5.x
// TODO: Remove this when library des better update

declare module 'tsyringe' {
	declare function inject(
		token: tsyringe.InjectionToken<any>
	): (target: any, propertyKey: string | symbol | undefined, parameterIndex: number) => any
}