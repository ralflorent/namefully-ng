/**
 * Utils
 *
 * Created on July 10, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
export function executeInnerMethod(
    context: any,
    fn: (params?: any) => any,
    vargs: any[]
): string {
    const content = fn.apply(context, vargs);
    return Array.isArray(content)
        ? content.join(' ')
        : content;
}
