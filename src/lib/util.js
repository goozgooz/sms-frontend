export const renderIf = (test, trueComponent, falseComponent) => test? trueComponent : falseComponent || undefined;

export const classToggler = (options) => Object.keys(options).filter(key => options[key]).join(' ');
    