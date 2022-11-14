export const classNames = (component: string, ..._classNames: (string | undefined)[]) => {
    const classNames = _classNames ? ` ${_classNames.filter(name => !!name).join(' ')}` : '';

    return `re-use-${component}${classNames}`;
};
