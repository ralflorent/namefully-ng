// tslint:disable-next-line
export function executeInnerMethod(context: any, fn: Function, vargs: any[]): string {
    const content = fn.apply(context, vargs)
    return Array.isArray(content) ? content.join(' ') : content
}

export type MethodOf<T> = FilterFunctionKeyOnly<T>[keyof T]

// tslint:disable-next-line
type FilterFunctionKeyOnly<T> = { [K in keyof T]: T[K] extends Function ? K : never }
