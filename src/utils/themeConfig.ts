export const themeChanger = (vars: {}) => {
  let changed = window.less
    .modifyVars(vars)
    .then(() => {
      return true;
    })
    .catch((err) => {
      return err;
    });

  return changed;
};
