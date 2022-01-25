/**
 * @desc 获取变量数据类型
 * @param {any} val
 * @return {string} type
 */
export const getType = (val: any): string => {
    const type = Object.prototype.toString
        .call(val)
        .slice(8, -1)
        .toLowerCase()

    return type
}
