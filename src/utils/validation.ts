export const setActiveRoute = (
  routePathName: string,
  menuPathName: string,
  checkLevel: number
) => {
  const routePathNameSplit = routePathName.substring(1).split("/");
  const menuPathNameSplit = menuPathName.substring(1).split("/");
  for (let i = 0; i < checkLevel; i++) {
    if (routePathNameSplit[i] !== menuPathNameSplit[i]) {
      return false;
    }
  }
  return true;
};
