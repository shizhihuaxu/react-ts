import React from 'react'

/**
 * Similar to componentDidMount and componentDidUpdate
 *
 * @export
 * @param {() => any} onMount
 * @returns
 */
export function useOnMount(onMount: () => any) {
    return React.useEffect(() => {
        if (onMount) {
            onMount()
        }
    })
}

/**
 * Similar to componentWillUnmount
 *
 * @export
 * @param {() => any} onUnmount
 * @returns
 */
export function useOnUnmount(onUnmount: () => any) {
    return React.useEffect(() => {
        return () => onUnmount && onUnmount()
    })
}
