const oget = (obj: any, path: string, defaultValue?: any): any => {
  const res = path
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .replace(/^\./, '')
    .split('.')
    .reduce((prev: any, curr) => (
      prev && prev[curr]
    ), obj);

  return (res === undefined)
    ? defaultValue
    : res;
}

export default oget;
