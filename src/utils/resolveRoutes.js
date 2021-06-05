const resolveRoutes = (route) => {
  if(route.length <= 3) {
    let validRoute = route === '/' ? route: '/:id';
    return validRoute;
  }
  return `/${route}`;
}

export default resolveRoutes;


//Explicación del resolve routes
//https://dev.to/alexcamachogz/creando-un-router-con-vanilla-javascript-27pl